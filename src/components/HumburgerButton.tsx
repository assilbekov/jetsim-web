"use client";

import "./HumburgerButton.css";

export const HumburgerButton = () => {
  // TODO: Refactor to use refs.
  const handleButtonClick = () => {
    const button = document.getElementById("mobile-nav-toggle");
    const navigation = document.getElementById("primary-navigation");
    const navIcon = document.getElementById("humburger-icon");

    if (button && navigation && navIcon) {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      navigation.setAttribute("data-visible", String(!expanded));
      navIcon?.classList.toggle("open");
    }
  };

  return (
    <button
      aria-controls="primary-navigation"
      aria-expanded="false"
      className="mobile-nav-toggle w-12 h-10 justify-center items-center rounded-md border-2 bg-text-900 border-[#EBEFF0]"
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
