'use client'

import { createBingoCard, updateBingoCard } from "@/utility/bingo/bingo_storage";
import { previewCard } from "@/utility/bingo/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Share(){
    const searchParams = useSearchParams()

    useEffect( () => {

        const name = searchParams.get("name") ?? "";

        const seed = searchParams.get("seed") ?? ""+(Math.random()*10000)

        const data = searchParams.get("values") ?? "";
        const values = data.split("\n")

        console.log(values)

        const id = createBingoCard();

        updateBingoCard({
            id,
            name,
            values
        })

        //redirect
        window.location.href = previewCard(id,seed)

    }, [])
}