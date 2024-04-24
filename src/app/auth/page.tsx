"use client";

export default function AuthPage() {
  return (
    <html>
      <body>
        <div>
          <h1>Auth</h1>
          <button
            onClick={async () => {
              const res = await fetch(
                "https://auth.jetsim.app/api/v1/google/login-link?redirect=http://localhost:3000/auth/callback"
              );
              const json = await res.json();
              console.log(json);
              // debugger
              window.location.href = json.link;
            }}
          >
            click me
          </button>
        </div>
      </body>
    </html>
  );
}
