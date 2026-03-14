"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");


  const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,

      primary: {
        main: mode === "light" ? "#6366F1" : "#818CF8",
      },

      secondary: {
        main: mode === "light" ? "#22C55E" : "#34D399",
      },

      error: {
        main: mode === "light" ? "#EF4444" : "#F87171",
      },

      warning: {
        main: mode === "light" ? "#F59E0B" : "#FBBF24",
      },

      success: {
        main: mode === "light" ? "#10B981" : "#34D399",
      },

      background: {
        default: mode === "light" ? "#F8FAFC" : "#0F172A",
        paper: mode === "light" ? "#FFFFFF" : "#1E293B",
      },

      text: {
        primary: mode === "light" ? "#0F172A" : "#F8FAFC",
        secondary: mode === "light" ? "#475569" : "#CBD5F5",
      },

      divider: mode === "light" ? "#E2E8F0" : "#334155",
    },

    shape: {
      borderRadius: 10,
    },

    typography: {
      fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 600 },
      button: { textTransform: "none", fontWeight: 600 },
    },

    components: {
      // MuiButton: {
      //   styleOverrides: {
      //     root: {
      //       borderRadius: 10,
      //       paddingLeft: 16,
      //       paddingRight: 16,
      //     },
      //   },
      // },

      // MuiPaper: {
      //   styleOverrides: {
      //     root: {
      //       borderRadius: 12,
      //     },
      //   },
      // },

      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },

      MuiTextField: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  });

  const theme = React.useMemo( () => 
    // getTheme(prefersDarkMode ? "dark" : "light")
    getTheme('light')
  , [prefersDarkMode])

  const theme2 = React.useMemo(() =>
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
