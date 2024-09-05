import {
  Card,
  CardsResponse,
  ClientOptionsResponse,
  CreateCardResponse,
} from "@/models/Card";
import { fetchProtected } from "./protected-apis";
import { simServiceURL } from "@/config";
import { ApiResponse } from "@/models/ApiResponse";

export const fetchCards = async (locale: string): Promise<CardsResponse> => {
  const res = await fetchProtected(`${simServiceURL}cards`, {
    headers: {
      "Accept-Language": locale || "en-US",
    },
  });
  const json: ApiResponse<CardsResponse> = await res.json();
  return json.payload;
};

export const fetchCard = async (id: string, locale: string): Promise<Card> => {
  const res = await fetchProtected(`${simServiceURL}cards/${id}`, {
    headers: {
      "Accept-Language": locale || "en-US",
    },
  });
  const json: ApiResponse<Card> = await res.json();
  return json.payload;
};

export const createCard = async (
  packageID: string,
  placeID: string,
  locale: string
): Promise<CreateCardResponse> => {
  const res = await fetchProtected(`${simServiceURL}cards`, {
    method: "POST",
    body: JSON.stringify({ packageID, placeID }),
    headers: {
      "Accept-Language": locale || "en-US",
    },
  });
  const json: ApiResponse<CreateCardResponse> = await res.json();
  return json.payload;
};

export const fetchClientOptions = async (
  locale: string
): Promise<ClientOptionsResponse> => {
  const res = await fetchProtected(
    "https://payment.jetsim.app/public/gw/stripe/client-options",
    {
      headers: {
        "Accept-Language": locale || "en-US",
      },
    }
  );
  const json: ApiResponse<ClientOptionsResponse> = await res.json();
  return json.payload;
};

export const deleteCard = async (id: string, locale: string): Promise<void> => {
  await fetchProtected(`${simServiceURL}cards/${id}`, {
    method: "DELETE",
    headers: {
      "Accept-Language": locale || "en-US",
    },
  });
};
