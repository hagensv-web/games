import SeededRng from "@/types/SeededRng";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CSSProperties, useState } from "react";
import { BingoCardData } from "@/types/Bingo";

interface Props {
    rows: number
    cols: number
    card: BingoCardData
    seed: number
}

const tableStyle: CSSProperties = {
    borderCollapse: "collapse",
    width: "100%",
    tableLayout: "fixed"
}

const headerStyle: CSSProperties = {
    fontSize: "2rem",
    textAlign: "center",
    verticalAlign: "middle",
    fontWeight: "bold",
}

const cellContainer: CSSProperties = {
    border: "2px solid black",
    padding: 0
}

const cellStyle: CSSProperties = {
    padding: 5,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
}

export default function BingoCard({ rows = 5, cols = 5, card, seed }: Props){
    const [highlightedCells, setHighlightedCells] = useState(0)
    const bingo = ["B","I","N","G","O"];
    const rng = new SeededRng(seed);
    const values2 = card.values.map(x => x);

    function isHighlighted(cell: number){
        return highlightedCells % 2**(cell+1) >= 2**(cell);
    }

    function toggleHighlightCell(cell: number){
        setHighlightedCells( 
            cells => cells + (
                2**(cell) * ( isHighlighted(cell) ? -1 : 1 )
            )
        );
    }
    
    function getValue(row: number, col: number){
        if (row === 2 && col === 2){
            return <strong>Free</strong>
        }
        const idx = rng.next(0,values2.length);
        return values2.splice(idx,1);
    }

    return <table style={tableStyle}>
        <thead>
            <tr style={{ border: "2px solid black"}}>
                {bingo.map( (letter,idx) => (
                    <th
                        key={idx}
                        style={headerStyle}
                    >
                        {letter}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {bingo.map((_,r) => (
            <tr key={r}>
                {bingo.map((_,c) => (
                <td
                    key={c}
                    style={cellContainer}
                    onClick={ () => toggleHighlightCell(r*rows+c) }
                >
                    <Box style={cellStyle} sx={{ aspectRatio: { xs: 1.5, sm: 2, md: 3 }}}>
                        <Typography variant={"body1"} sx={{ fontSize: { xs: "0.5rem", sm: "0.8rem", md: "1.3rem" }}}>
                        {getValue(r,c)}
                        </Typography>
                    </Box>
                </td>
                ))}
            </tr>
            ))}
        </tbody>
    </table>
}