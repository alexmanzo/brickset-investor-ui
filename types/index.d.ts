interface GetSetsResponse {
  status: string;
  message?: string;
  matches: number;
  sets: Set[];
}

type OrderByOptions =
  | 'Number'
  | 'YearFrom'
  | 'Pieces'
  | 'Minifigs'
  | 'Rating'
  | 'UKRetailPrice'
  | 'USRetailPrice'
  | 'CARetailPrice'
  | 'DERetailPrice'
  | 'UKPricePerPiece'
  | 'USPricePerPiece'
  | 'CAPricePerPiece'
  | 'DEPricePerPiece'
  | 'Theme'
  | 'Subtheme'
  | 'Name'
  | 'Random'
  | 'QtyOwned'
  | 'OwnCount'
  | 'WantCount'
  | 'UserRating'
  | 'CollectionID'
  | 'Rank';

export interface GetSetsParams {
  setID?: string; // internal setID
  query?: string; // Search term: searches set number, name, theme and subtheme
  theme?: string;
  subtheme?: string;
  setNumber?: string; //  Full set number, in the format {number}-{variant}, e.g. 6876-1
  year?: string;
  tag?: string;
  owned?: number; // 1 or 0
  wanted?: number; // 1 or 0
  updatedSince?: string; // yyyy-mm-dd format
  orderBy?: OrderByOptions | `${OrderByOptions}DESC`;
  pageSize?: number;
  pageNumber?: number;
  extendedData?: number; // 1 or 0
}

interface Collections {
  ownedBy: number;
  wantedBy: number
}

interface Collection {
    owned?: boolean;
    wanted?: boolean;
    qtyOwned?: number;
    rating?: number;
    notes?: string;x
}

export interface ExtendedData {
  notes?: string;
  tags?: string[];
  description?: string;
}
