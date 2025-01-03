import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AuthContext } from "../../contexts/authContext";
import { login } from "../../api/movies-api";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const {isAuthenticated, userName,signout} = useContext(AuthContext);
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const theme = useTheme();


  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Sign Up", path: "/movies/signUpPage" },
    { label: "Login", path: "/movies/loginPage" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Popular ", path: "/movies/popular" },
    { label: "Top Rated ", path: "/movies/topRated" },
    { label: "Now Playing ", path: "/movies/nowPlaying" },
    { label: "Recommendations ", path: "/movies/recommendations" },
    { label: "Similar Movies ", path: "/movies/similar" },
    { label: "Watchlist ", path: "/movies/watchlist" },
    
  ];

  

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const UserName= () =>{
    if (isAuthenticated) {
      return <li> Welcome, {userName}
      <Button onClick={signout} color="secondary">Sign Out</Button></li>
    }else{
      return(
      <li>
        <Button onClick={() => navigate("/movies/loginPage")} color="secondary">Login</Button>
        </li>
      );
    }
  }

  const LoggedIn = () =>{
    context.isAuthenticated ? (
      <p>
        Welcome {context.userName}! <button onClick={() => context.signout()}>Sign out</button>
      </p>
    ) : (
      <p>
        You are not logged in{" "}
        <button onClick={() => navigate('/login')}>Login</button>
      </p>
    );
  }
 
  return (
    <>
    <LoggedIn/>
   
      <AppBar position="static" color="primary">
        <Toolbar >
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Movies For You
          </Typography>
          <Typography>
          <UserName/>
          </Typography>
            
              
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>


                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              
            
        </Toolbar>
      </AppBar>
      <Offset />
      </>
    
  );
};

export default SiteHeader;