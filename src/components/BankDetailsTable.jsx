import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
  TablePagination,
  FormControl,
  OutlinedInput,
  MenuItem,
  Autocomplete,
  TextField,
  Select,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BookMark from "@mui/icons-material/Bookmark";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { Link } from "react-router-dom";


const BankDetailsTable = (props) => {
  const {bankData} = props
    const { banks, isLoading } = useSelector((state) => state.bank);
    // dispatchEvent  
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(10);      

    const handleChangePage = async (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = async (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const isFavorite = (ifsc) => {
    const favoriteBanks = JSON.parse(localStorage.getItem("favorite"));
    if (favoriteBanks) {
      return favoriteBanks.find((bank) => bank.ifsc === ifsc);
    }
    return false;
  }

  const addFavorite = (bank) => {
       if (localStorage.getItem("favorite")) {
        let favoriteBanks = JSON.parse(localStorage.getItem("favorite"));
        favoriteBanks.push(bank);
        localStorage.setItem("favorite", JSON.stringify(favoriteBanks));
  }else{
    let favoriteBanks = [];
    favoriteBanks.push(bank);
    localStorage.setItem("favorite", JSON.stringify(favoriteBanks));
  }
  }

  const removeFavorite = (ifsc) => {
    if (localStorage.getItem("favorite")) {
      const favorite = JSON.parse(localStorage.getItem("favorite"));
      const newFavorite = favorite.filter((bank) => bank.ifsc !== ifsc);
      localStorage.setItem("favorite", JSON.stringify(newFavorite));
    }else{
      alert("No Bookmark to remove")
    }
  }


  return (
    <main style={{ marginTop: "100px" }}>
      {isLoading || !bankData ? (
        <div>Loading...</div>
      ) : (
        <Paper>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Bookmark</TableCell>
                  <TableCell>Bank Id</TableCell>
                  <TableCell>Bank Name</TableCell>
                  <TableCell>IFSC Code</TableCell>
                  <TableCell>Branch</TableCell>
                  {/* <TableCell>City</TableCell> */}
                  <TableCell>District</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bankData &&
                  bankData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((bank, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>
                            <IconButton
                              onClick={() => {
                                isFavorite(bank.ifsc)
                                  ? removeFavorite(bank.ifsc)
                                  : addFavorite(bank);
                              }}
                            >
                              {isFavorite(bank.ifsc) ? (
                                <BookMark style={{ color: "red" }} />
                              ) : (
                                <BookmarkBorderOutlinedIcon />
                              )}
                            </IconButton>
                          </TableCell>

                          <TableCell>{bank.bank_id}</TableCell>

                          <TableCell>
                            <Link to={`/bank-details/${bank.ifsc}`} style={{ color: "#000" }}>
                              {bank.bank_name}
                            </Link>
                          </TableCell>
                          <TableCell>{bank.ifsc}</TableCell>
                          <TableCell>{bank.branch}</TableCell>
                          {/* <TableCell>{bank.city}</TableCell> */}
                          <TableCell>{bank.district}</TableCell>
                          <TableCell>{bank.state}</TableCell>
                          <TableCell>{bank.address}</TableCell>
                        </TableRow>
                      );
                    })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            count={Math.ceil(bankData.length / rowsPerPage)}
            rowsPerPage={rowsPerPage}
            page={page}
            component="div"
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </main>
  );
};

export default BankDetailsTable;

