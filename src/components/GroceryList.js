import React from "react";
import InputField from "./InputField";
import List from "./List";

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryListItem: "",
      id: 3,
    };
  }

  handlerTextBox = (e) => {
    this.setState({ groceryListItem: e.target.value });
  };

  handlerClick = (e) => {
    if (e.target.previousElementSibling.value === "") return;

    this.setState((state, props) =>
      props.list.push({
        id: state.id++,
        title: (state.groceryListItem = e.target.previousElementSibling.value),
      })
    );
    this.setState({ groceryListItem: "" });
  };

  render() {
    return (
      <div>
        <h1>GroceryList</h1>
        <InputField
          groceryListItem={this.state.groceryListItem}
          handlerTextBox={this.handlerTextBox}
          handlerClick={this.handlerClick}
        />
        <List
          list={this.props.list}
          addNewItemsToCart={this.props.addNewItemsToCart}
        />
      </div>
    );
  }
}

export default GroceryList;
