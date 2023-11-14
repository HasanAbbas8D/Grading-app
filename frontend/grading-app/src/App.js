import React from 'react';
import { Button, Container, Paper, Typography } from '@mui/material';
import ResultCalculate from './components/ResultCalculate';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login'; // Import the Login component
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Navbar />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/ResultCalculate'} element={<ResultCalculate />} />
          <Route path={'/Signup'} element={<Signup />} />
          <Route path={'/Login'} element={<Login />} />
        </Routes>
    </Container>
  );
}

export default App;


