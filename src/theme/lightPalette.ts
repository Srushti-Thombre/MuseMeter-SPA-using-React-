// src/theme/lightPalette.ts
import { palette } from "./palette";

export const lightPalette = {
  mode: "light" as const,
  primary: palette.primary,
  secondary: palette.secondary,
  background: {
    default: "#f9fafb",   
    paper: "#ffffff",
  },
  text: {
    primary: "#111827",
    secondary: "#4b5563",
  },
  divider: "#e5e7eb",
  action: {
    hover: "#f3f4f6",
  },
};