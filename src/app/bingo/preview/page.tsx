'use client'

import BingoCard from "@/components/bingo/BingoCard"
import Button from "@mui/material/Button"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "./page.module.css"
import Stack from "@mui/material/Stack"
import { Edit, PlayCircle, Print, Refresh, Share } from "@mui/icons-material"
import { getBingoCard } from "@/utility/bingo/bingo_storage"
import { editCard, shareCard } from "@/utility/bingo/navigation"
import crypto from "crypto"
import Spacer from "@/components/Spacer"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

export default function Page(){

    const searchParams = useSearchParams()
    const [ id, setId ] = useState("");
    const [ name, setName ] = useState("Bingo Board");
    const [ seed, setSeed ] = useState(0);
    const [ valuePool, setValuePool ] = useState<string[]>([]);

    useEffect( () => {

        const currentId = searchParams.get("card")
        if (currentId === null || currentId === ""){
            //Generate new id
            window.location.href = "/bingo"
            return;
        }
        
        setId(currentId);

        const card = getBingoCard(currentId)

        if (card !== null){
            setName(card.name)
            setValuePool(card.values)
        }
        

    }, [])

    return <main>
        <Box sx={{ margin: { xs: "0 5%", md: "0 10%" }}}>
        <div className="print-only">
            <p style={{ fontSize: "8pt", margin: 0 }}>Card {crypto.createHash('sha256').update(valuePool.join("\n")).digest('hex')}</p>
            <p style={{ fontSize: "8pt", margin: 0 }}>No. {seed}</p>
        </div>

        <h1 className={styles.bingoTitle}>{name}</h1>
        <Box sx={{ width: "100%", overflowX: "scroll"}}>
        <BingoCard
            seed={seed}
            values={valuePool}
        ></BingoCard>
        </Box>

        <div className="no-print">
        <Spacer height={"20px"} />

        {/* Action Buttons */}
        <Grid container spacing={1} direction={"row"}>
            <Grid size={{ xs: 6, md: 3 }} display="flex" justifyContent="center">
                <Button 
                variant="contained"
                onClick={() => { 
                    window.location.href = editCard(id)
                }}
            ><Edit />Edit</Button>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }} display="flex" justifyContent="center">
                <Button 
                variant="contained"
                onClick={() => {
                    setSeed(Math.floor((10**10)*Math.random()))
                }}  
            ><Refresh />Regenerate</Button>
            </Grid>

            <Grid size={{ xs: 6, md: 3}} display="flex" justifyContent="center">
            <Button 
                variant="contained"
                className="no-print"
                onClick={() => {
                    window.location.href = "/bingo/play"
                }}
            ><PlayCircle />Play</Button>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }} display="flex" justifyContent="center">
                <Button 
                variant="contained"
                onClick={() => {
                    print();
                }}
            >
            <Print />Print</Button>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }} display="flex" justifyContent="center">
                <Button 
                variant="contained"
                onClick={async () => {
                    await navigator.clipboard.writeText(window.location.host + shareCard(id,seed))
                    alert("Link Copied")
                }}
            >
            <Share />Share</Button>
            </Grid>
        </Grid>
        <Stack direction="row" justifyContent="space-evenly">

            {/* <Button 
                variant="contained"
                className="no-print"
                onClick={() => {
                    window.location.href = "/bingo/play"
                }}
            ><PlayCircle />Play</Button> */}
        </Stack>

        <Spacer height="40px" />

        <h2 className="text-center">Possible Values:</h2>
        {valuePool.map( (value,idx) => <p key={idx} className="text-center">{value}</p>)}

        </div>

        </Box>
    </main>
}