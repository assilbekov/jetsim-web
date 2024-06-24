export type CardsResponse = Card[];

export type Card = {
  id: string;
  status: CardStatus;
  placeID: string;
  package: Package;
  lpaCode: string;
  activatedAt: string;
  expiresAt: string;
  trafficTotalBytes: number;
  trafficRemainingBytes: number;
};

type Package = {
  id: string;
};

export enum CardStatus {
  Pending = "pending",
  Paid = "paid",
  ReadyToInstall = "readyToInstall",
  Installed = "installed",
  Expired = "expired",
  Deleted = "deleted",
}

export interface ClientOptionsResponse {
  stripePublishableKey: string;
}

export interface CreateCardResponse {
  cardID: string;
  paymentLink: string;
  gatewayTransaction: GatewayTransaction;
}

export interface GatewayTransaction {
  gatewayCode: string;
  transactionID: string;
  meta: Meta;
}

export interface Meta {
  paymentIntentID: string;
  paymentIntentSecret: string;
}
