import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import manImg from "../assets/manPointingBankDetails.png";
import manImg1 from "../assets/businessman-pointing-down.webp";
import AppBar from "../components/AppBar";
import NoResultFound from "../components/NoResultFound";

const BankDetail = () => {
  const { ifscCode } = useParams();
  const normalbank = localStorage.getItem("banks")
    ? JSON.parse(localStorage.getItem("banks"))
    : [];
  const favoriteBanks = localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite"))
    : [];
  const unionBanks = normalbank.concat(favoriteBanks);
  const bank = unionBanks.filter((bank) => bank.ifsc === ifscCode)[0];

  return (
    <AppBar>
      <Card style={{ margin: "0 auto", maxWidth: "80%", marginTop: "2rem" }}>
        {bank ? (
          <Grid container>
            <Grid item sm={6} sx={{ display: { xs: "block", sm: "none" } }}>
              <img
                src={manImg1}
                alt="Man pointing towards Bank Details"
                width="100%"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardContent
                sx={{
                  padding: (theme) =>
                    `${theme.spacing(3.25, 5.75, 6.25)} !important`,
                }}
              >
                <Typography variant="h6" sx={{ marginBottom: 3 }}>
                  {bank.bank_name}
                </Typography>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" sx={{ fontSize: "18px" }}>
                      Bank ID
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: 3 }}>
                      {bank.bank_id}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
                    <Typography variant="h6" sx={{ fontSize: "18px" }}>
                      IFSC Code
                    </Typography>
                    <Typography variant="body2">{bank.ifsc}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
                    <Typography variant="h6" sx={{ fontSize: "18px" }}>
                      Branch:
                    </Typography>
                    <Typography variant="body2">{bank.branch}</Typography>
                  </Grid>
                  <Grid item sm={6} sx={{ marginBottom: 3 }}>
                    <Typography variant="h6" sx={{ fontSize: "18px" }}>
                      District:
                    </Typography>
                    <Typography variant="body2">{bank.district}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ fontSize: "18px" }}>
                      Address:
                    </Typography>
                    <Typography variant="body2">{bank.address}</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={4}></Grid>
              </CardContent>
            </Grid>
            <Grid item sm={6} sx={{ display: { xs: "none", sm: "block" } }}>
              <img src={manImg} alt="Man pointing towards Bank Details" />
            </Grid>
          </Grid>
        ) : (
          <NoResultFound />
        )}
      </Card>
    </AppBar>
  );
};

export default BankDetail;
