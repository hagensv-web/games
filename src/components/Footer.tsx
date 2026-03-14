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
        <Box sx={backgroundSx}>
            <Spacer height="50px" />
            <Grid container>
                <Grid size={"grow"}></Grid>
                <Grid size={2} display="flex" justifyContent="center">
                    <Stack direction={"column"}>
                    <Typography variant="h5">
                        Generators
                    </Typography>
                    <Link href={"/bingo"}>Bingo Generator</Link>
                    </Stack>
                </Grid>
                <Grid size={3} display="flex" justifyContent="center">
                    <Stack direction={"column"}>
                    <Typography variant="h5">
                        Company
                    </Typography>
                    <Link href={"/"}>About Us</Link>
                    <Link href={"/company/privacy"}>Privacy</Link>
                    </Stack>
                </Grid>
            </Grid>
            <Spacer height="100px" />
        </Box>
    )
}