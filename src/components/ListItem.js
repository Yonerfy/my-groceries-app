import React from "react";

function ListItem(props) {
  // console.log(props);
  return props.showQuantities === true ? (
    <p onClick={props.addNewItemsToCart}>
      {" "}
      {props.title} {`Amount: ${props.amount}`}
    </p>
  ) : (
    <p onClick={props.addNewItemsToCart}> {props.title}</p>
  );
}

export default ListItem;
