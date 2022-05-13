import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import BankDetailsTable from '../components/BankDetailsTable'
import {
  Typography
} from "@mui/material";
import AppBar from "../components/AppBar";
import Filters from '../components/Filters';

const AllBanks = () => {
    const { banks, isLoading, error } = useSelector((state) => state.bank);
  return (
    <AppBar>
      <Typography
        variant="h3"
        color="primary.main"
        align="center"
        style={{ fontWeight: "bold" }}
      >
        Bank Details
      </Typography>
      <Filters />
      <BankDetailsTable bankData={banks} />
    </AppBar>
  );
}

export default AllBanks

