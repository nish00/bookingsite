import React from "react";
import { Toolbar, Typography,AppBar,IconButton, colors, Button, Switch, Box, Icon } from "@mui/material";
import {Stack} from "@mui/material";
import WavesIcon from '@mui/icons-material/Waves';

export const Navbar = () => {
    return (
        <AppBar color="inherit">
        <Toolbar>
        <Stack spacing={1} direction="row">
        <Button variant="text" color="inherit" size="medium" disableTouchRipple>
            <WavesIcon />
          </Button>
          <Button variant="text" color="inherit" size="medium" >
            About
          </Button>
          <Button variant="text" color="inherit" size="medium" >
            Stays
          </Button>
          <Button variant="text" color="inherit" size="medium" >
            Experience
          </Button>
        </Stack>
        <Stack direction="row" style={{ marginLeft: "auto" }}>
            <Button variant ="outlined" color = "inherit" size="medium" >Book Now</Button>
        </Stack>
      </Toolbar>
     </AppBar>
      
    );
}