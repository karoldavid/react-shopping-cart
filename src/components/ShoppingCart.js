import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "./Table";
import ProductsForm from "./ProductsForm";
import { Card } from "material-ui";

class ShoppingCart extends Component {
	render() {
		const { fields } = this.props;

		return (
			<Card>
				<Table data={fields} />
				<ProductsForm />
			</Card>
		);
	}
}

const mapStateToProps = ({ products: { fields, items } }) => {
	console.log(items);
	return {
		fields,
		items
	};
};

export default connect(mapStateToProps)(ShoppingCart);
