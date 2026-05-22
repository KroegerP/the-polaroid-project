import { ThemeToggle } from "../ThemeToggle";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </div>
  );
}
