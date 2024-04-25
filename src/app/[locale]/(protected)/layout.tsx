export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>Protected routes</h1>
      </header>
      <div>{children}</div>
    </div>
  );
}
