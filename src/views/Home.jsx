import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import AppBar from "../components/AppBar";

const Home = () => {
  return (
    <AppBar>
      <Box>
        <Grid container>
          <Grid
            item
            xs={10}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: "80%",
            }}
          >
            <Typography
              variant="h2"
              color="primary.main"
              sx={{ fontWeight: 600, marginBottom: 1.5 }}
            >
              EasyBank.com
            </Typography>
            <Typography variant="h6">
              One-Stop Solution for Bank Details where you can find all the
              details of Banks in India.
            </Typography>
            <Link to="/all-banks">
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ marginTop: 2.5 }}
              >
                Get Started
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={require("../assets/bankLoc.png")}
              alt="Illustration"
              style={{ width: "100%" }}
              className="updown"
            />
          </Grid>
        </Grid>
      </Box>
    </AppBar>
  );
};

export default Home;
