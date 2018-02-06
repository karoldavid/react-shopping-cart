import React, { Component } from "react";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";
import { Provider } from "react-redux";
import store from "./store";
import { MuiThemeProvider } from "material-ui";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <MuiThemeProvider>
            <ShoppingCart />
          </MuiThemeProvider>
        </Provider>,
      </div>
    );
  }
}

export default App;
