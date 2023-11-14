import React, {useState} from 'react'
import { Button, Alert, TextField, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    
    const [formData, setFormData] = useState({ email: '', password: '' });
//   const [signupped, setSignupped] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const data = await axios.post('http://localhost:8000/login', formData);
    console.log("Login Sucessfully:", data.data)
    } catch (error) {
      console.log("Login failed", error);
    }
    console.log(formData);
  };

  return (
    <Paper elevation={8} style={{ padding: '20px', maxWidth: '300px', margin: '0 auto' }}>
      <Typography variant="h5">Login</Typography>
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
      <Button variant="outlined" color="primary">
        <Link className='btn' to={'/ResultCalculate'} onClick={handleLogin}>
        Login
        </Link>
      </Button>
    </Paper>
  )
}

export default Login