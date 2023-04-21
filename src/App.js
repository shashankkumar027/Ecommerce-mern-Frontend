import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import axios from "axios";
import webFont from "webfontloader";
import Store from "./Store";

import "./Styles/App.scss";
import { loadUser } from "./actions/userAction";

import Header from "./Components/layout/Header";
import UserOptions from "./Components/layout/UserOptions";
import Footer from "./Components/layout/Footer";
import Home from "./Components/layout/Home";
import About from "./Components/layout/About";
import Contact from "./Components/layout/Contact";
import NotFound from "./Components/layout/NotFound";
import ProductDetails from "./Components/Product/ProductDetails";
import Products from "./Components/Product/Products";
import Search from "./Components/Product/Search";
import Profile from "./Components/User/Profile";
import UpdatePassword from "./Components/User/UpdatePassword";
import UpdateProfile from "./Components/User/UpdateProfile";
import ForgotPassword from "./Components/User/ForgotPassword";
import ResetPassword from "./Components/User/ResetPassword";
import LoginSignupRoute from "./Components/Routes/LoginSignupRoute";
import PaymentRoute from "./Components/Routes/PaymentRoute";
import ProtectedRoute from "./Components/Routes/ProtectedRoute";
import Cart from "./Components/Cart/Cart";
import Shipping from "./Components/Cart/Shipping";
import ConfirmOrder from "./Components/Cart/ConfirmOrder";
import OrderSuccess from "./Components/Cart/OrderSuccess";
import MyOrders from "./Components/Order/MyOrders";
import OrderDetails from "./Components/Order/OrderDetails";
import Dashboard from "./Components/Admin/Dashboard";
import ProductList from "./Components/Admin/ProductList";
import NewProduct from "./Components/Admin/NewProduct";
import UpdateProduct from "./Components/Admin/UpdateProduct";
import OrderList from "./Components/Admin/OrderList";
import ProcessOrder from "./Components/Admin/ProcessOrder";
import UserList from "./Components/Admin/UserList";
import UpdateUser from "./Components/Admin/UpdateUser";
import ProductReviews from "./Components/Admin/ProductReviews";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    Store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/login" element={<LoginSignupRoute />} />
        <Route
          exact
          path="/account"
          element={<ProtectedRoute component={Profile} />}
        />
        <Route
          exact
          path="/me/update"
          element={<ProtectedRoute component={UpdateProfile} />}
        />
        <Route exact path="/password/update" element={<UpdatePassword />} />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="/shipping"
          element={<ProtectedRoute component={Shipping} />}
        />
        <Route
          exact
          path="/order/confirm"
          element={<ProtectedRoute component={ConfirmOrder} />}
        />
        <Route
          exact
          path="/process/payment"
          element={<PaymentRoute stripeApiKey={stripeApiKey} />}
        />
        <Route
          exact
          path="/success"
          element={<ProtectedRoute component={OrderSuccess} />}
        />
        <Route
          exact
          path="/orders"
          element={<ProtectedRoute component={MyOrders} />}
        />
        <Route
          exact
          path="/order/:id"
          element={<ProtectedRoute component={OrderDetails} />}
        />
        <Route
          exact
          path="/admin/dashboard"
          element={<ProtectedRoute isAdmin={true} component={Dashboard} />}
        />

        <Route
          exact
          path="/admin/products"
          element={<ProtectedRoute isAdmin={true} component={ProductList} />}
        />

        <Route
          exact
          path="/admin/product"
          element={<ProtectedRoute isAdmin={true} component={NewProduct} />}
        />

        <Route
          exact
          path="/admin/product/:id"
          element={<ProtectedRoute isAdmin={true} component={UpdateProduct} />}
        />

        <Route
          exact
          path="/admin/orders"
          element={<ProtectedRoute isAdmin={true} component={OrderList} />}
        />

        <Route
          exact
          path="/admin/order/:id"
          element={<ProtectedRoute isAdmin={true} component={ProcessOrder} />}
        />

        <Route
          exact
          path="/admin/users"
          element={<ProtectedRoute isAdmin={true} component={UserList} />}
        />

        <Route
          exact
          path="/admin/user/:id"
          element={<ProtectedRoute isAdmin={true} component={UpdateUser} />}
        />

        <Route
          exact
          path="/admin/reviews"
          element={<ProtectedRoute isAdmin={true} component={ProductReviews} />}
        />

        <Route exact path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
