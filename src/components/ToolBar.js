import React, { Component } from "react";
import { connect } from "react-redux";
import { RaisedButton, Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui";
import * as actions from "../actions";
import { transparent } from "material-ui/styles/colors";

class ToolBar extends Component {
  resetCart = () => {
    this.props.resetCart();
  };

  openProductForm = () => {
    this.props.openModal();
  };

  render() {
    return (
      <Toolbar style={{ backgroundColor: transparent, padding: 0 }}>
        <ToolbarGroup>
          <ToolbarTitle style={{ fontWeight: "bold", color: "#000000", fontSize: 30 }} text="Your cart" />
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton secondary label="Clear Cart" onClick={this.resetCart} />
          <RaisedButton style={{margin: 0}}
            primary
            label="Add New Product"
            onClick={this.openProductForm}
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default connect(null, actions)(ToolBar);
