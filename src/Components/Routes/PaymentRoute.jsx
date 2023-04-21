import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Payment from "../Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./ProtectedRoute"


const PaymentRoute = ({stripeApiKey}) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading === false && isAuthenticated === false) {
    return <Navigate to={"/login"} />;
  }
console.log(isAuthenticated);
  return (
    <>
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute component={Payment} />
        </Elements>
      )}
    </>
  );
};

export default PaymentRoute;
