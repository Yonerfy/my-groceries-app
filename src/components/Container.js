import React from "react";
import ShoppingCart from "./ShoppingCart";
import GroceryList from "./GroceryList";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryListItem: [
        { id: 1, title: "Manzana", amount: 1 },
        { id: 2, title: "Paquete de leche", amount: 1 },
      ],
      shoppingListItems: [{ id: 1, title: "chocola", amount: 3 }],
      id: 2,
    };
    this.emptyCart = this.emptyCart.bind(this);
    this.addNewItemsToCart = this.addNewItemsToCart.bind(this);
    this.addAmountToItem = this.addAmountToItem.bind(this);
  }

  addAmountToItem(stateFound) {
    const shoppingListItems = [...this.state.shoppingListItems];
    shoppingListItems.map((item) => {
      if (stateFound.title === item.title) {
        this.setState(() => {
          item.amount = item.amount + 1;
        });
      }
      return this.setState({
        shoppingListItems,
        id: item.id,
        title: item.title,
        amount: item.amount,
      });
    });
  }

  addNewItemsToCart(e) {
    const shoppingListItems = [...this.state.shoppingListItems];
    for (let i = 0; i < shoppingListItems.length; i++) {
      if (shoppingListItems[i].title === e.target.innerText) {
        return this.addAmountToItem(shoppingListItems[i]);
      }
    }

    return this.setState((state) =>
      state.shoppingListItems.push({
        id: state.id++,
        title: e.target.innerText,
        amount: 1,
      })
    );
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
          showQuantities={true}
          emptyCart={this.emptyCart}
        />
      </div>
    );
  }
}

export default Container;
