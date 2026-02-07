import { getBingoCard } from "./bingo_storage"

const basePath = "/games/bingo"

export function bingoHome(){
    return `${basePath}`
}

export function editCard(id: string){
    return `${basePath}/edit?card=${id}`
}

export function previewCard(id: string, seed: string = ""){
    return `${basePath}/preview?card=${id}`
}

export function shareCard(id: string, seed: string = ""){
    const card = getBingoCard(id)

    const searchParams = new URLSearchParams({
        name: card?.name ?? "",
        values: (card?.values ?? []).join("\n"),
        seed
    })

    return `${basePath}/share?${searchParams.toString()}`
}