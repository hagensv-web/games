import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from "@mui/material";
import { Print } from "@mui/icons-material";

interface Props {
    onPrint: (count: number) => void
}

export default function PrintButton({ onPrint }: Props) {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [requestPrint, setRequestPrint] = useState(false)

    useEffect( () => {
        if (requestPrint){
            setRequestPrint(false);
            onPrint(count);
        }
    }, [open])

  const handlePrint = () => {
    setRequestPrint(true);
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={() => { setOpen(true); setCount(1); }} sx={{ width: "100%" }}>
        <Print />Print
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="xs">
        <DialogTitle>Print Bingo Cards</DialogTitle>

        <DialogContent>
          <TextField
            label="Number of Randomized Cards"
            type="number"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value) || 1)}
            slotProps={{
                htmlInput: { min: 1, max: 200 }
            }}
            fullWidth
            sx={{ mt: 1 }}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handlePrint}>
            Print
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}