import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{flexGrow:1}}>
        <AppBar position='static' color='error'>
          <Toolbar>
            <Typography variant='h4' component="div" sx={{flexGrow:1}}>A4 RESTAURANT</Typography>&nbsp;&nbsp;
            <div style={{marginLeft:"850px"}}>
            <Button variant='contained'><Link to={'/Login'} style={{textDecoration:'none', color:'white'}}>Login</Link></Button>&nbsp;&nbsp;
            <Button variant='contained'><Link to={'/Signup'} style={{textDecoration:'none', color:'white'}}>Signup</Link></Button>
            </div>
          </Toolbar>
        </AppBar>
        </Box>
    </div>
  )
}

export default Navbar