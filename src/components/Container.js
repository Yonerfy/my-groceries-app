import React from "react";
import ShoppingCart from "./ShoppingCart";
import GroceryList from "./GroceryList";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryListItem: [
        { id: 1, title: "Manzana" },
        { id: 2, title: "Paquete de leche" },
      ],
      shoppingListItems: [],
    };
    this.emptyCart = this.emptyCart.bind(this);
    this.addNewItemsToCart = this.addNewItemsToCart.bind(this);
  }

  addNewItemsToCart(e) {
    this.setState({
      ...this.state.shoppingListItems.push({
        id: e.timeStamp,
        title: e.target.innerText,
      }),
    });
  }

  emptyCart() {
    this.setState({ shoppingListItems: [] });
  }

  render() {
    return (
      <div>
        <GroceryList
          list={this.state.groceryListItem}
          addNewItemsToCart={this.addNewItemsToCart}
        />

        <ShoppingCart
          list={this.state.shoppingListItems}
          emptyCart={this.emptyCart}
        />
      </div>
    );
  }
}

export default Container;
