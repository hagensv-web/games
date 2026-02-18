import { Metadata } from "next"
import EditBingoPage from "./page.client"


export const metadata: Metadata = {
  title: "Bingo Card Editor",
  description: "Make your own bingo card!"
}

export default function Page(){
    return <EditBingoPage />
}