import React from "react";
import { Toolbar, Typography,AppBar,IconButton, colors, Button, Switch, Box, Icon } from "@mui/material";
import {Stack} from "@mui/material";
import WavesIcon from '@mui/icons-material/Waves';
import { NavLink } from 'react-router-dom';
import {List} from "@mui/material";
import {ListItemButton} from "@mui/material";
import {ListItemText} from "@mui/material";
import {Collapse} from "@mui/material";
import { ExpandLess } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";


export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    // Navbar component wrapper
    <AppBar color="inherit">
      <Toolbar>
        <Stack spacing={2} direction="row" sx={{ display: 'inline-flex' }}>
          {/* Navbar button , WAVE icon*/}

          <NavLink to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <Button variant="text" color="inherit" size="medium" disableTouchRipple>
              <WavesIcon />
            </Button>
          </NavLink>

          {/* Navbar button , About button */}

          <NavLink to="/about" style={{ color: "inherit", textDecoration: "none" }}>
            <Button variant="text" color="inherit" size="medium">
              About
            </Button>
          </NavLink>

          {/* Navbar button , Stays button */}

          <List
            sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" , padding:'0'}}
            component="nav"
            aria-labelledby="nested-list-subheader" 
          >
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Stays" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                
                <ListItemButton>
                  <ListItemText primary="Baga village block-A" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Baga village block-B" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Baga village block-C" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Baga village block-D" />
                </ListItemButton>

              </List>
            </Collapse>
          </List>

          <NavLink to="/stays" style={{ color: "inherit", textDecoration: "none" }}>
            <Button variant="text" color="inherit" size="medium">
              Stays
            </Button>
          </NavLink>

           {/* Navbar button , Experiences button */}

          <NavLink to = "/experience" style={{color: "inherit" ,textDecoration:"none"}}>
            <Button variant="text" color="inherit" size="medium" >
              Experiences
            </Button>
          </NavLink>
        </Stack>

        {/* Navbar button , BOOK NOW */}

        <Stack direction="row" style={{ marginLeft: "auto" }}>
            <Button variant ="outlined" color = "inherit" size="medium" >Book Now</Button>
        </Stack>
      </Toolbar>
     </AppBar>
    );
}