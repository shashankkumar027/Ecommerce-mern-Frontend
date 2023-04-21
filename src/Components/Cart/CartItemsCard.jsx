import React from "react";
import { Link } from "react-router-dom";

import "../../Styles/CartItemsCard.scss";

const CartItemsCard = ({ item, deleteCartItems }) => {
  return (
    <>
      <div className="cartItemCard">
        <img src={item.image} alt={item.name} />
        <div>
          <Link to={`/product/${item.product}`}>{item.name}</Link>
          <span>{`Price: ${item.price}`}</span>
          <p onClick={()=>deleteCartItems(item.product)}>Remove</p>
        </div>
      </div>
    </>
  );
};

export default CartItemsCard;
