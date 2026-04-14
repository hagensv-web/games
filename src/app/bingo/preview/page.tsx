'use client'

import BingoCard from "@/components/bingo/BingoCard"
import Button from "@mui/material/Button"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "./page.module.css"
import { Edit, Refresh, Share } from "@mui/icons-material"
import { getBingoCard } from "@/utility/bingo/bingo_storage"
import { editCard, shareCard } from "@/utility/bingo/navigation"
import Spacer from "@/components/Spacer"
import Grid from "@mui/material/Grid"
import BingoPrintLayout from "@/components/bingo/PrintLayout"
import { BingoCardData } from "@/types/Bingo"
import PrintButton from "@/components/bingo/PrintButton"
// import PlayButton from "@/components/bingo/PlayButton"

export default function Page(){

    const searchParams = useSearchParams()
    const [ id, setId ] = useState("");
    const [ seed, setSeed ] = useState(0);
    const [ card, setCard ] = useState<BingoCardData>()
    const [ printCount, setPrintCount ] = useState(0);
    const [ isPrinting, setIsPrinting ] = useState(false);

    useEffect(() => {
        if (isPrinting) {
            window.print();
            setIsPrinting(false);
        }
    }, [isPrinting]);

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
            setCard(card)
        }        

    }, [])

    return <div>
        {card &&
            <BingoPrintLayout 
                card={card}
                seed={seed}
                count={printCount}
            />
        }

        <div className="no-print">
        <h1 className={styles.bingoTitle}>{card?.name ?? "Bingo Card"}</h1>
        <BingoCard
            seed={seed}
            values={card?.values ?? []}
        />

        <Spacer height={"20px"} />

        {/* Action Buttons */}
        <Grid container spacing={2} direction={"row"}>
            <Grid size={{ xs: 6 }} display="flex" justifyContent="center">
                <Button 
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => { 
                    window.location.href = editCard(id)
                }}
            ><Edit />Edit</Button>
            </Grid>

            <Grid size={{ xs: 6 }} display="flex" justifyContent="center">
                <Button 
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => {
                    setSeed(Math.floor((10**10)*Math.random()))
                }}  
            ><Refresh />Regenerate</Button>
            </Grid>

            {/* <Grid size={{ xs: 4 }} display="flex" justifyContent="center">
                <PlayButton />
            </Grid> */}

            <Grid size={{ xs: 6 }} display="flex" justifyContent="center">
                <PrintButton onPrint={(count) => {
                    setPrintCount(count);
                    setIsPrinting(true);
                }} />
            </Grid>

            <Grid size={{ xs: 6 }} display="flex" justifyContent="center">
                <Button 
                variant="contained"
                sx={{ width: "100%" }}
                onClick={async () => {
                    await navigator.clipboard.writeText(
                        `${window.location.protocol}//${window.location.host}${shareCard(id,seed)}`
                    )
                    alert("Link Copied")
                }}
            >
            <Share />Share</Button>
            </Grid>
        </Grid>

        <Spacer height="40px" />

        <h2 className="text-center">Possible Values:</h2>
        {card?.values.map( (value,idx) => <p key={idx} className="text-center">{value}</p>)}

        <Spacer height="20px" />
        </div>
    </div>
}