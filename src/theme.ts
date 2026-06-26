import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#d4af37",
        },
        secondary: {
            main: "#3b82f6",
        },
        background: {
            default: "#f9fafb",
        },
    },
    typography: {
        fontFamily: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"].join(","),
    },
});
