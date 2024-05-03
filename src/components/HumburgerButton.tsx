"use client";

import Image from "next/image";

export const HumburgerButton = () => {
  // TODO: Refactor to use refs.
  const handleButtonClick = () => {
    const button = document.getElementById("mobile-nav-toggle");
    const navigation = document.getElementById("primary-navigation");

    if (button && navigation) {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      navigation.setAttribute("data-visible", String(!expanded));
    }
  };

  return (
    <button
      aria-controls="primary-navigation"
      aria-expanded="false"
      className="mobile-nav-toggle"
      id="mobile-nav-toggle"
      onClick={handleButtonClick}
    >
      <span className="sr-only">
        <Image src="/burger.svg" alt="humburger button" width={52} height={44} />
      </span>
    </button>
  );
};
