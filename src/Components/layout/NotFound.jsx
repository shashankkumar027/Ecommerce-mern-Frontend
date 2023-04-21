import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import "../../Styles/NotFound.scss"

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <ErrorIcon />
      <Typography>Page Not Found</Typography>
      <Typography>404</Typography>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default NotFound;
