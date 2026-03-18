import { Metadata } from "next";
import Box from "@mui/material/Box";
import Spacer from "@/components/Spacer";
import CardListingGrid from "@/components/bingo/CardListingGrid";


export const metadata: Metadata = {
  title: "Custom Bingo Generator",
  description: "Generate and share printable bingo cards for free, no sign up required! Perfect for classroom vocabulary, road trips, holidy party games, and so much more.",
  alternates: {
    canonical: "/bingo"
  }
};

export default function Page() {
    return <main>
      <h1>Custom Bingo Card Generator</h1>
      <section>
        <p>Generate custom bingo cards instantly. Print them off or share them with a link. Perfect for classrooms, parties, or virtual events. No signup required.</p>
      </section>
      <CardListingGrid />
      <Spacer height="40px" style={{ borderBottom: "1px solid #606060" }}/>
      <h2>How to Create a Bingo Card</h2>
      <ol>
        <li>Click "Create New Card"</li>
        <li>Enter at least 24 custom words or phrases.</li>
        <li>Click "Generate"</li>
        <li>Your bingo card will be generated with a random ordering of your entered phrases</li>
        <li>Print or Share the link with friends or participants.</li>
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
      <p>Absolutely! You can generate and share as many bingo cards as you like! Every bingo card that you create gets saved so that you can come back and generate new variations any time.</p>

      <h3>Do I need an account?</h3>
      <p>No, all of your bingo cards are stored on your browser so you do not need an account to access them. When you share a bingo card with someone else, all of the data needed to create the bingo card is embedded in the link. Nothing gets sent to us.</p>

      <h3>Can I print my bingo cards?</h3>
      <p>Yes, our bingo generator was designed with printability in mind. Once you create a bingo card, use the print button to print off the current card or bulk print randomized cards to play with a group.</p>

      <h3>How can I transfer my data?</h3>
      <p>Currently, the only way to transfer your data is to create individual share links for all of them on your new device/browser. We recognize that this is incredibly inconvenient and have an export feature in the works.</p>
    </main>
}
