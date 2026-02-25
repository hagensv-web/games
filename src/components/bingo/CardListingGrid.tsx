"use client"

import Grid from "@mui/material/Grid";
import CardListing from "./CardListing";
import { useEffect, useState } from "react";
import { BingoCard } from "@/types/Bingo";
import { deleteBingoCard, getBingoCard, getCardIds } from "@/utility/bingo/bingo_storage";

export default function CardListingGrid(){

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

    return <Grid container spacing={4}>
        { cards.map( (card,idx) =>
            <Grid key={idx} size={{ xs: 12, md: 6 }}>
                <CardListing deleteFunction={deleteCard} card={card} />
            </Grid>
        )}
    </Grid>
}