'use client'

import { importBingoCard } from "@/utility/bingo/bingo_storage";
import { previewCard } from "@/utility/bingo/navigation";
import { zlibDecompress } from "@/utility/compress";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Share(){
    const searchParams = useSearchParams()

    useEffect( () => {
        const data = searchParams.get("data") ?? "";
        const seed = searchParams.get("seed") ?? ""+(Math.random()*10000);

        const id = importBingoCard(data);

        //redirect
        window.location.href = previewCard(id,seed)

    }, [])

    return <p>Redirecting...</p>
}