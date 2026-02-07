import { Metadata } from "next";
import BingoHome from "./page.client";


export const metadata: Metadata = {
  title: "Bingo Generator",
  description: "Generate and share bingo cards",
};

export default function Page() {
    return <BingoHome />
}
