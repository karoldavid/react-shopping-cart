import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "./Table";
import { Card } from "material-ui";

class ShoppingCart extends Component {

	render() {
		const { data } = this.props;

		return (
			<Card>
				<Table />
			</Card>
		);
	}
}

export default connect()(ShoppingCart);
