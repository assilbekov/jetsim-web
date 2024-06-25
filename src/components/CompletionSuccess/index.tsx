"use client";

import { fetchCard } from "@/api/cards";
import { InstallESim } from "@/components/InstallESim";
import { Card as CardModel } from "@/models/Card";
import { useEffect, useState } from "react";
import { InstallESimInstructionsDialog } from "../InstallESimInstructionsDialog";
import { Skeleton } from "../Skeleton";
import { LandingContainer } from "../LandingContainer";
import { Card } from "../Card";

export const CompletionSuccess = ({ cardID }: { cardID: string }) => {
  const [card, setCard] = useState<CardModel | null>(null);
  const [instructionsDialogShow, setInstructionsDialogShow] = useState(false);

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

  return (
    <div>
      {card ? (
        <>
          <InstallESim
            card={card}
            onSeeInstructionsClick={() => {
              setInstructionsDialogShow(true);
            }}
          />
          {instructionsDialogShow && (
            <InstallESimInstructionsDialog
              card={card}
              onClose={() => setInstructionsDialogShow(false)}
            />
          )}
        </>
      ) : (
        <LandingContainer>
          <Card>
            <Skeleton className="h-[500px] w-full rounded-xl" />
          </Card>
        </LandingContainer>
      )}
    </div>
  );
};
