export interface Set {
shelfLife: number;
yearsRetired: number;
currentValue: number;
  setID?: number;
  number: string;
  numberVariant: number;
  name: string;
  year: number;
  theme?: string;
  themeGroup?: string;
  subtheme?: string;
  category?: string;
  released?: boolean;
  pieces?: number;
  minifigs?: number;
  image?: SetImage;
  bricksetURL?: string;
  collection?: Collection;
  collections?: Collections;
  LEGOCom?: LegoCom;
  rating?: Single;
  reviewCount?: number;
  packagingType?: string;
  availability?: string;
  instructionsCount?: number;
  additionalImageCount?: number;
  ageRange?: AgeRange;
  dimensions?: Dimensions;
  barcode?: Barcode;
  extendedData?: ExtendedData;
  lastUpdated?: DateTime;
}

export interface SetImage {
  thumbnailURL: string;
  imageURL: string;
}

export interface LegoCom {
  US?: LegoComDetails;
  UK?: LegoComDetails;
  CA?: LegoComDetails;
  DE?: LegoComDetails;
}

export interface LegoComDetails {
  retailPrice?: number;
  dateFirstAvailable?: string;
  dateLastAvailable?: string;
}

export interface AgeRange {
  min?: number;
}

export interface Dimensions {
  height?: number;
  width?: number;
  depth?: number;
  weight?: number;
}

export interface Barcode {
  UPC?: string;
  EAN?: string;
}

export interface ExtendedData {
  notes?: string;
  tags?: string[];
  description?: string;
}

export interface ThemeAnalysisTableRow {
  number: string;
  name: string;
  msrp: number;
  shelfLife: number;
  yearsRetired: number | string;
  currentValue: number;
  roi: string;
  avgAnnualRoi: string;
}