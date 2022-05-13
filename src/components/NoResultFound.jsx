import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NoResultFound = () => {
  return (
    <div className="center-col">
      <img
        src={require("../assets/noFav.webp")}
        alt="noFav"
        style={{ width: "30vh" }}
      />
      <Typography variant="h5" color="initial">
        Not Found
      </Typography>
      <Link to="/all-banks">
        <Button variant="h5" color="initial">
          View All Banks
        </Button>
      </Link>
    </div>
  );
};

export default NoResultFound;
