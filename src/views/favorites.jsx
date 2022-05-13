import React from 'react'
import AppBar from '../components/AppBar'
import BankDetailsTable from '../components/BankDetailsTable'
import {Typography, Button} from '@mui/material'
import { Link } from "react-router-dom";

const Favorites = () => {
  const Favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorite')) : [];
  return (
    <AppBar title="Favorites">
      <Typography variant="h3" color="primary.main" align="center" style={{ fontWeight: "bold" }}>
        Favorites
      </Typography>
        <BankDetailsTable bankData={Favorites} />
    </AppBar>
  );
}

export default Favorites
