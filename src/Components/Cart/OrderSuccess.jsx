import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Typography } from "@material-ui/core";
import MetaData from "../layout/Metadata";
import { Link } from "react-router-dom";
import "../../Styles/OrderSuccess.scss";

const OrderSuccess = () => {
  return (
    <>
      <MetaData title={"Order Placed Successfully."} />
      <div className="orderSuccess">
        <CheckCircleIcon />
        <Typography>Your Order has been Placed Successfully.</Typography>
        <Link to={"/orders"}>View Orders</Link>
      </div>
    </>
  );
};

export default OrderSuccess;