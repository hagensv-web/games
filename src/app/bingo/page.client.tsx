'use client'

import { BingoCard } from "@/types/Bingo";
import { createBingoCard, deleteBingoCard, getBingoCard, getCardIds } from "@/utility/bingo/bingo_storage";
import { editCard } from "@/utility/bingo/navigation";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import CardListing from "@/components/CardListing";
import Spacer from "@/components/Spacer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function BingoHome(){

    const [cards, setCards] = useState<BingoCard[]>([])

    useEffect( () => {
        const games = getCardIds()

        const bingoCards = games
            .map(id => getBingoCard(id))

        setCards(bingoCards);

    }, [])

    const deleteCard = (card: BingoCard) => {
        deleteBingoCard(card.id)
        setCards(prev => prev.filter(c => c.id !== card.id))
    }


    return <Box sx={{ margin: { xs: "0 5%", md: "0 10%" }}}>
    <main>
        <h1>My Bingo Cards</h1>
        <Button variant="contained" onClick={() => window.location.href = editCard(createBingoCard())}>Create New Card</Button>
        <Spacer height="20px" />

        <Grid container spacing={4}>
        { cards.map( (card,idx) =>
            <Grid key={idx} size={{ xs: 12, md: 6 }}>
                <CardListing deleteFunction={deleteCard} card={card} />
            </Grid>
        )}
        </Grid>
        </main>
    </Box>
}