"use client";

import { useTheme } from "@teispace/next-themes";
import { THEME_OPTIONS } from "@/constants";

export function ThemeSwitch() {
  const { setTheme } = useTheme();

  return (
    <details>
      <summary>Theme</summary>
      <ul className="bg-base-100 text-primary rounded-t-none p-2 w-max whitespace-nowrap">
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
