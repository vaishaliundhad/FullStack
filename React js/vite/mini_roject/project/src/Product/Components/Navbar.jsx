import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Button color="inherit">
                <NavLink to="/">Home</NavLink>
            </Button>
            <Button color="inherit">
                <NavLink to="/shop">Shop</NavLink>
            </Button>
            <Button color="inherit">
                <NavLink to="/profile">Profile</NavLink>
            </Button>
            <Button color="inherit">
                <NavLink to="/cart">Cart</NavLink>
            </Button>
            <Button color="inherit">
                <NavLink to="/wishlist">Wishlist</NavLink>
            </Button>
            <Button color="inherit">
                <NavLink to="/login">Login</NavLink>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
  );
};

export default Navbar;