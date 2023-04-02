import axios from "axios";
import fs from "fs";
import { HARDCODED_INTERIM_ID_PRD_MAPPING } from "./hardcode.js";

export class EnergyCdrPrdEndpointAggregator {
    endpoints = new Map()
    emeAdaptedData = new Map()

    async zipper(){
        await this.loadEmeReferenceData();
        await this.loadAcccCdrRegisterData();
        this.export()
    }

    loadEmeReferenceData = async () => {
        const {data} = await axios.get('https://api.energymadeeasy.gov.au/refData', {
            params: {
                keys: 'organisations,thirdParties',
                latest: new Date().valueOf()
            }
        });

        for(const organisation of Object.values(data.organisations)){
            if(organisation.cdrCode){
                const orgName = organisation.orgName.trim()
                const productReferenceDataBaseUri = `https://cdr.energymadeeasy.gov.au/${organisation.cdrCode}`;
                const entity = {
                    abn: organisation.abn.replace(/ /g, ''),
                    acn: organisation.abn.replace(/ /g, '').slice(2),
                    productReferenceDataBaseUri,
                    logoUri: `https://energymadeeasy.gov.au${organisation.logo}`
                };
                this.emeAdaptedData.set(orgName, entity);
                this.emeAdaptedData.set(productReferenceDataBaseUri, entity);
            }
        }
    }

    loadAcccCdrRegisterData = async () => {
        const {data} = await axios.get('https://api.cdr.gov.au/cdr-register/v1/energy/data-holders/brands/summary', {
            headers: {
                'x-v': 1
            }
        });

        for(const brand of data.data){
            // if the energy provider has not been designated a data holder for consumer data,
            // the ACCC API will return the AER CDR endpoint
            if(brand?.publicBaseUri.startsWith('https://cdr.energymadeeasy.gov.au/')){
                brand.productReferenceDataBaseUri = brand.publicBaseUri;
            }

            // Check if there is a mapping to EME data
            const adaptedData = this.emeAdaptedData.get(brand.productReferenceDataBaseUri) ?? this.emeAdaptedData.get(brand.brandName);
            if(adaptedData){
                console.log(`Matched ${brand.brandName} to EME data: ${adaptedData.productReferenceDataBaseUri}`);
                
                if(!brand.productReferenceDataBaseUri){
                    brand.productReferenceDataBaseUri = adaptedData.productReferenceDataBaseUri;
                }

                if(brand.logoUri.endsWith('No-logo-available-2.png')){
                    brand.logoUri = adaptedData.logoUri;
                }

                if(brand.acn == null){
                    brand.acn = adaptedData.acn
                }

                if(brand.abn == null){
                    brand.abn = adaptedData.abn
                }
            }

            // if an interim ID is present, maybe we've already hardcoded the PRD endpoint
            if(brand.interimId && !brand.productReferenceDataBaseUri){
                if(HARDCODED_INTERIM_ID_PRD_MAPPING[brand.interimId]){
                    brand.productReferenceDataBaseUri = HARDCODED_INTERIM_ID_PRD_MAPPING[brand.interimId];
                }
            }

            if(brand.productReferenceDataBaseUri){
                this.endpoints.set(brand.productReferenceDataBaseUri, brand);
            }
        }
    }

    export() {
        fs.writeFileSync("docs/energy-prd-endpoints.json", JSON.stringify({
            data: Array.from(this.endpoints.values())
        }, null, 4))
    }
}