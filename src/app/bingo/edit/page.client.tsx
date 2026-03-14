'use client'

import Spacer from "@/components/Spacer";
import { BingoCardData } from "@/types/Bingo";
import { createBingoCard, getBingoCard, updateBingoCard } from "@/utility/bingo/bingo_storage";
import { editCard, previewCard } from "@/utility/bingo/navigation";
import { Delete } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditBingoPage(){

    const searchParams = useSearchParams();
    const [loaded, setLoaded] = useState(false)
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [values, setValues] = useState([""])

    //Load bingo card
    useEffect( () => {
      const currentId = searchParams.get("card")
      if (currentId === null || currentId === ""){
        //Generate new id
        window.location.href = editCard(createBingoCard())
        return;
      }

      setId(currentId)
      const card = getBingoCard(currentId)

      if (card !== null){
        setName(card.name)
        setValues([...card.values,""])
      }

      setLoaded(true)
    }, [])


    //Save bingo card
    useEffect( () => {
      if (!loaded) return;

      const card: BingoCardData = {
        id,
        name,
        values: values.filter( v => v.trim() !== "")
      }

      updateBingoCard(card)
    }, [name, values] );

    const handleValueChange = (index: number, value: string) => {
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);

        // Auto-add new field if last field is filled
        if (index === values.length - 1 && value.trim() !== "") {
        setValues([...newValues, ""]);
        }
    };

    const handleDelete = (index: number) => {
        const newValues = values.filter((_, i) => i !== index);
        setValues(newValues.length ? newValues : [""]);
    };

    const enteredValues = values.filter(v => v.trim() !== "");

    return <Box sx={{ margin: { xs: "0 5%", md: "0 10%" }}}>
      <main>
      <h1>Bingo Card Editor</h1>

      {/* Name Field */}
      <div>
        <Typography variant="body1">
          Card Title
        </Typography>
        <OutlinedInput
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter card name"
          style={{ width: "100%" }}
        />
      </div>

      <Spacer height="20px" />

      {/* Values Fields */}
      <div>
        <Typography variant="body1">
          Possible Values
        </Typography>

        {values.map((val, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 8,
              gap: 8,
            }}
          >
            <OutlinedInput
              value={val}
              id={`Value ${index + 1}`}
              onChange={(e) => handleValueChange(index, e.target.value)}
              placeholder={`Value ${index + 1}`}
              style={{ flex: 1 }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => handleDelete(index)}
                    aria-label="Delete value"
                  >
                    <Delete/>
                  </IconButton>
                </InputAdornment>
              }
            ></OutlinedInput>            
          </div>
        ))}
      </div>

      {/* Counter */}
      <div style={{ marginTop: 12, marginBottom: 20, fontSize: 14 }}>
        Values entered: <strong>{enteredValues.length}</strong> / 24
      </div>

      <Button 
      variant="contained"
      onClick={() => {
        if (enteredValues.length < 24){
          return;
        }

        window.location.href = previewCard(id)
      }}>
      Generate
      </Button>
      </main>
    </Box>
}