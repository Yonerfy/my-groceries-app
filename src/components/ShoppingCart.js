import React from "react";
import List from "./List";

function ShoppingCart(props) {
  return (
    <div className="shopping-card-div">
      <h1 className="primary-header">ShoppingCart</h1>
      <button className="primary-btn" onClick={props.emptyCart}>
        empty cart
      </button>
      <List list={props.list} showQuantities={props.showQuantities} />
    </div>
  );
}

export default ShoppingCart;
