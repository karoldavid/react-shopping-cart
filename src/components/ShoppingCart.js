import React, { Component } from "react";
import { connect } from "react-redux";
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn
} from "material-ui/Table";

class ShoppingCart extends Component {
	renderHeaderColumns = data => {
		return data.map((item, index) => {
			return <TableHeaderColumn key={index}>{item.label}</TableHeaderColumn>;
		});
	};

	render() {
		const { data } = this.props;

		return (
			<Table>
				<TableHeader>
					<TableRow>{this.renderHeaderColumns(data)}</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableRowColumn>qwertz</TableRowColumn>
						<TableRowColumn>qwertz</TableRowColumn>
						<TableRowColumn>Employed</TableRowColumn>
					</TableRow>
				</TableBody>
			</Table>
		);
	}
}

export default connect()(ShoppingCart);
