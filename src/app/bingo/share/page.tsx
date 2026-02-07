import { Metadata } from "next";
import Share from "./page.client";

export const metadata: Metadata = {
  title: "Bingo",
  description: "Someone shared a bingo card with you!"
}

export default function Page(){
    return <Share />
}