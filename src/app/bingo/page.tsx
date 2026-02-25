import { Metadata } from "next";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Spacer from "@/components/Spacer";
import { editCard } from "@/utility/bingo/navigation";
import { createBingoCard } from "@/utility/bingo/bingo_storage";
import CardListingGrid from "@/components/bingo/CardListingGrid";


export const metadata: Metadata = {
  title: "Bingo Generator",
  description: "Generate and share bingo cards",
};

export default function Page() {
    return <Box sx={{ margin: { xs: "0 5%", md: "0 10%" }}}>
    <main>
      <h1>My Bingo Cards</h1>
      <section>
        <p>Generate custom bingo cards instantly. Print them off or share them with a link. Perfect for classrooms, parties, virtual events.</p>
        <p>No signup required. Your bingo card data is encoded directly in the URL, so anyone can open and play immediately.</p>
      </section>
      {/* <Button variant="contained" onClick={() => window.location.href = editCard(createBingoCard())}>Create New Card</Button> */}
      <Spacer height="20px" />
      <CardListingGrid />
      <Spacer height="20px" />
      <h2>How to Create a Bingo Card</h2>
      <ol>
        <li>Enter your custom words or phrases.</li>
        <li>Generate your bingo card.</li>
        <li>Share the link with friends or participants.</li>
      </ol>

      <h2>Use Cases:</h2>
      <ul>
        <li>Classroom vocabulary bingo</li>
        <li>Annual Bingo Cards</li>
        <li>Finance Bingo</li>
        <li>Bible bingo</li>
        <li>Holiday party games</li>
        <li>Anything, really</li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>Is this free?</h3>
      <p>Absolutely! You can generate and share as many bingo cards as you like!</p>

      <h3>Do I need an account?</h3>
      <p>No, all of your cards are stored your browser. When you create a sharable link, all of the data needed to create the bingo card is in the link.</p>

      <h3>How can I transfer my data?</h3>
      <p>Currently, the only way to transfer your data is to create individual share links for all of them on your new device/browser. We recognize that this is incredibly inconvenient and have an export feature in the works.</p>
    </main>
    </Box>
}
