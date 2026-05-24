"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import { THEME_OPTIONS } from "@/constants";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const themeIcon = useMemo(() => {
    switch (theme) {
      case THEME_OPTIONS.DEFAULT:
        return <MoonIcon />;
      case THEME_OPTIONS.LIGHT:
        return <SunIcon />;
      default:
        break;
    }
  }, [theme]);

  return (
    <details>
      <summary>{themeIcon}</summary>
      <ul className="bg-base-100 rounded-t-none p-2">
        {Object.values(THEME_OPTIONS).map((t) => (
          <li key={t}>
            <button type="button" onClick={() => setTheme(t)}>
              {t}
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
}
