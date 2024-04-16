import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

const Dash2 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='warning'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            A4 RESTAURANT
          </Typography>
          <Button color="inherit"><Link to={'/Signup'} style={{textDecoration:'none', color:'white'}}>Signup</Link></Button>
          <Button color="inherit"><Link to={'/Login'} style={{ textDecoration: 'none', color: 'white' }}>Login</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Dash2