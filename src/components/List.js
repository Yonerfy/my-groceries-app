import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    // console.log(this.props.list);
    return (
      <ul>
        {this.props.list.map((item) => {
          return (
            <ListItem
              title={item.title}
              key={item.id}
              amount={item.amount}
              showQuantities={this.props.showQuantities}
              addNewItemsToCart={this.props.addNewItemsToCart}
            />
          );
        })}
      </ul>
    );
  }
}

export default List;
