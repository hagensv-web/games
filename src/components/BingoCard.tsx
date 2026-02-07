import SeededRng from "@/types/SeededRng";
import { CSSProperties } from "react";

interface Props {
    values: string[]
    seed: number
}

const headerStyle: CSSProperties = {
    width: 90,
    height: 60,
    fontSize: "2rem",
    textAlign: "center",
    verticalAlign: "middle",
    fontWeight: "bold",
}

const cellStyle: CSSProperties = {
    border: "2px solid black",
    width: 120,
    height: 60,
    textAlign: "center",
    verticalAlign: "middle",
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

    return <table style={{ borderCollapse: "collapse", width: "100%", height: "100%" }}>
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
                    style={cellStyle}
                >
                    {getValue(r,c)}
                </td>
                ))}
            </tr>
            ))}
        </tbody>
    </table>
}