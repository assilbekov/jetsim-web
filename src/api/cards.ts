import { Card, CardsResponse, CreateCardResponse } from "@/models/Card";
import { fetchProtected } from "./protected-apis";
import { simServiceURL } from "@/config";

export const fetchCards = async (): Promise<CardsResponse> => {
  const res = await fetchProtected(`${simServiceURL}cards`);
  return await res.json();
};

export const fetchCard = async (id: string): Promise<Card> => {
  const res = await fetchProtected(`${simServiceURL}cards/${id}`);
  return await res.json();
};

export const createCard = async (
  packageID: string
): Promise<CreateCardResponse> => {
  const res = await fetchProtected(`${simServiceURL}cards`, {
    method: "POST",
    body: JSON.stringify({ packageID }),
  });
  return await res.json();
};
