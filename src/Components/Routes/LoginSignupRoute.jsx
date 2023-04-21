import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginSignup from "../../Components/User/LoginSignup";

const LoginSignupRoute = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      {loading === false && isAuthenticated === false ? (
        <LoginSignup />
      ) : (
        <Navigate to={"/account"} />
      )}
    </>
  );
};

export default LoginSignupRoute;
