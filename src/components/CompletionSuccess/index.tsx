"use client";

import { fetchCard } from "@/api/cards";
import { InstallESim } from "@/components/InstallESim";
import { Card } from "@/models/Card";
import { useEffect, useState } from "react";

export const CompletionSuccess = ({ cardID }: { cardID: string }) => {
  const [card, setCard] = useState<Card | null>(null);

  useEffect(() => {
    fetchCard(cardID)
      .then((card) => {
        if (!card.lpaCode) {
          setTimeout(() => {
            fetchCard(cardID).then((res) => {
              setCard(res);
            });
          }, 3000);
          return;
        }

        setCard(card);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [cardID]);

  return <div>{card && <InstallESim card={card} />}</div>;
};
