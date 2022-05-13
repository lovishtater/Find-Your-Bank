import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  IconButton,
  LinearProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import BookMark from "@mui/icons-material/Bookmark";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { Link } from "react-router-dom";
import NoResultFound from "./NoResultFound";
import { addFavorite, removeFavorite } from "../redux/actions/favorites";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.secondary.light,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const BankDetailsTable = (props) => {
  const dispatch = useDispatch();
  const { bankData } = props;
  const { isLoading } = useSelector((state) => state.bank);
  const { favoriteBanks } = useSelector((state) => state.favorite);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = async (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = async (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <main style={{ marginTop: "30px" }}>
      <Paper sx={{ margin: "0 auto", maxWidth: "85vw", minHeight: "50vh" }}>
        {isLoading || !bankData ? (
          <LinearProgress color="secondary" />
        ) : (
          <>
            <TableContainer>
              {bankData.length > 0 ? (
                <Table size="small">
                  <TableHead>
                    <TableRow style={{ backgroundColor: "#f5f5f5" }}>
                      <TableCell>Saved</TableCell>
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
                    {bankData
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((bank, index) => {
                        const isBookmarked = favoriteBanks
                          .map((bank) => bank.ifsc)
                          .includes(bank.ifsc);
                        return (
                          <StyledTableRow key={index}>
                            <TableCell>
                              <IconButton
                                onClick={() => {
                                  isBookmarked
                                    ? dispatch(removeFavorite(bank))
                                    : dispatch(addFavorite(bank));
                                }}
                              >
                                {isBookmarked ? (
                                  <BookMark style={{ color: "red" }} />
                                ) : (
                                  <BookmarkBorderOutlinedIcon />
                                )}
                              </IconButton>
                            </TableCell>
                            <TableCell>{bank.bank_id}</TableCell>
                            <TableCell>
                              <Link
                                to={`/bank-details/${bank.ifsc}`}
                                style={{ color: "#000" }}
                              >
                                {bank.bank_name}
                              </Link>
                            </TableCell>
                            <TableCell>{bank.ifsc}</TableCell>
                            <TableCell>{bank.branch}</TableCell>
                            {/* <TableCell>{bank.city}</TableCell> */}
                            <TableCell>{bank.district}</TableCell>
                            <TableCell>{bank.state}</TableCell>
                            <TableCell>{bank.address}</TableCell>
                          </StyledTableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              ) : (
                <NoResultFound />
              )}
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
          </>
        )}
      </Paper>
    </main>
  );
};

export default BankDetailsTable;
