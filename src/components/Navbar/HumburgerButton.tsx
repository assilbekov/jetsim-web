"use client";

import { useEffect } from "react";

type HumburgerButtonProps = {
  onClick: () => void;
};

export const HumburgerButton = ({ onClick }: HumburgerButtonProps) => {
  useEffect(() => {
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <button
      aria-controls="primary-navigation"
      aria-expanded="false"
      className="mobile-nav-toggle w-[68px] h-[54px] rounded-[44px] justify-center items-center border-2 bg-text-900 border-[#EBEFF0] xxs:top-4 xxs:right-6 top-2 right-4"
      id="mobile-nav-toggle"
      onClick={onClick}
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
