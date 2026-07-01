// src/theme/darkPalette.ts
import { palette } from "./palette";

export const darkPalette = {
  mode: "dark" as const,
  primary: palette.primary,
  secondary: palette.secondary,
  background: {
  default: "#0f172a",   
  paper: "#1e2937",
},
  text: {
    primary: "#ffffff",     
    secondary: "#e2e8f0",
  },
  divider: "#334155",
  action: {
    hover: "#1e2a4a",
  },
};