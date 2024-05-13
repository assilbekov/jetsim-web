"use client";

import { useRef } from "react";
import { Header, HeadersVariant } from "./Header";
import { LandingContainer } from "./LandingContainer";
import { Card } from "./Card";

type ExpandingProps = {
  title: React.ReactNode;
  description: React.ReactNode;
};

const Expanding = ({ title, description }: ExpandingProps) => {
  const collapsibleRef = useRef<HTMLDivElement>(null);

  const handleMaxHeightChange = () => {
    if (!collapsibleRef.current) return;

    collapsibleRef.current.classList.toggle("hidden");
    //collapsibleRef.current.classList.toggle("scale-y-0");
  };

  return (
    <div className="basis-1/2">
      <h5 onClick={handleMaxHeightChange}>
        What is an eSIM and how to get use of JetSim?
      </h5>
      <div
        ref={collapsibleRef}
        className="hidden transition duration-200 ease-out"
      >
        <p>
          eSIM, or embedded SIM (the same as a digital SIM card, electronic SIM
          card, or virtual SIM card), is a cloud-based mobile number that allows
          users to activate and manage multiple cellular plans on a single
          device. It eliminates the need for a physical SIM card and provides
          the convenience of having multiple cellular providers on a single
          device. eSIM also offers additional features, such as the ability to
          add an extra line for traveling abroad and separate data plans for
          personal and business purposes.
        </p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  return (
    <LandingContainer>
      <Card>
        <Header variant={HeadersVariant.H2}>Frequently Asked Questions</Header>
        <div className="mt-8 flex gap-4 flex-col flex-wrap justify-start box-border">
          <Expanding title="" description="" />
          <Expanding title="" description="" />
          <Expanding title="" description="" />
          <Expanding title="" description="" />
          <Expanding title="" description="" />
          <Expanding title="" description="" />
          <Expanding title="" description="" />
          <Expanding title="" description="" />
          <Expanding title="" description="" />
          <Expanding title="" description="" />
          <Expanding title="" description="" />
          <Expanding title="" description="" />
          <Expanding title="" description="" />
          <Expanding title="" description="" />
        </div>
      </Card>
    </LandingContainer>
  );
};
