import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BankDetailsTable from "../components/BankDetailsTable";
import { getBankList, getFilteredBankList } from "../redux/actions/bank";
import {
  Grid,
  FormControl,
  OutlinedInput,
  MenuItem,
  Autocomplete,
  TextField,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Search from "@mui/icons-material/Search";
import AppBar from "../components/AppBar";

const Filters = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { banks, isLoading, error } = useSelector((state) => state.bank);
  const [city, setCity] = React.useState("MUMBAI");
  const [category, setCategory] = React.useState(categories[0].value);
  const bankDataFromLocalStorage = localStorage.getItem("banks")
    ? JSON.parse(localStorage.getItem("banks"))
    : [];
  useEffect(() => {
    dispatch(getBankList(city));
  }, [city]);
  const state = useSelector((state) => state);
  console.log(state);
  const debounce = (func, wait) => {
    let timeout;
    return (val) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(val), wait);
    };
  };

  const handleSearch = debounce((value) => {
    searchBank(value);
  }, 1000);

  const searchBank = (value) => {
    const filteredBanks = bankDataFromLocalStorage.filter((bank) => {
      return bank[category].toLowerCase().includes(value.toLowerCase());
    });
    dispatch(getFilteredBankList(filteredBanks));
  };

  const redirectToDetailsPage = (bankId) => {
    const id = bankId.substring(bankId.lastIndexOf(" ") + 1);
    navigate(`/bank-details/${id}`);
  };
  return (
    <Grid
      container
      spacing={3}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}
    >
      <Grid item xs={12} md={2}>
        <FormControl variant="outlined" fullWidth>
          <Select
            value={city}
            size="small"
            color="primary"
            onChange={(e) => setCity(e.target.value)}
            input={<OutlinedInput />}
          >
            {cities.map((city) => (
              <MenuItem value={city} key={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={2}>
        <FormControl variant="outlined" fullWidth>
          <Select
            size="small"
            color="primary"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            input={<OutlinedInput />}
          >
            {categories.map((category, index) => (
              <MenuItem value={category.value} key={index}>
                {category.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={2}>
        <Autocomplete
          options={banks || []}
          color="secondary"
          size="small"
          placeholder="Search by Bank Name"
          getOptionLabel={(option) => option.bank_name + " - " + option.ifsc}
          style={{ borderRadius: "20px", color: "#000" }}
          onSelect={(e) =>
            e.target.value.length > 11 && redirectToDetailsPage(e.target.value)
          }
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search by Bank Name"
              sx={{ borderRadius: "20px", color: "#000" }}
              variant="outlined"
              color="primary"
              onKeyUp={(e) => handleSearch(e.target.value)}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default Filters;

const cities = ["MUMBAI", "DELHI", "BANGALORE", "KOLKATA", "CHITTORGARH"];

const categories = [
  {
    title: "Bank",
    value: "bank_name",
  },
  {
    title: "District",
    value: "district",
  },
  {
    title: "Branch",
    value: "branch",
  },
  {
    title: "IFSC",
    value: "ifsc",
  },
  {
    title: "State",
    value: "state",
  },
];
