type Coordinate = {
  lat: number;
  lng: number;
};

export type Location = {
  coordinate: Coordinate;
  countryCode: string;
  title: string;
};
