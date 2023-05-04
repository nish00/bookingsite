import React from "react";
import { Toolbar, Typography,AppBar,IconButton, colors, Button, Switch, Box, Icon } from "@mui/material";
import {Stack} from "@mui/material";
import WavesIcon from '@mui/icons-material/Waves';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <AppBar color="inherit">
        <Toolbar>
        <Stack spacing={1} direction="row">
          <NavLink to = "/" style={{color: "inherit" ,textDecoration:"none"}}>
            <Button variant="text" color="inherit" size="medium" disableTouchRipple>
              <WavesIcon />
            </Button>
          </NavLink>
          <NavLink to = "/about" style={{color: "inherit" ,textDecoration:"none"}}>
            <Button variant="text" color="inherit" size="medium" >
              About
            </Button>
          </NavLink>
          <NavLink to = "/stays" style={{color: "inherit" ,textDecoration:"none"}}>
            <Button variant="text" color="inherit" size="medium" >
              Stays
            </Button>
          </NavLink>
          <NavLink to = "/experience" style={{color: "inherit" ,textDecoration:"none"}}>
            <Button variant="text" color="inherit" size="medium" >
              Experience
            </Button>
          </NavLink>
        </Stack>
        <Stack direction="row" style={{ marginLeft: "auto" }}>
            <Button variant ="outlined" color = "inherit" size="medium" >Book Now</Button>
        </Stack>
      </Toolbar>
     </AppBar>
      
    );
}