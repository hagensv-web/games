'use client'

import { BingoCard } from "@/types/Bingo";
import { createBingoCard, deleteBingoCard, getBingoCard, getCardIds } from "@/utility/bingo/bingo_storage";
import { editCard, previewCard } from "@/utility/bingo/navigation";
import { DeleteForever } from "@mui/icons-material";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Metadata } from "next";
import { useEffect, useState } from "react";


export const metadata: Metadata = {
  title: "Bingo Generator",
  description: "Generate and share bingo cards",
  other: {
    "google-site-verification": "AEBD389WngD937lWHS-pgY5RbAaPOHABFRBWM84bm7g"
  }
};

export default function Page(){

    const [cards, setCards] = useState<BingoCard[]>([])

    useEffect( () => {
        const games = getCardIds()

        const bingoCards = games
            .map(id => getBingoCard(id))

        setCards(bingoCards);

    }, [])


    return <main>
    <h1>My Bingo Cards</h1>
    <Button variant="contained" onClick={() => window.location.href = editCard(createBingoCard())}>Create New Card</Button>
    { cards.map( (card,idx) =>
        <Paper key={idx} style={{ width: "fit-content", padding: 20, margin: 20}}>
            <h2>{card.name}</h2>
            <p>{card.values.length} values</p>
            <Button
                variant="contained"
                onClick={() => {
                    window.location.href = editCard(card.id)
                }}
            >
                Edit
            </Button>
            <Button
                variant="contained"
                onClick={() => {
                    window.location.href = previewCard(card.id)
                }}
            >
                Preview
            </Button>
            <IconButton
                onClick={() => {
                    deleteBingoCard(card.id)
                    setCards(prev => prev.filter(c => c.id !== card.id))
                }}
            >
                <DeleteForever />
            </IconButton>
        </Paper>
    )}
    </main>
}