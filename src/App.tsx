import React from 'react';
import { Navbar } from './components/Navbar';
import { Box } from '@mui/material';


function App() {
  return (
    <>
    <Navbar/>
      <Box
        component="img"
        sx={{
          height: '100vh',
          width: '100vw',
          objectFit: 'cover',~
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
      />
    </>
  );
}

export default App;
