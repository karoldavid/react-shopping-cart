import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "./Table";
import { Card } from "material-ui";

class ShoppingCart extends Component {

	render() {
		const { fields } = this.props;

		return (
			<Card>
				<Table data={fields}/>
			</Card>
		);
	}
}

export default connect()(ShoppingCart);
