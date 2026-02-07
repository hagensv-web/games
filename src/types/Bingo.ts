export type BingoCard = {
    id: string,
    name: string,
    values: string[]
}

export type BingoGame = {
    id: string,
    card_id: string,
    card_seed: string,
    highlighted: number[]
}