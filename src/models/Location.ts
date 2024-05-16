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
