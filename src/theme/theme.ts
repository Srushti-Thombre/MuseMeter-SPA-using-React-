// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";
import { lightPalette } from "./lightPalette";
import { darkPalette } from "./darkPalette";

export const getTheme = (mode: "light" | "dark" = "light") => {
  const selectedPalette = mode === "light" ? lightPalette : darkPalette;

  return createTheme({
    palette: selectedPalette,
    typography: {
      fontFamily: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"].join(","),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: selectedPalette.background.default,
          },
        },
      },
    },
  });
};


export const theme = getTheme("light");