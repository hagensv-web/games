"use client"

import { BingoCardData } from "@/types/Bingo";
import Box from "@mui/material/Box";
import BingoCard from "./BingoCard";
import { useMemo } from "react";
import crypto from "crypto"

interface Props {
    card: BingoCardData,
    seed: number,
    count: number
}

export default function BingoPrintLayout({ card, seed, count }: Props){
    const cards = useMemo( () => Array.from({ length: count }, (_, i) => i), [count]);

    return <Box className="print-only">
        {cards.map( (val) =>
            <Box key={val} sx={{ pageBreakInside: "avoid", pageBreakBefore: val == 0 ? "avoid" : "always" }}>
                <p style={{ fontSize: "8pt", margin: 0 }}>Card {crypto.createHash('sha256').update(card.values.join("\n")).digest('hex')}</p>
                <p style={{ fontSize: "8pt", margin: 0 }}>No. {seed+val}</p>
                <h1 style={{ margin: 0, textAlign: "center" }}>{card.name}</h1>
                <BingoCard 
                    card={card}
                    seed={seed+val}
                />
            </Box>
        )}
    </Box>
}