import React from 'react'
import {  AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { kullaniciSil } from '../features/yetkiSlice';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {email}= useSelector((state)=>state.yetkiSlice)
  const handleLogout=()=>{
    dispatch(kullaniciSil())
    navigate("/login")
  }



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
      
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UYSALCORP | News
          </Typography>
          {
            email? (<Button onClick={handleLogout} color="inherit">Logout</Button>) : (<Button color="inherit">Sign In</Button>)
          }
          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar