export const ADDITIONAL_PROVIDERS_EXCLUDED_FROM_REGISTER_API = [
    {
        "interimId": "82128706-3e7c-4fc5-bc2b-fc04ee8eab6c", // we made this up ourselves
        "brandName": "Solstice Energy",
        "industries": [
            "energy"
        ],
        "logoUri": "https://www.cdr.gov.au/sites/default/files/2022-08/No-logo-available-2.png",
        "publicBaseUri": "https://cdr.energymadeeasy.gov.au/solstice",
        "lastUpdated": "2024-07-17T04:52:24.383Z"
    },
    {
        "interimId": "e656b6f0-0ff0-400c-880d-51a33e3820ad", // we made this up ourselves
        "brandName": "iO Energy Retail Services",
        "industries": [
            "energy"
        ],
        "logoUri": "https://www.cdr.gov.au/sites/default/files/2022-08/No-logo-available-2.png",
        "publicBaseUri": "https://cdr.energymadeeasy.gov.au/io-energy",
        "lastUpdated": "2024-07-17T04:52:24.383Z"
    },
    {
        "interimId": "51d53af9-55d6-42ff-b94a-0b54f9bf5af6", // we made this up ourselves
        "brandName": "Tesla Energy Ventures",
        "industries": [
            "energy"
        ],
        "logoUri": "https://www.cdr.gov.au/sites/default/files/2022-08/No-logo-available-2.png",
        "publicBaseUri": "https://cdr.energymadeeasy.gov.au/tesla",
        "lastUpdated": "2024-07-17T04:52:24.383Z"
    }
]

