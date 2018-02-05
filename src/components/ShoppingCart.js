import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "./Table";
import ProductsForm from "./ProductsForm";
import { Card } from "material-ui";
import * as actions from "../actions";
import ToolBar from "./ToolBar";
import TotalTable from "./TotalTable";

class ShoppingCart extends Component {
	componentDidMount() {
		this.props.getTax(this.props.items);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.items !== this.props.items)
		this.props.getTax(nextProps.items);
	}

	onRemoveIconClick = index => {
		this.props.removeItem(index);
	};

	render() {
		const { fields, items, taxes } = this.props;

		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center"
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
						<Card style={{ width: 300, marginTop: 25 }}>
							<TotalTable data={taxes} />
						</Card>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ products: { fields, items }, taxes }) => {
	return {
		fields,
		items,
		taxes
	};
};

export default connect(mapStateToProps, actions)(ShoppingCart);
