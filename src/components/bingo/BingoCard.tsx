import SeededRng from "@/types/SeededRng";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CSSProperties, useMemo, useState } from "react";
import { BingoCardData } from "@/types/Bingo";

interface Props {
    card: BingoCardData | null
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

export default function BingoCard({ card, seed }: Props){
    const [highlightedCells, setHighlightedCells] = useState(0)

    const [ rowCount, colCount ] = [5, 5];
    const rows = useMemo( () => Array.from({ length: rowCount }, (_, i) => i), [card]);
    const cols = useMemo( () => Array.from({ length: colCount }, (_, i) => i), [card]);

    const values = useMemo( () => {
        if (!card){
            return Array.from({ length: 25 }, () => "" )
        }

        const rng = new SeededRng(seed);
        const pool = card.values.map(x => x)
        const vals = []
        for (let i = 0; i < rowCount*colCount; i++){
            if (i % colCount == Math.floor(colCount / 2) &&
                Math.floor(i / rowCount) == Math.floor(colCount / 2)
            ){
                vals.push(<strong>Free</strong>);
                continue;
            }

            const nextIdx = rng.next(0, pool.length)
            vals.push(...pool.splice(nextIdx,1))
        }
        return vals;
    }, [card, seed] )
    
    const bingo = ["B","I","N","G","O"];

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
        return values[row*colCount + col]
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
            {rows.map((r) => (
            <tr key={r}>
                {cols.map((c) => {
                    const cellId = r*rowCount + c

                return (<td
                    key={c}
                    style={{ ...cellContainer, background: (isHighlighted(cellId)) ? "#ffff0066" : "none" }}
                    onClick={ () => toggleHighlightCell(cellId) }
                >
                    <Box style={cellStyle} sx={{ aspectRatio: { xs: 1.5, sm: 2, md: 3 }}}>
                        <Typography variant={"body1"} sx={{ fontSize: { xs: "0.5rem", sm: "0.8rem", md: "1.3rem" }}}>
                        {getValue(r,c)}
                        </Typography>
                    </Box>
                </td>
            )})}
            </tr>
            ))}
        </tbody>
    </table>
}