import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Navigation from "@/components/Navigation";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme/mainTheme";
import Footer from "@/components/Footer";
import AppThemeProvider from "@/components/AppThemeProvider";
import Box from "@mui/material/Box";

export const metadata: Metadata = {
  title: "CustomMade Games",
  description: "A collection of web-based games to play offline",
  other: {
    "google-site-verification": "AEBD389WngD937lWHS-pgY5RbAaPOHABFRBWM84bm7g"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-HFESTGRHQL" />
      </head>
      <body>
        <AppRouterCacheProvider>
        <AppThemeProvider>
        <Navigation />
          <Suspense>
            {children}
          </Suspense>
        <Box sx={{ height: "50px" }}></Box>
        <Footer />
        </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}[]
