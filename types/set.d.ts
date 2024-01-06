interface Set {
  setID: number;
  number: string;
  numberVariant: number;
  name: string;
  year: number;
  theme: string;
  themeGroup: string;
  subtheme: string;
  category: string;
  released: boolean;
  pieces: number;
  minifigs: number;
  image: SetImage;
  bricksetURL: string;
  collection: Collection;
  collections: Collections;
  LEGOCom: LegoCom;
  rating: Single;
  reviewCount: number;
  packagingType: string;
  availability: string;
  instructionsCount: number;
  additionalImageCount: number;
  ageRange: AgeRange;
  dimensions:Dimensions;
  barcode: Barcode;
  extendedData: ExtendedData;
  lastUpdated: DateTime;

}

interface SetImage {
thumbnailURL: string;
imageURL: string;
}

interface LegoCom {
[key: LegoComCountry]: LegoComDetails;
}

enum LegoComCountry {
'UK' = 'UK',
'US' = 'US',
'CA' = 'CA',
'DE' = 'DE',
}
interface LegoComDetails {
retailPrice: number;
dateFirstAvavilable: string;
dateLastAvailable: string;
}

interface AgeRange {
min: number;
}

interface Dimensions {
height: number;
width: number;
depth: number;
weight: number;
}

interface Barcode {
[key: 'EAN' | 'UPC']: string;
}


interface ExtendedData {
  notes?: string;
  tags?: string[];
  description?: string;
}
