"use client";

import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export default function Page(params: any) {
  const { socialLogin } = useContext(AuthContext);
  console.log(params);
  return (
    <div>
      <header>
        <h1>Login page</h1>
        <p>Sign in to continue</p>
      </header>
      <div>
        <div className="px-4 py-2 gap-2 flex flex-col">
          <div>
            <button className="rounded bg-slate-900 text-white py-2 px-4 bg-opacity-80">
              Continue with Apple
            </button>
          </div>
          <div>
            <button
              onClick={() => socialLogin("google")}
              className="rounded bg-slate-900 text-white py-2 px-4 bg-opacity-80"
            >
              Continue with Google
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <button>Sign in with Email</button>
        </div>
        <p>
          By clicking “Continue” you agree to our Terms of Service and Privacy
          policy
        </p>
      </div>
    </div>
  );
}
