import { bingoHome } from "@/utility/bingo/navigation";
import Link from "next/link";
import Box from "@mui/material/Box";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Game Generators",
  description: "A collection of web-based games to play offline",
  alternates: {
    canonical: "/"
  }
}

export default function Home() {

  return (
    <Box sx={{ margin: { xs: "0 5%", md: "0 10% "}}}>
      <main>
        <h1>CustomMade Games</h1>
          <h2>About</h2>
          <p>This website is a passion project for custom games/game generators. Our philosophy is that everything should work entirely offline, meaning all data stored on your device. We strive to collect as little data as possible. If everything is stored in your browser, there's no need for user accounts. It also has the added benefit of minimizing costs on our end, allowing us to keep our website completely free.</p>
          <p>Want to suggest a game or generator? <Link href={"mailto:contact@custommade.games"}>Send us an email!</Link></p>
          <h2>Games / Generators</h2>
          <h3><Link href={bingoHome()}>Bingo!</Link></h3>
          <p>Create your own custom bingo cards. Create a list of possible values and generate as many random cards as you want! You can print them or share with your friends.</p>
      </main>
    </Box>
  )
}
