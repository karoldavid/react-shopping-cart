import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "./Table";
import ProductsForm from "./ProductsForm";
import { Card } from "material-ui";

class ShoppingCart extends Component {
	render() {
		const { fields, items } = this.props;

		return (
			<Card>
				<Table header={fields} items={items} />
				<ProductsForm />
			</Card>
		);
	}
}

const mapStateToProps = ({ products: { fields, items, item } }) => {
	console.log(item)
	return {
		fields,
		items,
		item
	};
};

export default connect(mapStateToProps)(ShoppingCart);
