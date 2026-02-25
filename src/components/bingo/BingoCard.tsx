import SeededRng from "@/types/SeededRng";
import Box from "@mui/material/Box";
import { CSSProperties } from "react";

interface Props {
    values: string[]
    seed: number
}

const tableStyle: CSSProperties = {
    borderCollapse: "collapse",
    width: "100%",
    minWidth: "600px",
    height: "100%",
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

export default function BingoCard({ values, seed }: Props){
    const bingo = ["B","I","N","G","O"];
    const rng = new SeededRng(seed);
    const values2 = values.map(x => x);
    
    function getValue(row: Number, col: Number){
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
                >
                    <Box style={cellStyle} sx={{ aspectRatio: { xs: 1.5, sm: 2 }}}>
                    {getValue(r,c)}
                    </Box>
                </td>
                ))}
            </tr>
            ))}
        </tbody>
    </table>
}