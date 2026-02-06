import { createBingoCard, updateBingoCard } from "@/utility/bingo/bingo_storage";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function Share(){
    const searchParams = useSearchParams()
    const [ seed, setSeed ] = useState(0);

    useEffect( () => {

        const name = searchParams.get("name") ?? "";

        const seed = searchParams.get("seed") ?? ""+(Math.random()*10000)

        const data = searchParams.get("data") ?? "";
        const values = data.split("\n")

        const id = createBingoCard();

        updateBingoCard({
            id,
            name,
            values
        })

        //redirect
        window.location.href = `/bingo/preview?id=${id}&seed=${seed}`

    }, [])
}