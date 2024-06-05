"use client";

import { fetchCard } from "@/api/cards";
import { InstallESim } from "@/components/InstallESim";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

interface Cards {
  data: Card[];
}

interface Card {
  id: string;
  status: string;
  lpaCode: string;
  activatedAt: string;
  expiresAt: string;
  trafficTotalBytes: number;
  trafficRemainingBytes: number;
}

export default function Completion({
  searchParams,
}: {
  searchParams: { cardID: string };
}) {
  const cardID = searchParams.cardID ?? "";
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
    fetch("https://sim.jetsim.app/api/v1/cards", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(async (r) => {
      const res: Cards = await r.json();
      console.log({ res, r, message: "https://sim.jetsim.app/api/v1/cards" });
      setCards(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Thank you! 🎉</h1>
      {card && <InstallESim card={card} />}
      {cards.map((card) => (
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
}
