import React, { Component } from "react";
import { connect } from "react-redux";
import { RaisedButton, Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui";
import * as actions from "../actions";

class ToolBar extends Component {
  resetCart = () => {
    this.props.resetCart();
  };

  openProductForm = () => {
    this.props.openModal();
  };

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Your cart" />
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton secondary label="Clear Cart" onClick={this.resetCart} />
          <RaisedButton
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
