import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Error from "../assets/404.png";
import AppBar from "../components/AppBar";

const ErrorPage = () => {
  return (
    <AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <img
          src={Error}
          alt="404"
          style={{ width: "400px", margin: "0 auto", display: "block" }}
        />

        <Link to="/">
          <Button variant="outlined" color="primary">
            Go to Home
          </Button>
        </Link>
      </Box>
    </AppBar>
  );
};

export default ErrorPage;
