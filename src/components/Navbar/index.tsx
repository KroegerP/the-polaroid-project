import Link from "next/link";
import { ThemeSwitch } from "../ThemeToggle/ThemeSwitch";

export function Navbar() {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          The Polaroid Project
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </div>
    </div>
  );
}
