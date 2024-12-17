import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const Navbar = () => {

  const cardDatalength = useSelector((state) => state.cart)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <div className="flex  items-center justify-around">

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
              <NavLink to="/login">Login</NavLink>
            </Button>
          </Toolbar>
          <div className="flex gap-8">
            <div>
              <NavLink to="/cart">
                <FaShoppingCart />
                <span className="absolute top-[12px] ml-2 text-center bg-red-600 rounded-full h-4 w-4 text-xs  flex justify-center items-center border border-white">{cardDatalength.length}</span>
              </NavLink>
            </div>
            

            <NavLink to="/wishlist">
            <FaHeart/>
            </NavLink>
            
          </div>
        </div>
      </AppBar>
    </Box>
  );
};  

export default Navbar;