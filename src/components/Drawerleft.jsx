import {  Button, Drawer, IconButton, Typography, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

let items=[{icon:<HomeIcon/>,text:"Home"},{icon:<WorkspacesIcon/>,text:"About"}]

const Drawerleft=({Draw,Close})=>{
    return(
        <>
        <Drawer open={Draw} onClose={Close}>
            <List>
                {items.map((ele,i)=>{
                    return(
                    <ListItem key={i} disableGutters={true} sx={{width:250}}>
                        <ListItemButton>
                            <ListItemIcon>{ele.icon}</ListItemIcon>
                            <Typography>{ele.text}</Typography>
                        </ListItemButton>
                    </ListItem>)
                })}
            </List>
        </Drawer>
        </>
    )
}

export default Drawerleft;