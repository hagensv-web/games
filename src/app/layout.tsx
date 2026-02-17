import type { Metadata } from "next";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from "react";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "HagenSV Games",
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
      <body>
        <Suspense>
          <Navigation />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
