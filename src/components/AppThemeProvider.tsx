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
        //mode,

        primary: {
            main: "#6366F1", // playful indigo
        },

        secondary: {
            main: "#14B8A6", // teal accent
        },

        warning: {
            main: "#F59E0B", // orange highlight
        },

        background:
            mode === "light"
            ? {
                default: "#F8FAFC",
                paper: "#FFFFFF",
                }
            : {
                default: "#0F172A",
                paper: "#1E293B",
                },

        text:
            mode === "light"
            ? {
                primary: "#0F172A",
                secondary: "#475569",
                }
            : {
                primary: "#F1F5F9",
                secondary: "#CBD5F5",
                },
        },

        shape: {
            borderRadius: 10,
        },

        typography: {
        fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
        h1: { 
            fontWeight: 700,
            fontSize: "3em",
            marginTop: "0.5em",
            marginBottom: "0.5em"
        },
        h2: {
            fontWeight: 700,
            fontSize: "1.75em",
            marginTop: "0.5em",
            marginBottom: "0.5em"
        },
        h3: {
            fontWeight: 600,
            fontSize: "1.25em",
            marginTop: "0.5em",
            marginBottom: "0.5em"
        },
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
