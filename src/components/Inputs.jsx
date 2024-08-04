import { Box, Dialog, Typography, Divider, TextField, IconButton, Button } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

const Inputs=({Input,Close})=>{
    return(
        <>
            <Dialog open={Input} >
                <Box sx={{width:350,p:2}}>
                    <IconButton sx={{position:"absolute",right:1,top:1}} onClick={Close}><CloseIcon/></IconButton>
                    <Typography variant="h6">Add Notes</Typography>
                    <Divider  sx={{mt:1,mb:1}} />
                    <TextField variant="outlined" label="title" sx={{mb:2}} fullWidth={true}></TextField>
                    <TextField variant="outlined" label="content" sx={{mb:2}} fullWidth={true} minRows={"5"} multiline={true}></TextField>
                    <Button variant="contained"><Typography>Save</Typography></Button>
                </Box>
            </Dialog>
        </>
    )
}

export default Inputs;