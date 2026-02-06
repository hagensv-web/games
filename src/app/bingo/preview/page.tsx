'use client'

import BingoCard from "@/components/BingoCard"
import ErrorRouter from "@/components/ErrorRouter"
import Button from "@mui/material/Button"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "./page.module.css"
import { Col, Container, Row } from "react-bootstrap";
import Stack from "@mui/material/Stack"
import { Edit, Gamepad, Games, PlayCircle, Print, Refresh, Share } from "@mui/icons-material"

export default function Page(){

    const searchParams = useSearchParams()
    const [ error, setError ] = useState<string | null>(null);
    const [ name, setName ] = useState("Bingo Board");
    const [ seed, setSeed ] = useState(0);
    const [ valuePool, setValuePool ] = useState<string[]>([]);

    useEffect( () => {

        const name = searchParams.get("name");
        if (name !== null && name !== ""){
            setName(name);
        } else {
            setName("Unnamed Bingo Card")
        }

        const seed = searchParams.get("seed") ?? ""+(Math.random()*10000)
        if (!Number.isNaN(parseInt(seed))){
            setSeed(parseInt(seed))
        } else {
            let strVal = 0;
            for (let i = 0; i < seed.length; i++){
                strVal += seed.charCodeAt(i);
            }
            setSeed(strVal);
        }

        const data = searchParams.get("data") ?? "";
        let values = data.split("\n")
        //Parse data
        if (values.length < 24){
            setError("Not enough values to fill board")
        }
        setValuePool(values)

    }, [])

    return <main>
        <h1 className={styles.bingoTitle}>{name}</h1>
        <ErrorRouter
            error={error !== null}
            errorMsg={error}
        >
            <div className={styles.bingoCard}>
            <BingoCard
                seed={seed}
                values={valuePool}
            ></BingoCard>
            </div>


            <Stack direction="row" justifyContent="space-evenly" style={{ width: "80%", margin: "auto"}}>
                <Button 
                    variant="contained"
                    className="no-print"
                    onClick={() => { 
                        window.location.href = "/bingo/create" 
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

                        await navigator.clipboard.writeText(window.location.toString())
                        alert("Link Copied")
                    }}
                >
                <Share />Share</Button>
            </Stack>

        </ErrorRouter>
    </main>
}