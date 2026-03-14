"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        background: { 
          default: prefersDarkMode ? "#232323" : "#f8fafc",
          paper: prefersDarkMode ? "#000000" : "#ffffff"
        },
        primary: { 
          main: "#2563EB"
        },
        secondary: { 
          main: "#10b981"
        },
        text: {
          primary: prefersDarkMode ? "#f8fafc" : "#1e293b"
        },
      },
    }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
