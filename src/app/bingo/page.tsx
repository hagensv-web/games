'use client'

import { BingoCard, getBingoCard, getCardIds } from "@/utility/bingo/bingo_storage";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page(){

    const [cards, setCards] = useState<BingoCard[]>([])

    useEffect( () => {
        const games = getCardIds()

        const bingoCards = games
            .map(id => getBingoCard(id))
            .filter(card => card !== null)

        setCards(bingoCards);

    }, [])


    return <main>
    <h1>My Bingo Cards</h1>
    <Link href="/bingo/edit">Create New Card</Link>
    { cards.map( card =>
        <div>
            <h2>{card.name}</h2>
            <Button
                variant="contained"
                onClick={() => {
                    window.location.href = `/bingo/edit?card=${card.id}`
                }}
            >
                Edit
            </Button>
            <Button
                variant="contained"
                onClick={() => {
                    window.location.href = `/bingo/preview?card=${card.id}`
                }}
            >
                Preview
            </Button>
        </div>
    )}
    </main>
}