// Fallback for hardcoded mappings from interimId to prdBaseUri
export const HARDCODED_INTERIM_ID_PRD_MAPPING = {
    "37aebb2d-d96c-419f-8be4-f42cdffdb238": "https://cdr.energymadeeasy.gov.au/origin",
    "a94e942b-6d39-4b4d-9b31-88e7cb65f6d1": "https://cdr.energymadeeasy.gov.au/agl",
    "1f1ef12a-f96f-467d-a69a-08160f2e6576": "https://cdr.energymadeeasy.gov.au/energyaustralia",
    "78943358-0f53-4518-ac7d-f6a1903e276d": "https://cdr.energymadeeasy.gov.au/1st-energy",
    "be9f78ea-d0cb-44a3-8318-09e41b2a0118": "https://cdr.energymadeeasy.gov.au/actewagl",
    "fb416e50-6dda-470e-a2aa-a108efd433b4": "https://cdr.energymadeeasy.gov.au/active-utilities",
    "cd3f2e4f-bbef-4890-864b-67b7698c4624": "https://cdr.energymadeeasy.gov.au/alinta",
    "d4aa3c79-ef00-454c-b1f0-dbd01b25bcca": "https://cdr.energymadeeasy.gov.au/altogether",
    "dbfb4be7-27bf-4335-9d92-7e25f1bb8e2a": "https://cdr.energymadeeasy.gov.au/amber",
    "e48e8b94-ff6b-44cf-a572-0dff928cf056": "https://cdr.energymadeeasy.gov.au/ampol",
    "e7efef1f-22b8-4a15-826c-047f71aa2d20": "https://cdr.energymadeeasy.gov.au/arc-energy",
    "8a28d246-46ba-4ff3-afcd-14b7d728fa1c": "https://cdr.energymadeeasy.gov.au/arcline",
    "bd2863a7-8430-4656-88bf-56bb5c12663c": "https://cdr.energymadeeasy.gov.au/arcstream",
    "d5693987-1937-4f43-bddc-9df57b1866b0": "https://cdr.energymadeeasy.gov.au/aurora",
    "ea94715b-96fa-4ed2-9a44-6a7f1f40676c": "https://cdr.energymadeeasy.gov.au/besy",
    "f918026a-b02c-4dea-89a0-e3295b7e7812": "https://cdr.energymadeeasy.gov.au/blue-nrg",
    "736b2c27-aa4b-4554-987b-80101a93b728": "https://cdr.energymadeeasy.gov.au/brighte",
    "040f7f80-c3b2-4a10-8e15-ebb9f324bad6": "https://cdr.energymadeeasy.gov.au/circular",
    "40c3b4cd-2df1-4d55-843e-a7ff32aa9dc6": "https://cdr.energymadeeasy.gov.au/cleanco",
    "d2c959ec-e0d4-4fc4-bcb3-2faf8060cd18": "https://cdr.energymadeeasy.gov.au/cleanpeak",
    "db23f052-0bec-48ab-87fe-59290d142704": "https://cdr.energymadeeasy.gov.au/coles",
    "bca9760e-667f-4176-b54b-baf0ed04c9ae": "https://cdr.energymadeeasy.gov.au/commander",
    "15ed284e-f7b0-440d-b5dc-e9fe4c28c410": "https://cdr.energymadeeasy.gov.au/covau",
    "46b1550c-fd41-40ff-8374-2af6d0cc7293": "https://cdr.energymadeeasy.gov.au/cpe-mascot",
    "3a767c2a-017c-44ac-b5c8-436689d397b6": "https://cdr.energymadeeasy.gov.au/diamond",
    "89b94654-8f1b-4e49-bcdb-7ab5df451372": "https://cdr.energymadeeasy.gov.au/discover",
    "052218fc-fb37-4087-b2cc-ced3f0dad299": "https://cdr.energymadeeasy.gov.au/dodo",
    "6dfc2033-f5ba-4e61-8119-1eac508e0ad1": "https://cdr.energymadeeasy.gov.au/ea-connect",
    "dd2dfd26-60e1-44a3-9c29-bc1530941ca3": "https://cdr.energymadeeasy.gov.au/electricity-in-a-box",
    "1a7c7ab5-f351-4039-8c99-21ff2a8f1787": "https://cdr.energymadeeasy.gov.au/energy-locals",
    "3f85802e-1636-4e3a-9395-cba0062bfab9": "https://cdr.energymadeeasy.gov.au/ergon",
    "2a5c40a1-2354-4847-93fb-d2d0bd1c1e32": "https://cdr.energymadeeasy.gov.au/erm-power",
    "d433eba6-dfb2-4d88-94e2-771b1157dd62": "https://cdr.energymadeeasy.gov.au/evergy",
    "ee434966-7168-4884-9b98-98d71bd3ef3c": "https://cdr.energymadeeasy.gov.au/flow-power",
    "4f4e5544-4b5b-475d-bb1e-3ea51e60412b": "https://cdr.energymadeeasy.gov.au/flow-systems",
    "f112314b-b7f3-45a0-b586-49573f8953ce": "https://cdr.energymadeeasy.gov.au/future-x",
    "a983ebe7-14b5-4c15-8d69-6d5aac7f47ef": "https://cdr.energymadeeasy.gov.au/gee-energy",
    "a259655d-31c2-4492-a5d9-2207f46c0713": "https://cdr.energymadeeasy.gov.au/globird",
    "6fd3819d-4c31-4525-82cc-bd6f445af3d2": "https://cdr.energymadeeasy.gov.au/glow-power",
    "126f03dc-3947-428b-99fd-685b94fe1363": "https://cdr.energymadeeasy.gov.au/humenergy",
    "3e2d5a2a-2fb4-4ef6-bf7f-86e2f68ef620": "https://cdr.energymadeeasy.gov.au/igeno",
    "0ca1b95d-7f73-4bf9-99a3-fa428d26d733": "https://cdr.energymadeeasy.gov.au/kogan",
    "d1c6becb-c00e-4e23-8117-227a4ecc03b0": "https://cdr.energymadeeasy.gov.au/locality-planning",
    "9f59f54f-aeec-44ff-b481-a7e10be6a28e": "https://cdr.energymadeeasy.gov.au/localvolts",
    "bc9c8ab7-5dc7-4b6b-ac48-2fe68fa781db": "https://cdr.energymadeeasy.gov.au/lumo",
    "81e1f31b-c676-4f7b-8648-4a59b29be236": "https://cdr.energymadeeasy.gov.au/macquarie",
    "cd90f1f3-a930-4674-9ce7-18a9dbc1eeb3": "https://cdr.energymadeeasy.gov.au/metered-energy",
    "db8a51cd-63f3-4979-8002-e410cb95a8f3": "https://cdr.energymadeeasy.gov.au/microgrid",
    "6bd58cb3-042a-4af5-b0bf-856589db4ae9": "https://cdr.energymadeeasy.gov.au/mojo",
    "b43ff855-5598-4dbb-8c1c-582f02c71e6f": "https://cdr.energymadeeasy.gov.au/momentum",
    "6b6e0923-4a4a-455a-a1b0-9f3228175788": "https://cdr.energymadeeasy.gov.au/nectr",
    "97d5098f-d882-454b-979c-3c2b3cdbf44d": "https://cdr.energymadeeasy.gov.au/next-business",
    "c5232022-a219-4892-a05d-01419c8a37cb": "https://cdr.energymadeeasy.gov.au/on-by-energyaustralia",
    "59aabae5-18fa-4a69-a2ce-50d197716c33": "https://cdr.energymadeeasy.gov.au/ovo-energy",
    "34ae9e94-158a-4d3e-9a0f-3682ab04dd15": "https://cdr.energymadeeasy.gov.au/people-energy",
    "c43e786c-ce1f-48f2-b551-8a8e5c67cf47": "https://cdr.energymadeeasy.gov.au/powerdirect",
    "9a676d1f-6ec5-48a4-98af-5a2ab293d373": "https://cdr.energymadeeasy.gov.au/powerhub",
    "5141e4da-11cf-44ef-900b-54682bc0a49f": "https://cdr.energymadeeasy.gov.au/powershop",
    "499d880c-ee78-44ba-9442-a275f9465290": "https://cdr.energymadeeasy.gov.au/powow",
    "68b37f24-aaad-4f54-8fcc-ad9be71c7553": "https://cdr.energymadeeasy.gov.au/qenergy",
    "4fd2ea8f-504b-4432-a5ca-d6d6a22fa5c8": "https://cdr.energymadeeasy.gov.au/radian",
    "a10b23c3-af4d-458a-a22b-7b91ba09e8d2": "https://cdr.energymadeeasy.gov.au/real-utilities",
    "8a3bdc5f-f702-4660-85b6-cfb321b845f4": "https://cdr.energymadeeasy.gov.au/reamped",
    "eb76743a-4ee5-40a7-aa1b-bd3b719a7622": "https://cdr.energymadeeasy.gov.au/red-energy",
    "7de5cab6-0d84-464e-8181-950e265f3f7a": "https://cdr.energymadeeasy.gov.au/sanctuary",
    "3d4f1a26-66b6-4457-9877-5389818f1b75": "https://cdr.energymadeeasy.gov.au/seene",
    "baa3b594-2022-48ed-bf0d-9abeb74f4952": "https://cdr.energymadeeasy.gov.au/shell-energy",
    "73df4586-b3c5-435f-b996-3c29ef0802ba": "https://cdr.energymadeeasy.gov.au/simply-energy",
    "d3181009-82ca-4dde-8c30-a19db4412374": "https://cdr.energymadeeasy.gov.au/smart-energy",
    "de40df1e-b0d8-47e0-8763-6a1859caa451": "https://cdr.energymadeeasy.gov.au/smartestenergy",
    "0e510b9e-6c17-44e9-b2c4-b287ec2842fb": "https://cdr.energymadeeasy.gov.au/sonnen",
    "58e05a48-1826-4adb-be5f-4d71af1494ca": "https://cdr.energymadeeasy.gov.au/stanwell",
    "d3146a7f-bcdd-4f60-9c03-e4cf47ad3e89": "https://cdr.energymadeeasy.gov.au/sumo-gas",
    "ee2a4982-1616-4fe4-982a-8633293002ec": "https://cdr.energymadeeasy.gov.au/sumo-power",
    "5c3a9def-c09b-4cbc-807d-a18364ee5232": "https://cdr.energymadeeasy.gov.au/tango",
    "ea345a5a-8b10-487f-af91-bfd48b0df577": "https://cdr.energymadeeasy.gov.au/tas-gas",
    "d709dd2d-e1df-44ec-b427-90865c77b7bf": "https://cdr.energymadeeasy.gov.au/telstra-energy",
    "cfff6141-0d91-4c25-b708-eff75fa7de5e": "https://cdr.energymadeeasy.gov.au/winconnect",
    "d43e8fb4-b1a2-4cfd-bde4-ab91daec7399": "https://cdr.energymadeeasy.gov.au/yes-energy",
    "6cbf6fb7-f565-4f2e-9b65-903b0badb20c": "https://cdr.energymadeeasy.gov.au/zen-energy"
}
