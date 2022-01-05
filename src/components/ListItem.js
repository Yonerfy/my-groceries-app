import React from "react";

function ListItem(props) {
  return <p onClick={props.addNewItemsToCart}> {props.title}</p>;
}

export default ListItem;
