import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Signup= () => {
    
  return (
    <div style={{paddingInline:"500px"}}>
    <Box

    height={400}
    width={300}
    my={9}
    display="flex"
    alignItems="center"
    gap={4}
    p={7}
    sx={{ border: '5px solid grey' }}
  >
    <div style={{ paddingTop:"20px"}}>
        <Typography variant='h4' color={"dimgray"}>
            SIGNUP PAGE
        </Typography>
        <br/>
        <TextField label='Enter name' variant='outlined' /><br/><br/>
        <TextField label='Enter mobile number' variant='outlined'  /><br/><br/>
        <TextField label='Enter Email' variant='outlined' /><br/><br/>
        <TextField label='Enter Password' variant='outlined' /><br/><br/>
        
        <Button variant='contained'color='secondary' >submit</Button>
    </div>
    </Box>
    </div>
  )
}

export default Signup