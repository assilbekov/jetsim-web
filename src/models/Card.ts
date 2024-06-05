export type CardsResponse = Card[];

export type Card = {
  id: string;
  status: string;
  lpaCode: string;
  activatedAt: string;
  expiresAt: string;
  trafficTotalBytes: number;
  trafficRemainingBytes: number;
};

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
