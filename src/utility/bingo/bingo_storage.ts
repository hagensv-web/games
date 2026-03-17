import { BingoCardData } from "@/types/Bingo";
import { zlibCompress, zlibDecompress } from "../compress";

const DEFAULT_NAME = "New Bingo Card"

export function createBingoCard(){
    const idSet = new Set<string>(getCardIds())
    let id = crypto.randomUUID()
    if (idSet.has(id)){
        id = crypto.randomUUID();
    }
    const ids = getCardIds()
    ids.push(id);
    updateBingoIds(ids);

    updateBingoCard({
        id,
        name: DEFAULT_NAME,
        values: []
    })

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
    return JSON.parse(storage) as BingoCardData
}

export function updateBingoCard(bingoCard: BingoCardData){
    localStorage.setItem("Bingo Card "+bingoCard.id,JSON.stringify(bingoCard))
}

export function exportBingoCard(cardId: string): string {
    const card = getBingoCard(cardId)
    const shareData = {
        name: card?.name ?? "",
        values: (card?.values ?? []).join("\n"),
    }
    const searchParams = new URLSearchParams(shareData)

    const compressedData = zlibCompress(searchParams.toString());

    return compressedData;
}

export function getEncryptedBingoData(data: string): BingoCardData {
    const decompress = zlibDecompress(data);

    const params = new URLSearchParams(decompress);
    const json = Object.fromEntries(params.entries());

    const name = json.name ?? DEFAULT_NAME;
    const values = json.values?.split("\n") ?? [];

    const id = createBingoCard();

    return {
        id: "",
        name,
        values
    }
}

export function importBingoCard(data: string): string {
    const decompress = zlibDecompress(data);

    const params = new URLSearchParams(decompress);
    const json = Object.fromEntries(params.entries());

    const name = json.name ?? DEFAULT_NAME;
    const values = json.values?.split("\n") ?? [];

    const id = createBingoCard();

    updateBingoCard({
        id,
        name,
        values
    })

    return id;
}