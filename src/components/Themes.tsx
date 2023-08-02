
import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
  });
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: "#F5F5FA"
        }
    },
});