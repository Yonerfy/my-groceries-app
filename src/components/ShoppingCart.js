import React from "react";
import List from "./List";

function ShoppingCart(props) {
  return (
    <div>
      <h1>ShoppingCart</h1>
      <button onClick={props.emptyCart}>empty cart</button>
      <List list={props.list} />
    </div>
  );
}

export default ShoppingCart;
