import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import PlayCircle from "@mui/icons-material/PlayCircle";
import Typography from "@mui/material/Typography";

interface Props {
    onPrint: (count: number) => void
}

export default function PlayButton() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [requestPrint, setRequestPrint] = useState(false)

    useEffect( () => {
        if (requestPrint){
            setRequestPrint(false);
            //onPrint(count);
        }
    }, [open])

  const handlePrint = () => {
    setRequestPrint(true);
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={() => { setOpen(true); setCount(1); }} sx={{ width: "100%" }}>
        <PlayCircle />Play
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="xs">
        <DialogTitle>Play Bingo</DialogTitle>

        <DialogContent>
          <Typography>You have no active games using this bingo card.</Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handlePrint}>
            Start New Game
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}