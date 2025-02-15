import { AppBar, Box, Toolbar, Typography, IconButton, InputBase } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    //TODO should show left side bar menu
    const handleMenuClick = () => {
        console.log("Menu clicked!");
    };

    //TODO search through DB
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

  return (
    <Box sx={{ padding: "20px" }}>
        <AppBar position="relative" sx={{ backgroundColor: "white", borderRadius: "20px", boxShadow: 1 }}>
            <Toolbar sx={{ justifyContent: 'center' }}>
                <IconButton sx={{ p: '20px' }} aria-label="menu" onClick={handleMenuClick}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
                    RecipeVault
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '60%'}}>
                    <InputBase
                        sx={{ ml: 1 }}
                        placeholder="Search Recipes"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        inputProps={{ 'aria-label': 'search recipes' }}
                    />
                    <IconButton type="button" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
    
  )
}

export default Navbar