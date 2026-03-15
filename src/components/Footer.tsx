'use client';

import { Box, Grid, Stack, SxProps, Typography } from "@mui/material";
import Link from "next/link";
import Spacer from "@/components/Spacer";
import { Theme } from "@mui/material/styles";

const backgroundSx: SxProps<Theme> = {
    paddingX: { xs: "5%", md: "10%" },
    background: (theme) => theme.palette.background.paper
}

export default function Footer(){
    return (
        <Box sx={backgroundSx} className="no-print">
            <Spacer height="50px" />
            <Grid container>
                <Grid size={"grow"}></Grid>
                <Grid size={{ xs: 4, md: 2}} display="flex" justifyContent="center">
                    <Stack direction={"column"}>
                    <Typography variant="h6">
                        Generators
                    </Typography>
                    <Typography variant="body2"><Link href={"/bingo"}>Bingo</Link></Typography>
                    </Stack>
                </Grid>
                <Grid size={{ xs: 4, md: 3}} display="flex" justifyContent="center">
                    <Stack direction={"column"}>
                    <Typography variant="h6">
                        Company
                    </Typography>
                    <Typography variant="body2"><Link href={"/"}>About Us</Link></Typography>
                    <Typography variant="body2"><Link href={"/company/privacy"}>Privacy</Link></Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Spacer height="80px" />
            <Stack direction={"row"} justifyContent={"center"}>
                <Typography variant="body1">© {new Date().getFullYear()} CustomMade Games</Typography>
            </Stack>
            <Spacer height="30px" />
        </Box>
    )
}