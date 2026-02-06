'use client'

import { Delete } from "@mui/icons-material";
import { Icon, IconButton, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function CreateBingo(){
    const [name, setName] = useState("")
    const [values, setValues] = useState([""])

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


    return <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>Bingo Card Generator</h2>

      {/* Name Field */}
      <div style={{ marginBottom: 16 }}>
        <label>Name</label>
        <TextField
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter card name"
          style={{ width: "100%", padding: 8, marginTop: 4 }}
        />
      </div>

      {/* Values Fields */}
      <div>
        <label>Possible Values</label>

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
        const params = new URLSearchParams({
          name,
          data: enteredValues.join("\n")
        })

        if (enteredValues.length < 24){
          return;
        }

        window.location.href = `/bingo/preview?${params.toString()}`
      }}>
      Generate
      </Button>
    </div>
}