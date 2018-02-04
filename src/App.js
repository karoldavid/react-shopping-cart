import React, { Component } from "react";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";
import { CART_ITEM_FIELDS } from "./utils/consts"

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingCart fields={CART_ITEM_FIELDS}/
        >
      </div>
    );
  }
}

export default App;
