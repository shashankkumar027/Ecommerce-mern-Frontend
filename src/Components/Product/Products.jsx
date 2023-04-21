import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "react-js-pagination";
import Typography from "@material-ui/core/Typography";
import { Slider } from "@material-ui/core";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader";
import Metadata from "../layout/Metadata";
import ProductCard from "../layout/ProductCard";
import "../../Styles/Products.scss";

const categories = [
  "Laptop",
  "Footware",
  "Top",
  "Bottom",
  "Attire",
  "Camera",
  "SmartPhone",
];

const Products = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const {
    loading,
    error,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);
  const { keyword } = useParams();

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, error, alert, keyword, currentPage, price, category, ratings]);

  let count = filteredProductsCount;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="product-page">
            {/* self made upper div */}
            <Metadata title="PRODUCTS -- ECOMMERCE" />
            <h2 className="productsHeading">Products</h2>

            <div className="products">
              {products &&
                products.map((product) => (
                  <ProductCard product={product} key={product._id} />
                ))}
            </div>

            <div className="filterBox">
              <Typography>Price</Typography>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay={"auto"}
                aria-labelledby="range-slider"
                min={0}
                max={25000}
              />
              <Typography>Categories</Typography>
              <ul className="categoryBox">
                {categories.map((category) => (
                  <li
                    className="category-link"
                    key={category}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>

              <fieldset>
                <Typography component={"legend"}>Ratings Above</Typography>
                <Slider
                  value={ratings}
                  valueLabelDisplay={"auto"}
                  onChange={(e, newRating) => {
                    setRatings(newRating);
                  }}
                  aria-labelledby="continous-slider"
                  min={0}
                  max={5}
                />
              </fieldset>
            </div>

            {resultPerPage < count && (
              <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText={"Next"}
                  prevPageText={"Prev"}
                  firstPageText={"1st"}
                  lastPageText={"Last"}
                  itemClass={"page-item"}
                  linkClass={"page-link"}
                  activeClass={"pageItemActive"}
                  activeLinkClass={"pageLinkActive"}
                />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Products;
