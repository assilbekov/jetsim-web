import { Package } from "@/models/Package";

export const mockPackages: Package[] = [
  {
    id: "1",
    name: "Standard",
    cost: {
      price: 10,
      currency: "USD",
    },
    bestChoice: false,
    days: 30,
    traffic: {
      browsingSec: 100000,
      videoSec: 100000,
      musicSec: 100000,
      unit: {
        label: "GB",
        count: 1,
        costPerUnit: {
          price: 10,
          currency: "USD",
        },
      },
    },
  },
  {
    id: "2",
    name: "Unlimited",
    cost: {
      price: 20,
      currency: "USD",
    },
    bestChoice: false,
    days: 30,
    traffic: {
      browsingSec: 100000,
      videoSec: 100000,
      musicSec: 100000,
      unit: {
        label: "GB",
        count: 1,
        costPerUnit: {
          price: 20,
          currency: "USD",
        },
      },
    },
  },
  {
    id: "3",
    name: "Premium",
    cost: {
      price: 30,
      currency: "USD",
    },
    bestChoice: true,
    days: 30,
    traffic: {
      browsingSec: 200000,
      videoSec: 200000,
      musicSec: 200000,
      unit: {
        label: "GB",
        count: 2,
        costPerUnit: {
          price: 15,
          currency: "USD",
        },
      },
    },
  },
  {
    id: "4",
    name: "Business",
    cost: {
      price: 50,
      currency: "USD",
    },
    bestChoice: false,
    days: 30,
    traffic: {
      browsingSec: 300000,
      videoSec: 300000,
      musicSec: 300000,
      unit: {
        label: "GB",
        count: 3,
        costPerUnit: {
          price: 10,
          currency: "USD",
        },
      },
    },
  },
];
