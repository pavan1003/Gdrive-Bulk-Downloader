export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-divider text-primary text-center py-1 mt-5">
      &copy; Copyright Pavan Mistry, {year}. All rights reserved.
    </footer>
  );
}
