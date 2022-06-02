import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Navbar } from 'react-bootstrap';
import AuthContext from "../context/AuthProvider";
import { useRef, useState, useEffect, useContext } from 'react';


function Header() {
  const {auth, setAuth } = useContext(AuthContext);

  return (
    <AppBar position='sticky'>
        <Toolbar >
          <h1>JWT is{auth.type}</h1>
          <Typography>
            Fatwa
          </Typography>
          <Typography>
            Fatwa
          </Typography>
        </Toolbar>
        <Toolbar ></Toolbar>
        
    </AppBar>
  )
}

export default Header