import React from "react";
import { Toolbar, Typography,AppBar,IconButton, colors, Button } from "@mui/material";
import {Divider} from "@mui/material";


export const Navbar = () => {
    return (
        <Toolbar>
            <Button variant = "text" color = "inherit" size ="large">Home</Button>
            <Divider variant="middle"/>
        </Toolbar>

    )
}