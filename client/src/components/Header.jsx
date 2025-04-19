export default function Header() {
  return (
    <header className="bg-divider text-primary fixed top-0 w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/Logo.svg" alt="Logo" className="h-10" />
        </div>
      </div>
    </header>
  );
}
