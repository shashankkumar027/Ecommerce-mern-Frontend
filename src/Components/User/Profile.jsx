import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../layout/Loader";
import Metadata from "../layout/Metadata";
import "../../Styles/Profile.scss";

const Profile = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [navigate, user, isAuthenticated]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : user ? (
        <>
          <Metadata title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to={"/me/update"}>Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>
              <div>
                <Link to={"/orders"}>My Orders</Link>
                <Link to={"/password/update"}>Change Password</Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        navigate("/login")
      )}
    </>
  );
};

export default Profile;
