import { BingoCard } from "@/types/Bingo";

export function createBingoCard(){
    const idSet = new Set<string>(getCardIds())
    let id = crypto.randomUUID()
    if (idSet.has(id)){
        id = crypto.randomUUID();
    }
    const ids = getCardIds()
    ids.push(id);
    updateBingoIds(ids);

    return id;
}

export function deleteBingoCard(cardId: string){
    localStorage.removeItem("Bingo Card "+cardId)
    const cardIds = getCardIds().filter(id => id !== cardId);
    updateBingoIds(cardIds)
}

export function getCardIds(): string[] {
    const storage = localStorage.getItem("Bingo Cards")
    if (storage === null){
        return []
    }
    return JSON.parse(storage)
}

function updateBingoIds(ids: string[]){
    localStorage.setItem("Bingo Cards", JSON.stringify(ids))
}

export function getBingoCard(cardId: string){
    const storage = localStorage.getItem("Bingo Card "+cardId)
    if (storage === null){
        return {
            id: cardId,
            name: "",
            values: []
        }
    }
    return JSON.parse(storage) as BingoCard
}

export function updateBingoCard(bingoCard: BingoCard){
    localStorage.setItem("Bingo Card "+bingoCard.id,JSON.stringify(bingoCard))
}