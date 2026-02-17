'use client'

import { createBingoCard, updateBingoCard } from "@/utility/bingo/bingo_storage";
import { previewCard } from "@/utility/bingo/navigation";
import { zlibDecompress } from "@/utility/compress";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Share(){
    const searchParams = useSearchParams()

    useEffect( () => {
        const data = searchParams.get("data") ?? "";

        const decompress = zlibDecompress(data);

        const params = new URLSearchParams(decompress);
        const json = Object.fromEntries(params.entries());

        const name = json.name ?? "";
        const values = json.values?.split("\n") ?? [];
        const seed = json.seed ?? ""+(Math.random()*10000)

        const id = createBingoCard();

        updateBingoCard({
            id,
            name,
            values
        })

        //redirect
        window.location.href = previewCard(id,seed)

    }, [])

    return <p>Redirecting...</p>
}