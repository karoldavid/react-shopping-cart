import React, { Component } from "react";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingCart />
      </div>
    );
  }
}

export default App;
