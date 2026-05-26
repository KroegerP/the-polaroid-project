import Link from "next/link";
import pkg from "../../../package.json" with { type: "json" };
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
            <Link href="/about">My Collection</Link>
          </li>
          <li>
            <Link href="/about">Featured</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <ThemeSwitch />
          </li>
          <li>
            <Link href="/changelog">{pkg.version}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
