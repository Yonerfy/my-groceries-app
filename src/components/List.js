import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map((item) => {
          return (
            <ListItem
              title={item.title}
              key={item.id}
              addNewItemsToCart={this.props.addNewItemsToCart}
            />
          );
        })}
      </ul>
    );
  }
}

export default List;
