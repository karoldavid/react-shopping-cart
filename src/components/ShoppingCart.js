import React, { Component } from "react";
import { connect } from "react-redux";

class ShoppingCart extends Component {

	
	render() {
		console.log(this.props.data)
		return <div>ShoppingCart Component!</div>;
	}
}

export default connect()(ShoppingCart);
