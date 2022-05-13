import React from "react";
import AppBar from "../components/AppBar";
import BankDetailsTable from "../components/BankDetailsTable";
import { Typography } from "@mui/material";

const Favorites = () => {
  const favoriteBanks = localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite"))
    : [];

  return (
    <AppBar title="Favorites">
      <Typography
        variant="h3"
        color="primary.main"
        align="center"
        style={{ fontWeight: "bold" }}
      >
        Favorite Banks
      </Typography>
      <BankDetailsTable bankData={favoriteBanks} />
    </AppBar>
  );
};

export default Favorites;
