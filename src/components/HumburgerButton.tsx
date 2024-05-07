"use client";

import "./HumburgerButton.css";

export const HumburgerButton = () => {
  // TODO: Refactor to use refs.
  const handleButtonClick = () => {
    const button = document.getElementById("mobile-nav-toggle");
    const navigation = document.getElementById("primary-navigation");
    const navIcon = document.getElementById("nav-icon4");

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
      className="mobile-nav-toggle"
      id="mobile-nav-toggle"
      onClick={handleButtonClick}
    >
      <div id="humburger-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};
