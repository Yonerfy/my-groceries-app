import React from "react";
import List from "./List";

function ShoppingCart(props) {
  //console.log(props);
  return (
    <div>
      <h1>ShoppingCart</h1>
      <button onClick={props.emptyCart}>empty cart</button>
      <List list={props.list} showQuantities={true} />
    </div>
  );
}

export default ShoppingCart;
