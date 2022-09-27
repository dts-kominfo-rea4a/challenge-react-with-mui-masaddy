// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Typography } from '@mui/material';
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      {/* <Typography variant="h1">Call a Friend</Typography>
      <Typography variant="h5">Your friendly contact app</Typography> */}
      <h1>Call a Friend</h1>
      <h5>Your friendly contact app</h5>
    </>
  );
};

export default Header;
