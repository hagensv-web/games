'use client'

import Grid from "@mui/material/Grid";
import CardListing from "@/components/bingo/CardListing";
import { useEffect, useState } from "react";
import { BingoCardData } from "@/types/Bingo";
import { createBingoCard, deleteBingoCard, getBingoCard, getCardIds } from "@/utility/bingo/bingo_storage";
import Button from "@mui/material/Button";
import { editCard } from "@/utility/bingo/navigation";
import Spacer from "@/components/Spacer";

export default function CardListingGrid(){

    const [cards, setCards] = useState<BingoCardData[]>([])
    
    useEffect( () => {
        const games = getCardIds()

        const bingoCards = games
            .map(id => getBingoCard(id))

        setCards(bingoCards);

    }, [])

    const deleteCard = (card: BingoCardData) => {
        deleteBingoCard(card.id)
        setCards(prev => prev.filter(c => c.id !== card.id))
    }

    return <>
    <Button variant="contained" onClick={() => window.location.href = editCard(createBingoCard())}>Create New Card</Button>
    <Spacer height="20px" />
    <Grid container spacing={4}>
        { cards.map( (card,idx) =>
            <Grid key={idx} size={{ xs: 12, md: 6 }}>
                <CardListing deleteFunction={deleteCard} card={card} />
            </Grid>
        )}
    </Grid>
    </>
}