import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import BankDetailsTable from '../components/BankDetailsTable'
import {
  Box,
  Typography
} from "@mui/material";
import AppBar from "../components/AppBar";
import Filters from '../components/Filters';

const AllBanks = () => {
    const { banks, isLoading, error } = useSelector((state) => state.bank);
  return (
    <AppBar>
      <Box display="flex" justifyContent="center" alignItems="center">
      <Typography
        variant="h3"
        color="primary.main"
        align="center"
        style={{ fontWeight: "bold" }}
      >
        Bank Details
      </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
      <Typography variant="h5" color="initial" style={{ marginBottom: "2rem" }}>
        Filter by city or category
      </Typography>
      </Box>
      <Filters />
      <BankDetailsTable bankData={banks} />
    </AppBar>
  );
}

export default AllBanks

