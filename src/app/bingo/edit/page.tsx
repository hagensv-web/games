import { Metadata } from "next"
import EditBingoPage from "./page.client"

export const metadata: Metadata = {
  title: "Custom Bingo Editor",
  description: "Edit your very own custom bingo card!",
  alternates: {
    canonical: "/bingo"
  }
}

export default function Page(){
    return <EditBingoPage />
}