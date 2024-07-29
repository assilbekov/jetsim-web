import {
  Card,
  CardsResponse,
  ClientOptionsResponse,
  CreateCardResponse,
} from "@/models/Card";
import { fetchProtected } from "./protected-apis";
import { simServiceURL } from "@/config";
import { ApiResponse } from "@/models/ApiResponse";

export const fetchCards = async (): Promise<CardsResponse> => {
  const res = await fetchProtected(`${simServiceURL}cards`);
  const json: ApiResponse<CardsResponse> = await res.json();
  return json.payload;
};

export const fetchCard = async (id: string): Promise<Card> => {
  const res = await fetchProtected(`${simServiceURL}cards/${id}`);
  const json: ApiResponse<Card> = await res.json();
  return json.payload;
};

export const createCard = async (
  packageID: string,
  placeID: string
): Promise<CreateCardResponse> => {
  const res = await fetchProtected(`${simServiceURL}cards`, {
    method: "POST",
    body: JSON.stringify({ packageID, placeID }),
  });
  const json: ApiResponse<CreateCardResponse> = await res.json();
  return json.payload;
};

export const fetchClientOptions = async (): Promise<ClientOptionsResponse> => {
  const res = await fetchProtected(
    "https://payment.jetsim.app/public/gw/stripe/client-options"
  );
  const json: ApiResponse<ClientOptionsResponse> = await res.json();
  return json.payload;
};

export const deleteCard = async (id: string): Promise<void> => {
  await fetchProtected(`${simServiceURL}cards/${id}`, {
    method: "DELETE",
  });
};
