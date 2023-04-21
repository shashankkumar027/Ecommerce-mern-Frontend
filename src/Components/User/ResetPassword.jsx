import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../layout/Loader";
import { clearErrors, resetPassword } from "../../actions/userAction";
import Metadata from "../layout/Metadata";

import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";

import "../../Styles/ResetPassword.scss";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { token } = useParams();

  // In react-router-dom@6 the Route component API changed significantly. There are no longer any route props (i.e. no match or history props) all replaced by React hooks. The history object was replaced by a navigate function via the useNavigate hook, and route path params are accessible via the useParams hook.

  const { error, success, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(resetPassword(token, myForm));
    console.log("Reseting Password!");
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Password Updated Successfully!");
      navigate("/login");
    }
  }, [dispatch, error, alert, success, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title={"Update Password"} />
          <div className="resetPasswordContainer">
            <div className="resetPasswordBox">
              <h2>Change Password</h2>
              <form
                className="resetPasswordForm"
                onSubmit={resetPasswordSubmit}
              >
                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="loginPassword">
                  <LockIcon />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <input
                  type="submit"
                  value={"Update"}
                  className="resetPasswordBtn"
                />
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ResetPassword;
