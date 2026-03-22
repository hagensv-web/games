import { BingoCardData, BingoGameData } from "@/types/Bingo";
import { zlibCompress, zlibDecompress } from "../compress";

const DEFAULT_NAME = "New Bingo Card"

const CURRENT_FORMAT = 2;
const CARD_DATA = "/bingo/cards/"
const GAME_DATA = "/bingo/games/"

function migrateFormat(){
    const formatStr = localStorage.getItem("/bingo/data_format") || "0"
    let format = parseInt(formatStr);
    if (format === CURRENT_FORMAT){ return; }

    if (format === 0){
        const cards: string[] = JSON.parse(localStorage.getItem("Bingo Cards") || "[]")
        localStorage.removeItem("Bingo Cards")
        updateBingoIds(cards)
        cards.forEach(element => {
            const data = JSON.parse(localStorage.getItem("Bingo Card "+element) || "{}")
            localStorage.removeItem("Bingo Card "+element)
            updateBingoCard(data)
        });

        //Using the exing update methods will ensure that data is migrated to the latest version
        format = CURRENT_FORMAT;
    }

    if (format === 1){
        const cards: string[] = JSON.parse(localStorage.getItem("/bingo/cards") || "[]")
        localStorage.removeItem("/bingo/cards")
        updateBingoIds(cards);
        format = CURRENT_FORMAT;
    }

    localStorage.setItem("/bingo/data_format", ""+(format));
}

function generateUUID(ids: string[]): string {
    const idSet = new Set<string>(getCardIds())
    let id = crypto.randomUUID()
    if (idSet.has(id)){
        id = crypto.randomUUID();
    }
    return id;
}

/**
 * @returns a list of all bingo card ids
 */
export function getCardIds(): string[] {
    migrateFormat()

    const storage = localStorage.getItem(CARD_DATA)
    if (storage === null){
        return []
    }
    return JSON.parse(storage)
}

/**
 * Updates the list of all bingo cards
 * @param ids the new list of bingo card ids
 */
function updateBingoIds(ids: string[]){
    localStorage.setItem(CARD_DATA, JSON.stringify(ids))
}


/**
 * Creates a new bingo card
 * @returns the id of the created card
 */
export function createBingoCard(){
    migrateFormat();

    const ids = getCardIds()
    const id = generateUUID(ids)
    ids.push(id);
    updateBingoIds(ids);

    updateBingoCard({
        id,
        name: DEFAULT_NAME,
        values: []
    })

    return id;
}

/**
 * Deletes a bingo card
 * @param cardId the id of the card to delete
 */
export function deleteBingoCard(cardId: string){
    migrateFormat();

    localStorage.removeItem(CARD_DATA+cardId)
    const cardIds = getCardIds().filter(id => id !== cardId);
    updateBingoIds(cardIds)
}

/**
 * Retrieves the bingo card data from storage
 * @param cardId the id of the card to get
 * @returns the data of the card fetched
 */
export function getBingoCard(cardId: string){
    migrateFormat()

    const storage = localStorage.getItem(CARD_DATA+cardId)
    if (storage === null){
        return {
            id: cardId,
            name: "",
            values: []
        }
    }
    return JSON.parse(storage) as BingoCardData
}

/**
 * Updates a bingo card
 * @param bingoCard the updated data
 */
export function updateBingoCard(bingoCard: BingoCardData){
    migrateFormat()
    localStorage.setItem(CARD_DATA+bingoCard.id,JSON.stringify(bingoCard))
}

/**
 * Compresses bingo card data to a base64 string
 * @param cardId the id of the card
 * @returns base64 of card data
 */
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

/**
 * Extracts bingo card data from a base64 string
 * @param data the base64 encoded bingo card
 * @returns bingo card data
 */
export function getEncryptedBingoData(data: string): BingoCardData {
    const decompress = zlibDecompress(data);

    const params = new URLSearchParams(decompress);
    const json = Object.fromEntries(params.entries());

    const name = json.name ?? DEFAULT_NAME;
    const values = json.values?.split("\n") ?? [];

    return {
        id: "",
        name,
        values
    }
}

/**
 * Extracts bingo card data from a base64 string and adds it to the user's card list
 * @param data the base64 representation of the card data
 * @returns the id of the imported bingo card
 */
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

/**
 * Gets the master list of all active bingo games
 * @returns the list of all game ids
 */
export function getBingoGameIds(): string[] {
    migrateFormat();

    const storage = localStorage.getItem(GAME_DATA)
    if (storage === null){
        return [];
    }
    return JSON.parse(storage)
}

/**
 * Updates the master list of game ids
 * @param ids the updated list of game ids
 */
function updateBingoGameIds(ids: string[]){
    localStorage.setItem(GAME_DATA, JSON.stringify(ids))
}

/**
 * Creates a new bingo card
 * @param card the data of the card used in the game
 * @param seed the seed of the card
 * @returns the id of the created game
 */
export function createBingoGame(card: BingoCardData, seed: number): string {
    const ids = getBingoGameIds();

    const id = generateUUID(ids);
    ids.push(id);
    updateBingoGameIds(ids);

    const gameData: BingoGameData = {
        id,
        name: card.name + " Game",
        card,
        seed,
        highlighted: []
    }

    updateBingoGame(gameData)

    return id;
}

/**
 * Gets data for a bingo game
 * @param id the id of the game
 * @returns the game data or null if the game does not exist
 */
export function getBingoGame(id: string): BingoGameData | null {
    migrateFormat()
    const game = localStorage.getItem(GAME_DATA+id);
    if (game == null){
        return null
    }
    return JSON.parse(game)
}

/**
 * Updates a bingo game
 * @param game the updated game data
 */
export function updateBingoGame(game: BingoGameData){
    migrateFormat()
    localStorage.setItem(GAME_DATA+game.id,JSON.stringify(game))
}

/**
 * Deletes a bingo game
 * @param id the id of the game to delete
 */
export function deleteBingoGame(id: string){
    migrateFormat()
    localStorage.removeItem(GAME_DATA+id);
}