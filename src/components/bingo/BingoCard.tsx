import SeededRng from "@/types/SeededRng";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CSSProperties, useMemo, useState } from "react";
import { BingoCardData } from "@/types/Bingo";
import styles from "@/components/bingo/BingoCardStyle.module.css";

interface Props {
    card: BingoCardData | null
    seed: number,
    onInteract?: (cell: number) => void
}


export default function BingoCard({ card, seed, onInteract }: Props){
    const [ highlightedCells, setHighlightedCells ] = useState(0)

    const [ rowCount, colCount ] = [5, 5];
    const bingo = ["B","I","N","G","O"];
    const rows = useMemo( () => Array.from({ length: rowCount }, (_, i) => i), [card]);
    const cols = useMemo( () => Array.from({ length: colCount }, (_, i) => i), [card]);
    const values = useMemo( () => {

        //Return empty list if card is missing
        if (!card){
            return Array.from({ length: 25 }, () => "" )
        }

        //Create seeded random number generator
        const rng = new SeededRng(seed);

        //Copy values
        const pool = card.values.map(x => x)
        const vals = []
        for (let i = 0; i < rowCount*colCount; i++){

            //Insert free space
            if (i % colCount == Math.floor(colCount / 2) &&
                Math.floor(i / rowCount) == Math.floor(colCount / 2)
            ){
                vals.push(<strong>Free</strong>);
                continue;
            }

            //Get value for cell
            const nextIdx = rng.next(0, pool.length)
            vals.push(...pool.splice(nextIdx,1))
        }
        return vals;
    }, [card, seed] )
    
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

    const cellClicked = (cellId: number) => {
        if (!onInteract) return;
        toggleHighlightCell(cellId)
        onInteract(cellId)
    }
    
    function getValue(row: number, col: number){
        return values[row*colCount + col]
    }

    return <table className={styles.tableStyle}>
        <thead>
            <tr style={{ border: "2px solid black"}}>
                {bingo.map( (letter,idx) => (
                    <th
                        key={idx}
                        className={styles.headerStyle}
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
                        className={styles.cellContainer}
                        onClick={ () => cellClicked(cellId) }
                    >
                        <div className={styles.cellStyle}>
                            <Typography variant={"body1"} sx={{ fontSize: { xs: "0.5rem", sm: "0.8rem", md: "1.3rem" }}}>
                            {getValue(r,c)}
                            </Typography>
                        </div>
                    </td>
                )}
            )}
            </tr>
            ))}
        </tbody>
    </table>
}