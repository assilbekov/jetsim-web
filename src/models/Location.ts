type Coordinate = {
  lat: number;
  lng: number;
};

export type Location = {
  coordinate: Coordinate;
  countryCode: string;
  title: string;
  bestCost: number | null;
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
