export type BingoCardData = {
    id: string,
    name: string,
    values: string[]
}

export type BingoGameData = {
    id: string,
    card_id: string,
    card_seed: string,
    highlighted: number[]
}