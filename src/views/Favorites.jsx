import React from 'react'
import AppBar from '../components/AppBar'
import BankDetailsTable from '../components/BankDetailsTable'
import {Typography, Button} from '@mui/material'
import { Link } from "react-router-dom";

const Favorites = () => {
  const Favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorite')) : [];
  console.log(Favorites);
  return (
    <AppBar title="Favorites">
      {Favorites.length > 0 ? (
        <BankDetailsTable bankData={Favorites} />
      ) : (
        <div className="center-col">
          <img
            src={require("../assets/noFav.webp")}
            alt="noFav"
            style={{ width: "30vh" }}
          />
          <Typography variant="h4" color="initial">
            No Favorites Found
          </Typography>
          <Link to="/all-banks">
            <Button variant="h5" color="initial">
              View All Banks
            </Button>
          </Link>
        </div>
      )}
    </AppBar>
  );
}

export default Favorites
