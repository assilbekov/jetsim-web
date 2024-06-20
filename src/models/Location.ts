type Coordinate = {
  lat: number;
  lng: number;
};

export interface BestCost {
  period: string;
  cost: Cost;
  unit: string;
}

export interface Cost {
  price: number;
  currency: string;
}

export type Location = {
  coordinate: Coordinate;
  countryCode: string;
  title: string;
  bestCost: BestCost | null;
  placeID: string;
};

export type LocationCover = {
  id: string;
  url: string;
};

export type DestinationsResponse = {
  data: Location[];
  total: number;
};
