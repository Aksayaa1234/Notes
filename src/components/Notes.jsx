import { Divider, Grid, Icon, IconButton, Paper, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

const Notes=({notes,Close})=>{
    return(
        <>
            <Grid container columns={{xs:1,sm:3,md:4,lg:5}} sx={{p:3}} spacing={5}>
                {notes.map((ele,i)=>{
                    return(
                    <Grid item xs={1} key={i}>
                        <Paper elevation={10} sx={{p:2,position:"relative",minHeight:250}}>
                            <IconButton sx={{position:"absolute",top:1,right:1}} onClick={()=>Close(i)}>
                                <CloseIcon/>
                            </IconButton>
                            <Typography fontWeight={600}>{ele.title}</Typography>
                            <Divider/>
                            <Typography>{ele.content}</Typography>
                        </Paper>
                    </Grid>)
                })}
            </Grid>
        </>
    )
}

export default Notes;