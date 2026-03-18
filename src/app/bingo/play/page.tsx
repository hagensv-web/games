import { BingoGameData } from "@/types/Bingo";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Play(){
    const searchParams = useSearchParams()
    const [ game, setGame ] = useState<BingoGameData>()

    return <main>
        <h1></h1>
        
    </main>
}