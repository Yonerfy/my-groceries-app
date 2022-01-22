import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map((item) => {
          return (
            <li className="items-list" key={item.id}>
              <ListItem
                title={item.title}
                key={item.id}
                amount={item.amount}
                showQuantities={this.props.showQuantities}
                addNewItemsToCart={this.props.addNewItemsToCart}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
