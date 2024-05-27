export interface PackageResponse {
  data: Package[];
}

export interface Package {
  id: string;
  name: string;
  cost: PackageCost;
  days: number;
  bestChoice: boolean;
  traffic: PackageTraffic;
}

export interface PackageCost {
  price: number;
  currency: string;
}

export interface PackageTraffic {
  browsingSec: number;
  videoSec: number;
  musicSec: number;
  unit: PackageTrafficUnit;
}

export interface PackageTrafficUnit {
  label: string;
  count: number;
  costPerUnit: CostPerUnit;
}

export interface CostPerUnit {
  price: number;
  currency: string;
}

export enum PackageTagEnum {
  STANDARD = "standard",
  UNLIMITED = "unlimited",
}
