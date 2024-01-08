import type { GetSetsParams, GetSetsResponse } from '~/types';
import type { Set } from '~/types/set';

export function useSetQuery(pageSize: number = 20) {
    const mockData = [
        {
            "status": "success",
            "matches": 161,
            "sets": [
                {
                    "setID": 26375,
                    "number": "41490",
                    "numberVariant": 1,
                    "name": "Superman & Wonder Woman",
                    "year": 2016,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "DC Comics Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 220,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41490-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41490-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41490-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 288,
                        "wantedBy": 1684
                    },
                    "LEGOCom": {
                        "US": {},
                        "UK": {},
                        "CA": {},
                        "DE": {}
                    },
                    "rating": 0,
                    "reviewCount": 0,
                    "packagingType": "Box",
                    "availability": "Promotional",
                    "instructionsCount": 0,
                    "additionalImageCount": 0,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {},
                    "barcode": {},
                    "extendedData": {},
                    "lastUpdated": "2017-02-15T21:01:48.913Z"
                },
                {
                    "setID": 26374,
                    "number": "41491",
                    "numberVariant": 1,
                    "name": "Batman & The Joker",
                    "year": 2016,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "DC Comics Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 212,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41491-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41491-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41491-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 299,
                        "wantedBy": 1824
                    },
                    "LEGOCom": {
                        "US": {},
                        "UK": {},
                        "CA": {},
                        "DE": {}
                    },
                    "rating": 0,
                    "reviewCount": 0,
                    "packagingType": "Box",
                    "availability": "Promotional",
                    "instructionsCount": 0,
                    "additionalImageCount": 0,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {},
                    "barcode": {},
                    "extendedData": {},
                    "lastUpdated": "2017-02-15T21:02:11.05Z"
                },
                {
                    "setID": 26377,
                    "number": "41492",
                    "numberVariant": 1,
                    "name": "Iron Man & Captain America",
                    "year": 2016,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Marvel Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 184,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41492-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41492-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41492-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 294,
                        "wantedBy": 1755
                    },
                    "LEGOCom": {
                        "US": {},
                        "UK": {},
                        "CA": {},
                        "DE": {}
                    },
                    "rating": 0,
                    "reviewCount": 0,
                    "packagingType": "Box",
                    "availability": "Promotional",
                    "instructionsCount": 0,
                    "additionalImageCount": 0,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {},
                    "barcode": {},
                    "extendedData": {},
                    "lastUpdated": "2017-02-15T21:02:28.49Z"
                },
                {
                    "setID": 26376,
                    "number": "41493",
                    "numberVariant": 1,
                    "name": "Black Panther & Doctor Strange",
                    "year": 2016,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Marvel Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 173,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41493-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41493-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41493-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 301,
                        "wantedBy": 1830
                    },
                    "LEGOCom": {
                        "US": {},
                        "UK": {},
                        "CA": {},
                        "DE": {}
                    },
                    "rating": 0,
                    "reviewCount": 0,
                    "packagingType": "Box",
                    "availability": "Promotional",
                    "instructionsCount": 0,
                    "additionalImageCount": 0,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {},
                    "barcode": {},
                    "extendedData": {},
                    "lastUpdated": "2017-02-15T21:03:27.42Z"
                },
                {
                    "setID": 27592,
                    "number": "41485",
                    "numberVariant": 1,
                    "name": "Finn",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Star Wars",
                    "category": "Normal",
                    "released": true,
                    "pieces": 91,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41485-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41485-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41485-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 4206,
                        "wantedBy": 1392
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-11-01T00:00:00Z",
                            "dateLastAvailable": "2018-07-12T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-11-01T00:00:00Z",
                            "dateLastAvailable": "2018-03-01T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2017-11-01T00:00:00Z",
                            "dateLastAvailable": "2018-07-12T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-11-02T00:00:00Z",
                            "dateLastAvailable": "2018-03-02T00:00:00Z"
                        }
                    },
                    "rating": 3.4,
                    "reviewCount": 1,
                    "packagingType": "Box",
                    "availability": "Retail - limited",
                    "instructionsCount": 2,
                    "additionalImageCount": 3,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.2,
                        "width": 9.1,
                        "depth": 7.8
                    },
                    "barcode": {
                        "EAN": "5702016198973",
                        "UPC": "673419286886"
                    },
                    "extendedData": {},
                    "lastUpdated": "2017-10-06T20:51:28.25Z"
                },
                {
                    "setID": 27591,
                    "number": "41486",
                    "numberVariant": 1,
                    "name": "Captain Phasma",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Star Wars",
                    "category": "Normal",
                    "released": true,
                    "pieces": 127,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41486-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41486-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41486-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 4205,
                        "wantedBy": 1584
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-11-01T00:00:00Z",
                            "dateLastAvailable": "2018-09-24T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-11-01T00:00:00Z",
                            "dateLastAvailable": "2018-02-09T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2017-11-01T00:00:00Z",
                            "dateLastAvailable": "2018-09-24T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-11-02T00:00:00Z",
                            "dateLastAvailable": "2018-02-07T00:00:00Z"
                        }
                    },
                    "rating": 3.5,
                    "reviewCount": 2,
                    "packagingType": "Box",
                    "availability": "Retail - limited",
                    "instructionsCount": 2,
                    "additionalImageCount": 3,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.2,
                        "width": 9.1,
                        "depth": 7.8
                    },
                    "barcode": {
                        "EAN": "5702016198966",
                        "UPC": "673419286893"
                    },
                    "extendedData": {},
                    "lastUpdated": "2017-10-06T20:50:45.75Z"
                },
                {
                    "setID": 27538,
                    "number": "41487",
                    "numberVariant": 1,
                    "name": "Lloyd",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "The LEGO Ninjago Movie",
                    "category": "Normal",
                    "released": true,
                    "pieces": 102,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41487-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41487-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41487-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 2987,
                        "wantedBy": 967
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-09-24T00:00:00Z",
                            "dateLastAvailable": "2018-09-07T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-11-01T00:00:00Z",
                            "dateLastAvailable": "2018-03-11T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2017-09-24T00:00:00Z",
                            "dateLastAvailable": "2018-09-07T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-11-02T00:00:00Z",
                            "dateLastAvailable": "2018-03-11T00:00:00Z"
                        }
                    },
                    "rating": 3.8,
                    "reviewCount": 0,
                    "packagingType": "Box",
                    "availability": "Retail - limited",
                    "instructionsCount": 2,
                    "additionalImageCount": 3,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.2,
                        "width": 9.1,
                        "depth": 7.8
                    },
                    "barcode": {
                        "EAN": "5702016198980",
                        "UPC": "673419286909"
                    },
                    "extendedData": {},
                    "lastUpdated": "2021-03-30T08:13:09.783Z"
                },
                {
                    "setID": 27539,
                    "number": "41488",
                    "numberVariant": 1,
                    "name": "Master Wu",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "The LEGO Ninjago Movie",
                    "category": "Normal",
                    "released": true,
                    "pieces": 89,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41488-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41488-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41488-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 3192,
                        "wantedBy": 929
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-09-24T00:00:00Z",
                            "dateLastAvailable": "2018-10-25T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-11-01T00:00:00Z",
                            "dateLastAvailable": "2018-03-16T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2017-09-24T00:00:00Z",
                            "dateLastAvailable": "2018-10-25T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-11-02T00:00:00Z",
                            "dateLastAvailable": "2018-03-17T00:00:00Z"
                        }
                    },
                    "rating": 3.6,
                    "reviewCount": 1,
                    "packagingType": "Box",
                    "availability": "Retail - limited",
                    "instructionsCount": 2,
                    "additionalImageCount": 3,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.2,
                        "width": 9.1,
                        "depth": 7.8
                    },
                    "barcode": {
                        "EAN": "5702016198997",
                        "UPC": "673419286916"
                    },
                    "extendedData": {},
                    "lastUpdated": "2021-03-30T08:13:24.103Z"
                },
                {
                    "setID": 27626,
                    "number": "41489",
                    "numberVariant": 1,
                    "name": "Rey & Kylo Ren",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Star Wars",
                    "category": "Collection",
                    "released": true,
                    "pieces": 249,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41489-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41489-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41489-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 2730,
                        "wantedBy": 1241
                    },
                    "LEGOCom": {
                        "US": {},
                        "UK": {},
                        "CA": {},
                        "DE": {}
                    },
                    "rating": 4,
                    "reviewCount": 0,
                    "packagingType": "Box",
                    "availability": "Retail - limited",
                    "instructionsCount": 2,
                    "additionalImageCount": 1,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 14.1,
                        "width": 19.1,
                        "depth": 7.1
                    },
                    "barcode": {
                        "UPC": "673419286923"
                    },
                    "extendedData": {},
                    "lastUpdated": "2021-04-23T16:28:36.75Z"
                },
                {
                    "setID": 27277,
                    "number": "41496",
                    "numberVariant": 1,
                    "name": "Supergirl & Martian Manhunter",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "DC Comics Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 234,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41496-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41496-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41496-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 329,
                        "wantedBy": 1454
                    },
                    "LEGOCom": {
                        "US": {},
                        "UK": {},
                        "CA": {},
                        "DE": {}
                    },
                    "rating": 0,
                    "reviewCount": 0,
                    "packagingType": "Box",
                    "availability": "Promotional",
                    "instructionsCount": 0,
                    "additionalImageCount": 0,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {},
                    "barcode": {},
                    "extendedData": {},
                    "lastUpdated": "2017-07-20T20:40:07.387Z"
                },
                {
                    "setID": 27276,
                    "number": "41497",
                    "numberVariant": 1,
                    "name": "Spider-Man & Venom",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Marvel Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 144,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41497-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41497-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41497-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 328,
                        "wantedBy": 1836
                    },
                    "LEGOCom": {
                        "US": {},
                        "UK": {},
                        "CA": {},
                        "DE": {}
                    },
                    "rating": 0,
                    "reviewCount": 0,
                    "packagingType": "Box",
                    "availability": "Promotional",
                    "instructionsCount": 0,
                    "additionalImageCount": 0,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {},
                    "barcode": {},
                    "extendedData": {},
                    "lastUpdated": "2017-07-20T20:40:07.927Z"
                },
                {
                    "setID": 27574,
                    "number": "41498",
                    "numberVariant": 1,
                    "name": "Boba Fett and Han Solo in Carbonite",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Star Wars",
                    "category": "Normal",
                    "released": true,
                    "pieces": 329,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41498-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41498-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41498-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 706,
                        "wantedBy": 3304
                    },
                    "LEGOCom": {
                        "US": {},
                        "UK": {},
                        "CA": {},
                        "DE": {}
                    },
                    "rating": 4.5,
                    "reviewCount": 1,
                    "packagingType": "Box",
                    "availability": "Promotional",
                    "instructionsCount": 0,
                    "additionalImageCount": 0,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {},
                    "barcode": {},
                    "extendedData": {},
                    "lastUpdated": "2017-10-06T12:59:52.433Z"
                },
                {
                    "setID": 27010,
                    "number": "41585",
                    "numberVariant": 1,
                    "name": "Batman",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "DC Comics Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 91,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41585-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41585-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41585-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 8090,
                        "wantedBy": 1186
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2017-11-24T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-01-02T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2017-11-24T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-01-03T00:00:00Z"
                        }
                    },
                    "rating": 3.9,
                    "reviewCount": 2,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 2,
                    "additionalImageCount": 1,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.192,
                        "width": 9.0932,
                        "depth": 7.7978,
                        "weight": 0.117933922
                    },
                    "barcode": {
                        "UPC": "673419264143"
                    },
                    "extendedData": {},
                    "lastUpdated": "2017-02-28T20:45:39.877Z"
                },
                {
                    "setID": 27011,
                    "number": "41586",
                    "numberVariant": 1,
                    "name": "Batgirl",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "DC Comics Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 99,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41586-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41586-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41586-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 6219,
                        "wantedBy": 895
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-04-04T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2017-12-30T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-04-04T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2017-12-30T00:00:00Z"
                        }
                    },
                    "rating": 3.8,
                    "reviewCount": 0,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 2,
                    "additionalImageCount": 1,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.192,
                        "width": 9.0932,
                        "depth": 7.7978,
                        "weight": 0.117933922
                    },
                    "barcode": {
                        "EAN": "5702015864251",
                        "UPC": "673419267151"
                    },
                    "extendedData": {},
                    "lastUpdated": "2017-02-28T20:46:14.403Z"
                },
                {
                    "setID": 27012,
                    "number": "41587",
                    "numberVariant": 1,
                    "name": "Robin",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "DC Comics Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 101,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41587-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41587-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41587-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 6824,
                        "wantedBy": 977
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-03-16T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-01-02T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-03-16T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-01-02T00:00:00Z"
                        }
                    },
                    "rating": 3.8,
                    "reviewCount": 1,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 2,
                    "additionalImageCount": 1,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.192,
                        "width": 9.0932,
                        "depth": 7.7978,
                        "weight": 0.117933922
                    },
                    "barcode": {
                        "EAN": "5702015864268",
                        "UPC": "673419267168"
                    },
                    "extendedData": {},
                    "lastUpdated": "2017-02-28T20:46:24.247Z"
                },
                {
                    "setID": 27013,
                    "number": "41588",
                    "numberVariant": 1,
                    "name": "The Joker",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "DC Comics Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 151,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41588-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41588-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41588-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 7617,
                        "wantedBy": 1085
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-03-20T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-01-28T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-03-20T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-01-29T00:00:00Z"
                        }
                    },
                    "rating": 4.1,
                    "reviewCount": 1,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 2,
                    "additionalImageCount": 1,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.192,
                        "width": 9.0932,
                        "depth": 7.7978,
                        "weight": 0.1451494
                    },
                    "barcode": {
                        "UPC": "673419267175"
                    },
                    "extendedData": {},
                    "lastUpdated": "2018-11-15T13:23:16.34Z"
                },
                {
                    "setID": 27014,
                    "number": "41589",
                    "numberVariant": 1,
                    "name": "Captain America",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Marvel Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 79,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41589-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41589-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41589-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 6643,
                        "wantedBy": 1342
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2017-12-10T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-01-02T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2017-12-10T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-01-03T00:00:00Z"
                        }
                    },
                    "rating": 3.8,
                    "reviewCount": 1,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 2,
                    "additionalImageCount": 1,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.192,
                        "width": 9.0932,
                        "depth": 7.7978,
                        "weight": 0.104326159
                    },
                    "barcode": {
                        "UPC": "673419267182"
                    },
                    "extendedData": {},
                    "lastUpdated": "2017-02-28T20:46:59.43Z"
                },
                {
                    "setID": 27016,
                    "number": "41590",
                    "numberVariant": 1,
                    "name": "Iron Man",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Marvel Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 96,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41590-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41590-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41590-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 7107,
                        "wantedBy": 1371
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2017-12-18T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-01-07T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2017-12-18T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-01-07T00:00:00Z"
                        }
                    },
                    "rating": 3.9,
                    "reviewCount": 2,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 2,
                    "additionalImageCount": 1,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.192,
                        "width": 9.0932,
                        "depth": 7.7978,
                        "weight": 0.10886208
                    },
                    "barcode": {
                        "UPC": "673419267199"
                    },
                    "extendedData": {},
                    "lastUpdated": "2017-02-28T20:47:11.34Z"
                },
                {
                    "setID": 27015,
                    "number": "41591",
                    "numberVariant": 1,
                    "name": "Black Widow",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Marvel Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 143,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41591-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41591-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41591-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 6163,
                        "wantedBy": 1088
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-04-03T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2017-12-30T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-04-03T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2017-12-30T00:00:00Z"
                        }
                    },
                    "rating": 3.9,
                    "reviewCount": 1,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 2,
                    "additionalImageCount": 1,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.192,
                        "width": 9.0932,
                        "depth": 7.7978,
                        "weight": 0.149685353
                    },
                    "barcode": {
                        "UPC": "673419267205"
                    },
                    "extendedData": {},
                    "lastUpdated": "2017-02-28T20:47:22.553Z"
                },
                {
                    "setID": 27017,
                    "number": "41592",
                    "numberVariant": 1,
                    "name": "The Hulk",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Marvel Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 93,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41592-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41592-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41592-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 5908,
                        "wantedBy": 1193
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2017-12-14T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-02-04T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2017-12-14T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-02-04T00:00:00Z"
                        }
                    },
                    "rating": 3.7,
                    "reviewCount": 2,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 2,
                    "additionalImageCount": 1,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.192,
                        "width": 9.0932,
                        "depth": 7.7978,
                        "weight": 0.113398
                    },
                    "barcode": {
                        "UPC": "673419267212"
                    },
                    "extendedData": {},
                    "lastUpdated": "2017-02-28T20:47:32.283Z"
                }
            ]
        },
        {
            "status": "success",
            "matches": 161,
            "sets": [
                {
                    "setID": 27034,
                    "number": "41593",
                    "numberVariant": 1,
                    "name": "Captain Jack Sparrow",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Disney",
                    "category": "Normal",
                    "released": true,
                    "pieces": 109,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41593-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41593-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41593-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 6239,
                        "wantedBy": 1324
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-04-02T00:00:00Z",
                            "dateLastAvailable": "2018-02-01T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-04-02T00:00:00Z",
                            "dateLastAvailable": "2018-01-03T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2017-04-02T00:00:00Z",
                            "dateLastAvailable": "2018-02-01T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-04-03T00:00:00Z",
                            "dateLastAvailable": "2018-01-02T00:00:00Z"
                        }
                    },
                    "rating": 4,
                    "reviewCount": 5,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 2,
                    "additionalImageCount": 2,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.192,
                        "width": 9.0932,
                        "depth": 7.7978,
                        "weight": 0.117933922
                    },
                    "barcode": {
                        "EAN": "5702015869034",
                        "UPC": "673419267229"
                    },
                    "extendedData": {},
                    "lastUpdated": "2017-03-20T16:13:09.68Z"
                },
                {
                    "setID": 27035,
                    "number": "41594",
                    "numberVariant": 1,
                    "name": "Captain Armando Salazar",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Disney",
                    "category": "Normal",
                    "released": true,
                    "pieces": 118,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41594-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41594-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41594-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 5422,
                        "wantedBy": 757
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-04-02T00:00:00Z",
                            "dateLastAvailable": "2018-03-31T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-04-02T00:00:00Z",
                            "dateLastAvailable": "2018-02-07T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2017-04-02T00:00:00Z",
                            "dateLastAvailable": "2018-03-31T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-04-03T00:00:00Z",
                            "dateLastAvailable": "2018-01-28T00:00:00Z"
                        }
                    },
                    "rating": 3.7,
                    "reviewCount": 4,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 2,
                    "additionalImageCount": 2,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.192,
                        "width": 9.0932,
                        "depth": 7.7978,
                        "weight": 0.122469842
                    },
                    "barcode": {
                        "EAN": "5702015869041",
                        "UPC": "673419267236"
                    },
                    "extendedData": {},
                    "lastUpdated": "2017-03-20T16:12:53.347Z"
                },
                {
                    "setID": 27018,
                    "number": "41595",
                    "numberVariant": 1,
                    "name": "Belle",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Disney",
                    "category": "Normal",
                    "released": true,
                    "pieces": 139,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41595-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41595-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41595-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 5876,
                        "wantedBy": 913
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-02-04T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-01-03T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-02-04T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-01-03T00:00:00Z"
                        }
                    },
                    "rating": 4,
                    "reviewCount": 1,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 2,
                    "additionalImageCount": 1,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.192,
                        "width": 9.0932,
                        "depth": 7.7978,
                        "weight": 0.154221281
                    },
                    "barcode": {
                        "EAN": "5702015869058",
                        "UPC": "673419267243"
                    },
                    "extendedData": {},
                    "lastUpdated": "2017-02-28T20:48:33.3Z"
                },
                {
                    "setID": 27019,
                    "number": "41596",
                    "numberVariant": 1,
                    "name": "Beast",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Disney",
                    "category": "Normal",
                    "released": true,
                    "pieces": 116,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41596-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41596-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41596-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 6090,
                        "wantedBy": 875
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-01-23T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-01-08T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-01-23T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-03-01T00:00:00Z",
                            "dateLastAvailable": "2018-01-08T00:00:00Z"
                        }
                    },
                    "rating": 3.8,
                    "reviewCount": 4,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 2,
                    "additionalImageCount": 1,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.192,
                        "width": 9.0932,
                        "depth": 7.7978,
                        "weight": 0.127005756
                    },
                    "barcode": {
                        "UPC": "673419267250"
                    },
                    "extendedData": {},
                    "lastUpdated": "2017-02-28T20:48:45.417Z"
                },
                {
                    "setID": 27231,
                    "number": "DCBHZ",
                    "numberVariant": 1,
                    "name": "Wonder Woman",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "DC Comics Super Heroes",
                    "category": "Other",
                    "released": true,
                    "pieces": 145,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/DCBHZ-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/DCBHZ-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/DCBHZ-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 573,
                        "wantedBy": 824
                    },
                    "LEGOCom": {
                        "US": {},
                        "UK": {},
                        "CA": {},
                        "DE": {}
                    },
                    "rating": 0,
                    "reviewCount": 1,
                    "packagingType": "None (loose parts)",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 0,
                    "additionalImageCount": 0,
                    "ageRange": {},
                    "dimensions": {},
                    "barcode": {},
                    "extendedData": {},
                    "lastUpdated": "2017-07-18T08:39:03.043Z"
                },
                {
                    "setID": 27593,
                    "number": "ITBH",
                    "numberVariant": 1,
                    "name": "Nonnie - Inside Tour 2017 Edition",
                    "year": 2017,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Promotional",
                    "category": "Other",
                    "released": true,
                    "pieces": 61,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/ITBH-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/ITBH-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/ITBH-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 60,
                        "wantedBy": 668
                    },
                    "LEGOCom": {
                        "US": {},
                        "UK": {},
                        "CA": {},
                        "DE": {}
                    },
                    "rating": 0,
                    "reviewCount": 0,
                    "packagingType": "Polybag",
                    "availability": "Not sold",
                    "instructionsCount": 0,
                    "additionalImageCount": 0,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {},
                    "barcode": {},
                    "extendedData": {},
                    "lastUpdated": "2023-02-05T07:48:47.76Z"
                },
                {
                    "setID": 27759,
                    "number": "40270",
                    "numberVariant": 1,
                    "name": "Valentine's Bee",
                    "year": 2018,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Seasonal",
                    "category": "Normal",
                    "released": true,
                    "pieces": 140,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/40270-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/40270-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/40270-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 7384,
                        "wantedBy": 791
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2019-11-01T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-12-29T00:00:00Z",
                            "dateLastAvailable": "2018-12-15T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2019-11-01T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-12-31T00:00:00Z",
                            "dateLastAvailable": "2018-12-15T00:00:00Z"
                        }
                    },
                    "rating": 3.8,
                    "reviewCount": 4,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 2,
                    "additionalImageCount": 3,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12,
                        "width": 14,
                        "depth": 6
                    },
                    "barcode": {
                        "EAN": "5702016122015"
                    },
                    "extendedData": {},
                    "lastUpdated": "2018-01-22T02:04:48.51Z"
                },
                {
                    "setID": 27872,
                    "number": "40271",
                    "numberVariant": 1,
                    "name": "Easter Bunny",
                    "year": 2018,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Seasonal",
                    "category": "Normal",
                    "released": true,
                    "pieces": 126,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/40271-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/40271-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/40271-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 7424,
                        "wantedBy": 829
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-02-02T00:00:00Z",
                            "dateLastAvailable": "2018-11-24T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-02-15T00:00:00Z",
                            "dateLastAvailable": "2020-07-26T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2018-02-02T00:00:00Z",
                            "dateLastAvailable": "2018-11-24T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-02-16T00:00:00Z",
                            "dateLastAvailable": "2020-07-26T00:00:00Z"
                        }
                    },
                    "rating": 3.7,
                    "reviewCount": 2,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 2,
                    "additionalImageCount": 3,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12,
                        "width": 14,
                        "depth": 5.8
                    },
                    "barcode": {
                        "EAN": "5702016122022"
                    },
                    "extendedData": {},
                    "lastUpdated": "2018-03-13T05:44:26.463Z"
                },
                {
                    "setID": 27873,
                    "number": "40272",
                    "numberVariant": 1,
                    "name": "Halloween Witch",
                    "year": 2018,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Seasonal",
                    "category": "Normal",
                    "released": true,
                    "pieces": 151,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/40272-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/40272-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/40272-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 5932,
                        "wantedBy": 900
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-09-02T00:00:00Z",
                            "dateLastAvailable": "2019-10-23T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-09-18T00:00:00Z",
                            "dateLastAvailable": "2020-12-25T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2018-09-02T00:00:00Z",
                            "dateLastAvailable": "2019-10-23T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.74,
                            "dateFirstAvailable": "2018-09-19T00:00:00Z",
                            "dateLastAvailable": "2020-12-25T00:00:00Z"
                        }
                    },
                    "rating": 3.7,
                    "reviewCount": 2,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 2,
                    "additionalImageCount": 3,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12,
                        "width": 14,
                        "depth": 6,
                        "weight": 0.157
                    },
                    "barcode": {
                        "EAN": "5702016122039"
                    },
                    "extendedData": {},
                    "lastUpdated": "2019-01-22T01:04:20.987Z"
                },
                {
                    "setID": 27874,
                    "number": "40273",
                    "numberVariant": 1,
                    "name": "Thanksgiving Turkey",
                    "year": 2018,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Seasonal",
                    "category": "Normal",
                    "released": true,
                    "pieces": 114,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/40273-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/40273-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/40273-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 5296,
                        "wantedBy": 916
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-10-02T00:00:00Z",
                            "dateLastAvailable": "2021-03-24T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-10-10T00:00:00Z",
                            "dateLastAvailable": "2020-01-10T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2018-10-02T00:00:00Z",
                            "dateLastAvailable": "2021-03-24T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-10-02T00:00:00Z",
                            "dateLastAvailable": "2020-01-14T00:00:00Z"
                        }
                    },
                    "rating": 3.8,
                    "reviewCount": 2,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 2,
                    "additionalImageCount": 3,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12,
                        "width": 14,
                        "depth": 6,
                        "weight": 0.136
                    },
                    "barcode": {
                        "EAN": "5702016122046"
                    },
                    "extendedData": {},
                    "lastUpdated": "2019-01-22T01:03:54.017Z"
                },
                {
                    "setID": 27875,
                    "number": "40274",
                    "numberVariant": 1,
                    "name": "Mr. & Mrs. Claus",
                    "year": 2018,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Seasonal",
                    "category": "Normal",
                    "released": true,
                    "pieces": 341,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/40274-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/40274-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/40274-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 9509,
                        "wantedBy": 1281
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 19.99,
                            "dateFirstAvailable": "2018-10-02T00:00:00Z",
                            "dateLastAvailable": "2020-09-20T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 17.99,
                            "dateFirstAvailable": "2018-10-10T00:00:00Z",
                            "dateLastAvailable": "2020-11-09T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 24.99,
                            "dateFirstAvailable": "2018-10-02T00:00:00Z",
                            "dateLastAvailable": "2020-10-31T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 19.49,
                            "dateFirstAvailable": "2018-10-02T00:00:00Z",
                            "dateLastAvailable": "2020-11-10T00:00:00Z"
                        }
                    },
                    "rating": 3.9,
                    "reviewCount": 1,
                    "packagingType": "Box",
                    "availability": "LEGO exclusive",
                    "instructionsCount": 4,
                    "additionalImageCount": 4,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 14,
                        "width": 19,
                        "depth": 7,
                        "weight": 0.303
                    },
                    "barcode": {
                        "EAN": "5702016122053"
                    },
                    "extendedData": {},
                    "lastUpdated": "2018-12-10T05:45:01.857Z"
                },
                {
                    "setID": 28246,
                    "number": "40316",
                    "numberVariant": 1,
                    "name": "Geoffrey",
                    "year": 2018,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Miscellaneous",
                    "category": "Normal",
                    "released": false,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/40316-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/40316-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/40316-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "wantedBy": 1779
                    },
                    "LEGOCom": {
                        "US": {},
                        "UK": {},
                        "CA": {},
                        "DE": {}
                    },
                    "rating": 0,
                    "reviewCount": 0,
                    "packagingType": "Box",
                    "availability": "{Not specified}",
                    "instructionsCount": 0,
                    "additionalImageCount": 0,
                    "ageRange": {},
                    "dimensions": {},
                    "barcode": {},
                    "extendedData": {},
                    "lastUpdated": "2020-08-01T11:44:51.307Z"
                },
                {
                    "setID": 27484,
                    "number": "41597",
                    "numberVariant": 1,
                    "name": "Go Brick Me",
                    "year": 2018,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Go Brick Me",
                    "category": "Normal",
                    "released": true,
                    "pieces": 708,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41597-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41597-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41597-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 6009,
                        "wantedBy": 1262
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 29.99,
                            "dateFirstAvailable": "2018-04-02T00:00:00Z",
                            "dateLastAvailable": "2019-01-19T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 25.99,
                            "dateFirstAvailable": "2018-04-02T00:00:00Z",
                            "dateLastAvailable": "2018-11-07T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 39.99,
                            "dateFirstAvailable": "2018-04-02T00:00:00Z",
                            "dateLastAvailable": "2019-01-19T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 29.99,
                            "dateFirstAvailable": "2018-04-02T00:00:00Z",
                            "dateLastAvailable": "2018-11-08T00:00:00Z"
                        }
                    },
                    "rating": 4.2,
                    "reviewCount": 6,
                    "packagingType": "Box",
                    "availability": "Retail",
                    "instructionsCount": 2,
                    "additionalImageCount": 4,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 22.2,
                        "width": 26.2,
                        "depth": 9.5
                    },
                    "barcode": {
                        "EAN": "5702016072624",
                        "UPC": "673419279567"
                    },
                    "extendedData": {},
                    "lastUpdated": "2022-06-19T08:20:12.867Z"
                },
                {
                    "setID": 27413,
                    "number": "41598",
                    "numberVariant": 1,
                    "name": "The Flash",
                    "year": 2018,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "DC Comics Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 122,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41598-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41598-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41598-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 4879,
                        "wantedBy": 1045
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2018-11-24T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-12-29T00:00:00Z",
                            "dateLastAvailable": "2018-12-07T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2018-11-24T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-12-31T00:00:00Z",
                            "dateLastAvailable": "2018-12-06T00:00:00Z"
                        }
                    },
                    "rating": 3.8,
                    "reviewCount": 1,
                    "packagingType": "Box",
                    "availability": "Retail",
                    "instructionsCount": 2,
                    "additionalImageCount": 3,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.2,
                        "width": 9.1,
                        "depth": 7.8
                    },
                    "barcode": {
                        "EAN": "5702016072631",
                        "UPC": "673419279574"
                    },
                    "extendedData": {},
                    "lastUpdated": "2018-01-02T12:20:55.357Z"
                },
                {
                    "setID": 27414,
                    "number": "41599",
                    "numberVariant": 1,
                    "name": "Wonder Woman",
                    "year": 2018,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "DC Comics Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 143,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41599-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41599-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41599-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 5607,
                        "wantedBy": 1005
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2018-10-05T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-12-29T00:00:00Z",
                            "dateLastAvailable": "2019-02-22T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2018-10-05T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-12-31T00:00:00Z",
                            "dateLastAvailable": "2019-02-10T00:00:00Z"
                        }
                    },
                    "rating": 3.9,
                    "reviewCount": 1,
                    "packagingType": "Box",
                    "availability": "Retail",
                    "instructionsCount": 2,
                    "additionalImageCount": 3,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.2,
                        "width": 9.1,
                        "depth": 7.8
                    },
                    "barcode": {
                        "EAN": "5702016072648"
                    },
                    "extendedData": {},
                    "lastUpdated": "2018-01-02T12:21:15.083Z"
                },
                {
                    "setID": 27689,
                    "number": "41600",
                    "numberVariant": 1,
                    "name": "Aquaman",
                    "year": 2018,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "DC Comics Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 135,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41600-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41600-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41600-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 4902,
                        "wantedBy": 858
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2019-02-18T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-12-29T00:00:00Z",
                            "dateLastAvailable": "2019-01-30T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2019-02-18T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-12-31T00:00:00Z",
                            "dateLastAvailable": "2019-01-30T00:00:00Z"
                        }
                    },
                    "rating": 3.9,
                    "reviewCount": 1,
                    "packagingType": "Box",
                    "availability": "{Not specified}",
                    "instructionsCount": 2,
                    "additionalImageCount": 3,
                    "ageRange": {},
                    "dimensions": {
                        "height": 12.2,
                        "width": 9.1,
                        "depth": 7.8
                    },
                    "barcode": {
                        "EAN": "5702016072655",
                        "UPC": "673419279598"
                    },
                    "extendedData": {},
                    "lastUpdated": "2018-01-02T12:21:34.333Z"
                },
                {
                    "setID": 27690,
                    "number": "41601",
                    "numberVariant": 1,
                    "name": "Cyborg",
                    "year": 2018,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "DC Comics Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 108,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41601-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41601-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41601-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 4250,
                        "wantedBy": 885
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2018-11-27T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-12-29T00:00:00Z",
                            "dateLastAvailable": "2020-06-30T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2018-11-27T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2017-12-31T00:00:00Z",
                            "dateLastAvailable": "2018-11-24T00:00:00Z"
                        }
                    },
                    "rating": 3.8,
                    "reviewCount": 3,
                    "packagingType": "Box",
                    "availability": "{Not specified}",
                    "instructionsCount": 2,
                    "additionalImageCount": 3,
                    "ageRange": {},
                    "dimensions": {
                        "height": 12.2,
                        "width": 9.1,
                        "depth": 7.8
                    },
                    "barcode": {
                        "EAN": "5702016072662",
                        "UPC": "673419279604"
                    },
                    "extendedData": {},
                    "lastUpdated": "2018-01-02T12:22:00.77Z"
                },
                {
                    "setID": 27480,
                    "number": "41602",
                    "numberVariant": 1,
                    "name": "Rey",
                    "year": 2018,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Star Wars",
                    "category": "Normal",
                    "released": true,
                    "pieces": 119,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41602-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41602-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41602-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 6101,
                        "wantedBy": 995
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2018-12-15T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2019-05-03T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2018-12-15T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2019-04-12T00:00:00Z"
                        }
                    },
                    "rating": 3.7,
                    "reviewCount": 2,
                    "packagingType": "Box",
                    "availability": "Retail",
                    "instructionsCount": 2,
                    "additionalImageCount": 3,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.2,
                        "width": 9.1,
                        "depth": 7.8
                    },
                    "barcode": {
                        "EAN": "5702016074772"
                    },
                    "extendedData": {},
                    "lastUpdated": "2018-01-02T12:22:18.343Z"
                },
                {
                    "setID": 27481,
                    "number": "41603",
                    "numberVariant": 1,
                    "name": "Kylo Ren",
                    "year": 2018,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Star Wars",
                    "category": "Normal",
                    "released": true,
                    "pieces": 130,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41603-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41603-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41603-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 6318,
                        "wantedBy": 1077
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2018-10-18T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2019-04-01T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2018-10-18T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-01-01T00:00:00Z",
                            "dateLastAvailable": "2019-04-01T00:00:00Z"
                        }
                    },
                    "rating": 3.9,
                    "reviewCount": 1,
                    "packagingType": "Box",
                    "availability": "Retail",
                    "instructionsCount": 2,
                    "additionalImageCount": 3,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.2,
                        "width": 9.1,
                        "depth": 7.8
                    },
                    "barcode": {
                        "EAN": "5702016077469"
                    },
                    "extendedData": {},
                    "lastUpdated": "2018-01-02T12:22:33.43Z"
                },
                {
                    "setID": 27406,
                    "number": "41604",
                    "numberVariant": 1,
                    "name": "Iron Man MK50",
                    "year": 2018,
                    "theme": "BrickHeadz",
                    "themeGroup": "Licensed",
                    "subtheme": "Marvel Super Heroes",
                    "category": "Normal",
                    "released": true,
                    "pieces": 101,
                    "image": {
                        "thumbnailURL": "https://images.brickset.com/sets/small/41604-1.jpg",
                        "imageURL": "https://images.brickset.com/sets/images/41604-1.jpg"
                    },
                    "bricksetURL": "https://brickset.com/sets/41604-1",
                    "collection": {
                        "owned": false,
                        "wanted": false,
                        "qtyOwned": 0,
                        "rating": 0,
                        "notes": ""
                    },
                    "collections": {
                        "ownedBy": 4627,
                        "wantedBy": 1349
                    },
                    "LEGOCom": {
                        "US": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-04-02T00:00:00Z",
                            "dateLastAvailable": "2018-11-25T00:00:00Z"
                        },
                        "UK": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-04-02T00:00:00Z",
                            "dateLastAvailable": "2018-11-07T00:00:00Z"
                        },
                        "CA": {
                            "retailPrice": 12.99,
                            "dateFirstAvailable": "2018-04-02T00:00:00Z",
                            "dateLastAvailable": "2018-11-25T00:00:00Z"
                        },
                        "DE": {
                            "retailPrice": 9.99,
                            "dateFirstAvailable": "2018-04-02T00:00:00Z",
                            "dateLastAvailable": "2018-11-06T00:00:00Z"
                        }
                    },
                    "rating": 4,
                    "reviewCount": 0,
                    "packagingType": "Box",
                    "availability": "Retail",
                    "instructionsCount": 2,
                    "additionalImageCount": 4,
                    "ageRange": {
                        "min": 10
                    },
                    "dimensions": {
                        "height": 12.2,
                        "width": 9.1,
                        "depth": 7.8
                    },
                    "barcode": {
                        "EAN": "5702016111071",
                        "UPC": "673419282680"
                    },
                    "extendedData": {},
                    "lastUpdated": "2018-03-28T17:24:20.7Z"
                }
            ]
        }
    ]
  const sets = ref<Set[]>([]);
  const loading = ref(false);
  const totalMatches = ref(0);
  const currentPage: Ref<number> = ref(1);
  const totalPages = computed(() => Math.floor(totalMatches.value / pageSize));
  const user = useUserStore();

  async function executeQuery(query: GetSetsParams) {
    loading.value = true;
    try {
      const setsResponse: GetSetsResponse = await $fetch('/api/sets', {
        query: {
          ...query,
          pageSize,
          userHash: user.userHash,
        },
      });


      if (setsResponse.status === 'error') {
        throw new Error(setsResponse.message ?? 'Something went wrong')
      }

      sets.value = setsResponse.sets;
      totalMatches.value = setsResponse.matches;
    } catch (e) {
      console.error(e);
    } finally {
      loading.value = false;
    }
  }

  function setCurrentPage(page: number) {
    currentPage.value = page;
  }

  return { sets, loading, totalMatches, currentPage, totalPages, executeQuery, setCurrentPage };
}
