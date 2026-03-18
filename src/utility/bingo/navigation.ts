import { exportBingoCard } from "@/utility/bingo/bingo_storage"

const basePath = "/bingo"

export function bingoHome(){
    return `${basePath}`
}

export function editCard(id: string){
    return `${basePath}/edit?card=${id}`
}

export function previewCard(id: string, seed: string = ""){
    return `${basePath}/preview?card=${id}&seed=${seed}`
}

export function shareCard(id: string, seed: number = 0){
    const data = exportBingoCard(id)
    return `${basePath}/share?data=${encodeURIComponent(data)}&seed=${seed}`
}