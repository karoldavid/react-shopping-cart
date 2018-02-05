import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "./Table";
import ProductsForm from "./ProductsForm";
import { Card } from "material-ui";
import * as actions from "../actions";

class ShoppingCart extends Component {
	onRemoveIconClick = index => {
		this.props.removeItem(index);
	};
	render() {
		const { fields, items } = this.props;

		return (
			<Card>
				<Table
					header={fields}
					items={items}
					onClick={this.onRemoveIconClick}
				/>
				<ProductsForm />
			</Card>
		);
	}
}

const mapStateToProps = ({ products: { fields, items, item } }) => {
	console.log(item);
	return {
		fields,
		items,
		item
	};
};

export default connect(mapStateToProps, actions)(ShoppingCart);
