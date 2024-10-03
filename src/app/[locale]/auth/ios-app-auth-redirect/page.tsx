"use client";

import React, { useEffect } from "react";

const RedirectPage: React.FC = () => {
  useEffect(() => {
    window.location.href = `jetsim://google-auth${window.location.search}`;
  }, []);

  return <p>Redirecting...</p>;
};

export default RedirectPage;

/* "use client";

import React, { Suspense } from "react";
import { RedirectContent } from "./_components/RedirectContent";

const Redirect: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "powderblue",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Suspense fallback={<p>Initializing...</p>}>
        <RedirectContent />
      </Suspense>
    </div>
  );
};

export default Redirect; */
