"use client"

import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { bingoHome } from '@/utility/bingo/navigation';
import Spacer from './Spacer';

const pages = [ 
    {
        label: "Bingo Home",
        route: bingoHome()
    }, 
];

export default function ResponsiveLayout() {
    const [open, setOpen] = React.useState(false);

    const navigate = (route: string) => {
        setOpen(false)
        window.location.href = route
    }

    return (
        <>
        <AppBar position="sticky" className="no-print">
            <Toolbar>
            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
                <IconButton
                color="inherit"
                edge="start"
                onClick={() => setOpen(true)}
                >
                <MenuIcon />
                </IconButton>
            </Box>

            <Typography variant="h6" sx={{ mr: 5 }}>
                Games
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
            {pages.map((item,idx) => (
                <Button key={idx} color="inherit" onClick={() => navigate(item.route)}>
                {item.label}
                </Button>
            ))}
            </Box>
            </Toolbar>
        </AppBar>

        {/* Mobile Drawer */}
        <Drawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box sx={{ width: 250 }} role="presentation">
            <List>
                {pages.map((item,idx) => (
                <ListItem key={idx} disablePadding>
                    <ListItemButton onClick={() => navigate(item.route)}>
                    <ListItemText primary={item.label} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            </Box>
        </Drawer>
        <Spacer height="20px"/>
        </>
    );
}
