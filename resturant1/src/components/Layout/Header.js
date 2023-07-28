import React, { useContext, useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Menu, Toolbar, Typography } from '@mui/material'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../styles/HeaderStyles.css';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../images/logo.svg"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import CartStylesCss from '../styles/CartStylesCss.css'
import { Routes,Route } from 'react-router-dom';


const Header=()=> {
  const[mobileOpen,setMobileOpen]=useState(false)
  // Handle menu click
  const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  }


  //menu drawer
 // const navigate=useNavigate()
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{bgcolor:"block"}}>
       <Typography color={'goldrod'} variant='h4' component="div" sx={{flexGrow: 1,my:2}}>
       <img src={logo} alt="logo" height={'70px'} width={'200px'}></img>
           </Typography>

         <Divider></Divider>
        <ul className="mobile-navigation">
         <li>
          <Link to={'/'}>Home</Link> 
         </li> 

         <li>
          <Link to={'/menu'}>Menu</Link> 
         </li> 

         <li>
          <Link to={'/about'}>About</Link> 
         </li> 

         <li>
          <Link to={'/contact'}>Contact</Link> 
         </li> 
         <li>
          <Link to={'/cart'}>Cart</Link> 
         </li>

        </ul>       
    </Box>  
    
  )
  return (
    <>
    <Box >
       <AppBar component={'nav'} sx={{ bgcolor: "black"}}>
         <Toolbar>
           <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr: 2,
          display: {sm: "none"},}}
          onClick={handleDrawerToggle}>
             <MenuIcon></MenuIcon>

           </IconButton>

           <Typography color={'gold'} variant='h4 ' component="div" sx={{flexGrow: 1}}>
            <img src={logo} alt="logo" height={'70px'} width={'250px'}></img>
           </Typography>

    <Box sx={{display:{xs: "none",sm:"block"}}}>
        <ul className='navigation-menu'>
         <li>
          <NavLink activeClassName="active" to={'/'}>Home</NavLink> 
         </li> 

         <li>
          <NavLink to={'/menu'}>Menu</NavLink> 
         </li> 

         <li>
          <NavLink to={'/about'}>About</NavLink> 
         </li> 

         <li>
          <NavLink to={'/contact'}>Contact</NavLink> 
         </li> 
         <li>
          <NavLink to={'/cart'}>Cart</NavLink> 
         </li>

        </ul>       
    </Box>  
       </Toolbar>
       </AppBar>

    <Box component="nav">
       <Drawer variant='temporary' open={mobileOpen} 
       onClose={handleDrawerToggle}
       sx ={{display: {xs:'block',sm:"none"},"& .MuiDrawer-paper":{boxSizing: "border-box",width:"240px"}}}>
         {drawer}

       </Drawer>

        </Box>
      <Box>
        <Toolbar></Toolbar>
      </Box>
    </Box>
    </>
  )
}

export default Header