import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ labels, onToggle, theme }) {
  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;
  const label = isDark ? labels.light : labels.dark;

  return (
    <button
      type="button"
      className="themeToggle"
      aria-label={label}
      title={label}
      onClick={onToggle}
    >
      <Icon aria-hidden="true" />
    </button>
  );
}
