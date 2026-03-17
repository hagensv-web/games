import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Navigation from "@/components/Navigation";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/Footer";
import AppThemeProvider from "@/components/AppThemeProvider";
import Box from "@mui/material/Box";

export const metadata: Metadata = {
  title: {
    template: "%s | CustomMade Games",
    default: "CustomMade Games"
  },
  metadataBase: new URL("https://custommade.games"),
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

        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Navigation />

          <Box component="main" sx={{ flex: 1 }}>
            <Suspense>
              {children}
            </Suspense>
          </Box>
          <Box sx={{ height: "50px" }} />
          <Footer />
        </Box>
          
        </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}[]
