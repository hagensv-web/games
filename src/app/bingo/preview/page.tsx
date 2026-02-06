'use client'

import BingoCard from "@/components/BingoCard"
import ErrorRouter from "@/components/ErrorRouter"
import Button from "@mui/material/Button"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "./page.module.css"
import Stack from "@mui/material/Stack"
import { Edit, PlayCircle, Print, Refresh, Share } from "@mui/icons-material"
import { getBingoCard } from "@/utility/bingo/bingo_storage"

export default function Page(){

    const searchParams = useSearchParams()
    const [ error, setError ] = useState<string | null>(null);
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

    return <ErrorRouter
        error={error !== null}
        errorMsg={error}
    >
        <h1 className={styles.bingoTitle}>{name}</h1>
        <div className={styles.bingoCard}>
            <BingoCard
                seed={seed}
                values={valuePool}
            ></BingoCard>
        </div>

        {/* Action Buttons */}
        <Stack direction="row" justifyContent="space-evenly" style={{ width: "80%", margin: "auto"}}>
            <Button 
                variant="contained"
                className="no-print"
                onClick={() => { 
                    window.location.href = `/bingo/edit?card=${id}` 
                }}
            ><Edit />Edit</Button>

            <Button 
                variant="contained"
                className="no-print"
                onClick={() => {
                    setSeed(Math.random())
                }}  
            ><Refresh />Regenerate</Button>

            <Button 
                variant="contained"
                className="no-print"
                onClick={() => {
                    window.location.href = "/bingo/play"
                }}
            ><PlayCircle />Play</Button>

            <Button 
                variant="contained"
                className="no-print"
                onClick={() => {
                    print();
                }}
            >
            <Print />Print</Button>

            <Button 
                variant="contained"
                className="no-print"
                onClick={async () => {


                    await navigator.clipboard.writeText(window.location.host + "/bingo/share?")
                    alert("Link Copied")
                }}
            >
            <Share />Share</Button>
        </Stack>

        <div className="no-print" style={{ marginTop: "20px" }}>
            <h2 className="text-center">Possible Values:</h2>
            {valuePool.map(value => <p className="text-center">{value}</p>)}
        </div>

    </ErrorRouter>
}