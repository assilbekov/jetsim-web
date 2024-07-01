"use client";

import { fetchCard } from "@/api/cards";
import { InstallESim } from "@/components/InstallESim";
import { Card as CardModel } from "@/models/Card";
import { useEffect, useState } from "react";
import { InstallESimInstructionsDialog } from "../InstallESimInstructionsDialog";
import { Skeleton } from "../Skeleton";
import { LandingContainer } from "../LandingContainer";
import { Card } from "../Card";

function fetchCardWithRetry(
  cardID: string,
  retries: number,
  delay: number
): Promise<CardModel> {
  async function attemptFetch(remainingRetries: number): Promise<CardModel> {
    return fetchCard(cardID)
      .then((card) => {
        if (!card.lpaCode && remainingRetries > 0) {
          return new Promise<CardModel>((resolve) => {
            setTimeout(() => {
              resolve(attemptFetch(remainingRetries - 1));
            }, delay);
          });
        } else if (!card.lpaCode) {
          throw new Error("Failed to fetch card with valid lpaCode");
        }
        return card;
      })
      .catch((error) => {
        if (remainingRetries > 0) {
          return new Promise<CardModel>((resolve) => {
            setTimeout(() => {
              resolve(attemptFetch(remainingRetries - 1));
            }, delay);
          });
        }
        throw error;
      });
  }

  return attemptFetch(retries);
}

export const CompletionSuccess = ({ cardID }: { cardID: string }) => {
  const [card, setCard] = useState<CardModel | null>(null);
  const [instructionsDialogShow, setInstructionsDialogShow] = useState(false);

  useEffect(() => {
    fetchCardWithRetry(cardID, 10, 1000)
      .then((card) => {
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
