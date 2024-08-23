import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

const Navbar=({OpenD,OpenI})=>{
    return(
        <>
        <AppBar position="sticky">
            <Toolbar>
                <IconButton onClick={OpenD} >
                <SpeakerNotesIcon fontSize="large"></SpeakerNotesIcon>
                </IconButton>
                <Typography sx={{pl:3}} variant="h5" flexGrow={1}>Notesapp</Typography>
                <Button variant="outlined" sx={{bgcolor:"rgb(239, 239, 81)","&:hover":{bgcolor:"rgb(255, 255, 0)"}}} onClick={OpenI}>
                    <Typography>Add</Typography>
                </Button>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar;