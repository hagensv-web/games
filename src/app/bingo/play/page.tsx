import BingoCard from "@/components/bingo/BingoCard";
import { BingoGameData } from "@/types/Bingo";
import { getBingoGame } from "@/utility/bingo/bingo_storage";
import { notFound, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Play(){
    const searchParams = useSearchParams()
    const [ game, setGame ] = useState<BingoGameData>()

    useEffect( () => {
        const gameId = searchParams.get("id")
        if (gameId == null){
            notFound();
        }

        const game = getBingoGame(gameId)
        if (game == null){
            notFound();
        }

        setGame(game);
    }, []);

    return <main>
        { game && <>
            <h1>{game.name}</h1>
            <BingoCard 
                card={game.card}
                seed={game.seed}
            />
            </>
        }
    </main>
}