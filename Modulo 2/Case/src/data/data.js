const merchantsData = [
    {
        "id": 1,
        "name": "Outback SteakHouse",
        "address": {
            "streetName": "Avenida do Estado",
            "number": "121",
            "state": "RJ",
            "city": "Barra da Tijuca",
            "postalCode": "98680-149",
            "coordenates": {
                "latitude": -97423,
                "longitude": -5416788
            }
        },
        "hq": true,
        "hqId": false,
        "openingDays": "Wednesday to Sunday",
        "businessHours": {
            "open": "11:00",
            "close": "01:00"
        },
        "averageTicket": 3105980.19,
        "status": true,
        "typeOfService": [1, 3],
        "categories":[1, 3, 9],
        "message": ""
    },
    {
        "id": 3,
        "name": "Outback Jundiaí",
        "address": {
            "streetName": "Rua Pedro",
            "number": "32",
            "state": "SP",
            "city": "Jundiaí",
            "postalCode": "98089-589",
            "coordenates": {
                "latitude": 21414,
                "longitude": 9342
            }
        },
        "hq": false,
        "hqId": 1,
        "openingDays": "Saturday",
        "businessHours": [
            {
                "open": "11:00",
                "close": "14:00"
            },
            {
                "open": "17:00",
                "close": "02:00"
            }
        ],
        "averageTicket": 219900.058,
        "status": false,
        "typeOfService": [1, 3],
        "categories":[1, 4, 6, 7],
        "message": ""
    },
    {
        "id": 2,
        "name": "Rei do Mate Francis",
        "address": {
            "streetName": "Avenida Francis",
            "number": "1830",
            "state": "RS",
            "city": "Porto Alegre",
            "postalCode": "10989-190",
            "coordenates": {
                "latitude": 654234,
                "longitude": 436534
            }
        },
        "hq": true,
        "hqId": false,
        "openingDays": "Tuesday to Thursday",
        "businessHours": {
            "open": "11:00",
            "close": "22:00"
        },
        "averageTicket": 718910.81,
        "status": false,
        "typeOfService": [1],
        "categories":[1, 6, 7,],
        "message": ""
    },
    {
        "id": 4,
        "name": "Rei do Mate Lago Azul",
        "address": {
            "streetName": "Rua Calangos",
            "number": "756",
            "state": "PA",
            "city": "Belém",
            "postalCode": "50919-340",
            "coordenates": {
                "latitude": 98412,
                "longitude": -845156
            }
        },
        "hq": false,
        "hqId": 2,
        "openingDays": "Tuesday to Thursday",
        "businessHours": {
            "open": "11:00",
            "close": "22:00"
        },
        "averageTicket": 998419.90,
        "status": true,
        "typeOfService": [1, 3],
        "categories":[1, 4, 6, 7],
        "message": ""
    }
]

export default merchantsData;


/*
{
        "id": 5,
        "name": "Outback Max Ville",
        "address": {
            "streetName": "Estrada das Oliveiras",
            "number": "990",
            "state": "MG",
            "city": "Extrema",
            "postalCode": "37604-000",
            "coordenates": {
                "latitude": 985435,
                "longitude": 23724
            }
        },
        "hq": false,
        "hqId": 1,
        "openingDays": "Saturday",
        "businessHours": [
            {
            "open": "11:00",
            "close": "14:00"
            },
            {
                "open": "17:00",
                "close": "22:00"
            }
        ],    
        "averageTicket": 1890359.09378,
        "status": true,
        "typeOfService": [
            1
        ],
        "categories": [
            2
        ],
        "message": ""
}
*/