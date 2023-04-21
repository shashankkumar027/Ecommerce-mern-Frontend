import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Metadata from "../layout/Metadata";
import "../../Styles/Search.scss";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    navigate(keyword.trim() ? `/products/${keyword}` : `/products`);
  };

  return (
    <>
      <Metadata title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value={"Search"} />
      </form>
    </>
  );
};

export default Search;

//  The history object was replaced by a navigate function in react-router-dom version 6, accessed via the useNavigate hook
