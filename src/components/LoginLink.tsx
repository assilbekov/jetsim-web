"use client";

import Link from "next/link";
import { LoginDialog } from "./LoginDialog";
import { useState } from "react";

export const LoginLink = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="h-[52px] w-full sm:w-[195px] md:w-[107px] rounded-[44px] border-2 bg-text-900 border-[#EBEFF0] active:bg-[#C3D4D9] hover:bg-[#EDF1F2] active:border-[#C3D4D9] transition duration-200 ease-in-out">
        <Link
          href="#"
          className="w-full h-full flex justify-center items-center text-text-100 font-medium text-base leading-[22px]"
          onClick={(e) => {
            e.preventDefault();
            setIsDialogOpen(true);
          }}
        >
          <span>Login</span>
        </Link>
      </div>
      {isDialogOpen && <LoginDialog onClose={() => setIsDialogOpen(false)} />}
    </>
  );
};
