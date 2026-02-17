'use client'

import { BingoCard } from "@/types/Bingo";
import { createBingoCard, deleteBingoCard, getBingoCard, getCardIds } from "@/utility/bingo/bingo_storage";
import { editCard } from "@/utility/bingo/navigation";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import CardListing from "@/components/CardListing";

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


    return <main>
    <h1>My Bingo Cards</h1>
    <Button variant="contained" onClick={() => window.location.href = editCard(createBingoCard())}>Create New Card</Button>
    { cards.map( (card,idx) =>
        <CardListing key={idx} deleteFunction={deleteCard} card={card} />
    )}
    </main>
}