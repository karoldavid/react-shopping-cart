import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "./Table";
import ProductsForm from "./ProductsForm";
import { Card } from "material-ui";
import * as actions from "../actions";
import ToolBar from "./ToolBar";
import TotalTable from "./TotalTable";

class ShoppingCart extends Component {
	onRemoveIconClick = index => {
		this.props.removeItem(index);
	};

	render() {
		const { fields, items } = this.props;

		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<div style={{ width: "90vw", marginTop: 25 }}>
					<ToolBar />
					<ProductsForm />
					<Card>
						<Table
							header={fields}
							items={items}
							onClick={this.onRemoveIconClick}
						/>
					</Card>
					<div
						style={{ display: "flex", justifyContent: "flex-end" }}
					>
						<Card style={{ width: 500, marginTop: 50 }}>
							<TotalTable />
						</Card>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ products: { fields, items, item } }) => {
	return {
		fields,
		items,
		item
	};
};

export default connect(mapStateToProps, actions)(ShoppingCart);
