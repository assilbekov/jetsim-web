"use client";

import "./HumburgerButton.css";

export const HumburgerButton = () => {
  // TODO: Refactor to use refs.
  const handleButtonClick = () => {
    const button = document.getElementById("mobile-nav-toggle");
    const navigation = document.getElementById("primary-navigation");
    const navIcon = document.getElementById("humburger-icon");
    const body = document.body;

    if (button && navigation && navIcon) {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      navigation.setAttribute("data-visible", String(!expanded));
      navIcon?.classList.toggle("open");
      body.classList.toggle("overflow-hidden");
    }
  };

  return (
    <button
      aria-controls="primary-navigation"
      aria-expanded="false"
      className="mobile-nav-toggle w-[68px] h-[54px] rounded-[44px] justify-center items-center border-2 bg-text-900 border-[#EBEFF0] xxs:top-4 xxs:right-6 top-2 right-4"
      id="mobile-nav-toggle"
      onClick={handleButtonClick}
    >
      <div className="flex justify-center items-center w-5 h-5">
        <div id="humburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </button>
  );
};
