import React from "react";

function ListItem(props) {
  return props.showQuantities === true ? (
    <div onClick={props.addNewItemsToCart}>
      <span> {props.title}</span>
      <span>{`Amount: ${props.amount}`}</span>
    </div>
  ) : (
    <div onClick={props.addNewItemsToCart}>
      <span>{props.title} </span>
    </div>
  );
}

export default ListItem;
