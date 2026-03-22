export type BingoCardData = {
    id: string,
    name: string,
    values: string[]
}

export type BingoGameData = {
    id: string,
    name: string,
    card: BingoCardData,
    seed: number,
    highlighted: number[]
}