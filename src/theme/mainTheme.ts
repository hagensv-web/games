'use client';
import { createTheme } from '@mui/material/styles';

// Background: #F8FAFC (very light gray)
// Surface: #FFFFFF
// Primary accent: #2563EB (blue)
// Secondary accent: #10B981 (emerald)
// Text: #1E293B

export const theme = createTheme({
  palette: {
    background: { 
      default: "#f8fafc",
      paper: "#ffffff"
    },
    primary: { main: "#2563EB" },
    secondary: { main: "#10b981" },
    text: { primary: "#1e293b" }
  }
})