# Energy CDR Product Reference Data Endpoints

This repository hosts a community-managed list of Energy CDR Product Reference Data endpoints hosted by the AER.  [AER publishes](https://www.aer.gov.au/consumers/energy-product-reference-data) this list as a PDF file which is not accessible or machine-readable for the purposes of endpoint discovery.

This repository contains code which attempts to reconstruct the ACCC Register API response and hydrate with missing fields and information including:

* `productReferenceDataBaseUri` field as proposed in [SM#561](https://github.com/ConsumerDataStandardsAustralia/standards-maintenance/issues/561)
* `acn` and `abn` fields where available
* `logoUri` sourced from Energy Made Easy where the original URI is a placeholder provided by the ACCC

## Accessing the feed

The feed is available via:

* GitHub Pages: https://jxeeno.github.io/energy-cdr-prd-endpoints/energy-prd-endpoints.json
* GitHub (raw content): https://raw.githubusercontent.com/jxeeno/energy-cdr-prd-endpoints/main/docs/energy-prd-endpoints.json
* Within this git repo: `docs/energy-prd-endpoints.json`

## Data sources

### ACCC Register API

The ACCC Register API is the primary source of this information.  However, the endpoint listed in`publicBaseUri` transitions to the brand's status and outage endpoints when the entity becomes a consumer data holder.  These endpoints are not required to return product reference data despite the specification suggesting it would do so because AER is the data holder for the product data (and not the brand's entity).

### Energy Made Easy Reference Data

This repository makes use of reference data from the Energy Made Easy API and uses this data to hydrate the Register API.

`https://api.energymadeeasy.gov.au/refData?keys=organisations,thirdParties`

For example:

```json
{
  "tradingName": "Ergon Energy Queensland Pty Ltd",
  "orgName": "Ergon Energy",
  "websiteURL": "www.ergon.com.au",
  "electricityBillURL": "www.ergon.com.au/retail/residential/billing-and-payments/understanding-your-bill",
  "logo": "/static/organisations/logos/ergon_retail.png",
  "retailerCode": "ERG",
  "cdrCode": "ergon",
  "smallBusinessContact": "1300 135 210",
  "residentialContact": "13 10 46",
  "abn": "11 121 177 802",
  "orgId": "1559"
}
```

is used to generate the following object for hydration:

```json
{
   "productReferenceDataBaseUri": "https://cdr.energymadeeasy.gov.au/ergon",
   "logoUri": "https://energymadeeasy.gov.au/static/organisations/logos/ergon_retail.png",
   "abn": "11121177802",
   "acn": "121177802"
}
```


### Hardcoded data

We maintain hardcoded data in `src/hardcode.js` as a fallback for the `productReferenceDataBaseUri` field if any data is not available through alternative data matching arrangements.

## Data provenance

### `productReferenceDataBaseUri`

Product Reference Data endpoints base URL

This field is sourced from:

1. `publicBaseUri` from the ACCC Register API where the value starts with `https://cdr.energymadeeasy.gov.au/`
2. Where a valid match is made to Energy Made Easy API organisation reference data, the following value is constructed `https://cdr.energymadeeasy.gov.au/<cdrCode>`.
3. Where the mapping table in `hardcode.js` (`HARDCODED_INTERIM_ID_PRD_MAPPING`) contains a match for `interimId`, the resulting value is used as a fallback.

### `abn` and `acn`
Australian Business Number for the organisation;
Australian Company Number for the organisation


This field is sourced from:

1. Directly from ACCC Register API where the value is available
2. Where a valid match is made to Energy Made Easy API organisation reference data, the `abn` is constructed by stripping whitespace within the `abn` field provided in the reference data.  `acn` is the `abn` without the leading 2 characters.


### `logoUri`

Data Holder Brand logo URL

This field is sourced from:

1. `logoUri` from the ACCC Register API where the value does not end with `No-logo-available-2.png`
2. Where a valid match is made to Energy Made Easy API organisation reference data, the following value is constructed `https://energymadeeasy.gov.au/<logo>`.

### Other fields

All other fields are supplied as is from the ACCC Register API.
