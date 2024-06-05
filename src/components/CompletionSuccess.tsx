"use client";

import { fetchCard, fetchCards } from "@/api/cards";
import { InstallESim } from "@/components/InstallESim";
import { Card } from "@/models/Card";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

export const CompletionSuccess = ({ cardID }: { cardID: string }) => {
  const [card, setCard] = useState<Card | null>(null);
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    fetchCard(cardID)
      .then((card) => {
        setCard(card);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [cardID]);

  useEffect(() => {
    fetchCards().then((res) => {
      setCards(res);
    });
  }, []);

  return (
    <div>
      <h1>Thank you! 🎉</h1>
      {card && <InstallESim card={card} />}
      {cards?.map((card) => (
        <div key={card.id}>
          <h2>Card ID: {card.id}</h2>
          <h3>Status: {card.status}</h3>
          <h3>LPA Code: {card.lpaCode}</h3>
          <h3>Activated At: {card.activatedAt}</h3>
          <h3>Expires At: {card.expiresAt}</h3>
          <h3>Traffic Total Bytes: {card.trafficTotalBytes}</h3>
          <h3>Traffic Remaining Bytes: {card.trafficRemainingBytes}</h3>
          <QRCode value={card.lpaCode} />
        </div>
      ))}
    </div>
  );
};
