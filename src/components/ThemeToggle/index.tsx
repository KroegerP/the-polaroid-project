"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <label className="swap swap-rotate btn btn-ghost">
      <input
        type="checkbox"
        className="theme-controller"
        checked={theme === "default"}
        onChange={(e) =>
          setTheme(e.target.checked ? "default" : "default-light")
        }
      />

      <SunIcon className="swap-off" />
      <MoonIcon className="swap-on" />
    </label>
  );
}
