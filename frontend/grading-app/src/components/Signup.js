import React, { useState } from 'react';
import { Button, TextField, Paper, Typography, Alert } from '@mui/material';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import Home from './ResultCalculate';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', username: '', email: '', password: '' });

  const Navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async () => {
    try {
      const response = await Axios.post('http://localhost:8000/signup', formData);
        console.log('Signup successful:', response.data);
        Navigate('/Login')
    } catch (error) {
      console.log(formData);
      console.error('Signup failed:', error);
    }
    
  };

  return (
    <Paper elevation={8} style={{ padding: '20px', maxWidth: '300px', margin: '0 auto' }}>
      <Typography variant="h5">Signup</Typography>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <Button variant='outlined'>
        <Link className='btn' to={'/Login'} onClick={handleSignup}>
        Sign Up
        </Link>
      </Button>
    </Paper>
  );
};

export default Signup;
