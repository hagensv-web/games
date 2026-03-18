import { BingoCardData } from "@/types/Bingo";
import { zlibCompress, zlibDecompress } from "../compress";

const DEFAULT_NAME = "New Bingo Card"

function migrateFormat(){
    const formatStr = localStorage.getItem("/bingo/data_format") || "0"
    let format = parseInt(formatStr);

    if (format == 0){
        const cards: string[] = JSON.parse(localStorage.getItem("Bingo Cards") || "[]")
        localStorage.removeItem("Bingo Cards")
        updateBingoIds(cards)
        cards.forEach(element => {
            const data = JSON.parse(localStorage.getItem("Bingo Card "+element) || "{}")
            localStorage.removeItem("Bingo Card "+element)
            updateBingoCard(data)
        });
        format = 1;
    }

    localStorage.setItem("/bingo/data_format", ""+(format));
}

export function createBingoCard(){
    migrateFormat();

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
    migrateFormat();

    localStorage.removeItem("/bingo/cards/"+cardId)
    const cardIds = getCardIds().filter(id => id !== cardId);
    updateBingoIds(cardIds)
}

export function getCardIds(): string[] {
    migrateFormat()

    const storage = localStorage.getItem("/bingo/cards")
    if (storage === null){
        return []
    }
    return JSON.parse(storage)
}

function updateBingoIds(ids: string[]){
    localStorage.setItem("/bingo/cards", JSON.stringify(ids))
}

export function getBingoCard(cardId: string){
    migrateFormat()

    const storage = localStorage.getItem("/bingo/cards/"+cardId)
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
    localStorage.setItem("/bingo/cards/"+bingoCard.id,JSON.stringify(bingoCard))
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
        id,
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