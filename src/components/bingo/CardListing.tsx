"use client"

import { BingoCard } from "@/types/Bingo"
import { editCard, previewCard } from "@/utility/bingo/navigation"
import DeleteForever from "@mui/icons-material/DeleteForever"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import crypto from "crypto"

interface Props {
    card: BingoCard
    deleteFunction: (c: BingoCard) => void
}

export default function CardListing({ card, deleteFunction }: Props){
    return <Paper elevation={3} style={{ padding: 20, overflow: "hidden" }}>
            <h2>{card.name}</h2>
            <p style={{ fontSize: "8pt", margin: "none", color: "#666", wordWrap: "break-word" }}>Hash: {crypto.createHash('sha256').update(card.values.join("\n")).digest('hex')}</p>
            <p>{card.values.length} values</p>
            <Stack direction="row" justifyContent="space-evenly">
            <Button
                aria-label="Edit card"
                variant="contained"
                onClick={() => {
                    window.location.href = editCard(card.id)
                }}
            >
                Edit
            </Button>
            <Button
                aria-label="Preview card"
                variant="contained"
                onClick={() => {
                    window.location.href = previewCard(card.id)
                }}
            >
                Preview
            </Button>
            <IconButton
                aria-label="Delete card"
                onClick={() => {
                    deleteFunction(card)
                }}
            >
                <DeleteForever />
            </IconButton>
            </Stack>
        </Paper>
}