'use client';

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Link from "next/link";
import Spacer from "@/components/Spacer";
import { SxProps, Theme } from "@mui/material/styles";
import FooterSection from "./FooterSection";
import FooterLink from "./FooterLink";

const backgroundSx: SxProps<Theme> = {
    py: 4,
    paddingX: { xs: "5%", md: "10%" },
    borderTop: "1px solid",
    borderColor: (theme) => theme.palette.divider,
    background: (theme) => theme.palette.background.paper
}

export default function Footer(){
    return (
        <Box component="footer" sx={backgroundSx} className="no-print">
            <Spacer height="50px" />
            <Grid container>
                <Grid size={"grow"}></Grid>
                <Grid size={{ xs: 4, md: 2}} display="flex" justifyContent="center">
                    <FooterSection title="Generators">
                        <FooterLink href="/bingo">Bingo</FooterLink>
                    </FooterSection>
                </Grid>
                <Grid size={{ xs: 4, md: 3}} display="flex" justifyContent="center">
                    <FooterSection title="Company">
                        <FooterLink href="/">About</FooterLink>
                        <FooterLink href="/company/privacy">Privacy Policy</FooterLink>
                    </FooterSection>
                </Grid>
            </Grid>
            <Box sx={{ mt: 6 }}>
                <Typography variant="body2" color="text.secondary">
                    © {new Date().getFullYear()} CustomMade Games
                </Typography>
            </Box>
        </Box>
    )
}