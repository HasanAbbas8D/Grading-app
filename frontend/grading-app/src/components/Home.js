import React from 'react'
import { Typography, Button, Paper } from '@mui/material'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <Paper elevation={2} style={{display:"flex",justifyContent:"center", marginTop:"70px"}}>
      <Typography style={{maxWidth:"50%", textAlign:"center"}} variant="h4" className='text-primary'>Welcome to this grading Web App</Typography>
      </Paper>
        <Typography>
            <p className='font-weight-bold justify-center mt-4 text-center text-primary'>SignUp and Login first before using this web app</p>
              <Button title='SignUp' colors='success' variant=''>
                <Link className='btn border border-primary border-2 rounded-pill' to={'/Signup'}>
                  SignUp
                </Link>
              </Button>
              <Button title='Login' color='success' variant=''>
                <Link className='btn border border-primary border-2 rounded-pill' to={'/Login'}>
                  Login
                </Link>
              </Button>
        </Typography>
        <Paper style={{display:"flex",justifyContent:"flex-end", marginTop:"150px"}}>
      <Typography style={{maxWidth:"50%", textAlign:"end"}} variant="h5" className='text-primary'>Made by Hasan Abbas</Typography>
      </Paper>
    </div>
  )
}

export default Home