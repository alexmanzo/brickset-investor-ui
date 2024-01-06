export interface ThemeResponse {
    themes: Theme[];
    matches: number;
    status: string;
}

export interface Subtheme {
    theme: string;
    subtheme: string;
    setCount: number;
    yearFrom: number;
    yearTo: number;
}

export interface Theme {
  theme: string;
  setCount: number;
  subthemeCount: number;
  yearFrom: number;
  yearTo: number;
}