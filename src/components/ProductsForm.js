import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { Dialog, FlatButton } from "material-ui";
import FormFields from "./FormFields";
import * as actions from "../actions";

class ProductsForm extends Component {
	state = {
		open: false
	};
	onFormSubmit = params => {
		this.props.addItem(params);
		this.props.closeModal();
		this.props.reset();
	};

	render() {
		const { handleSubmit, fields } = this.props;
		const actions = [
			<FlatButton
				label="Cancel"
				primary
				onClick={this.props.closeModal}
			/>,
			<FlatButton
				type="submit"
				label="Submit"
				primary
				onClick={handleSubmit(this.onFormSubmit)}
			/>
		];

		return (
			<Dialog
				title="Add New Product"
				actions={actions}
				modal={true}
				contentStyle={{
					width: 350,
					maxWidth: "none"
				}}
				open={this.props.open}
			>
				<form>
					<FormFields
						fields={fields.filter(el => el.name !== "totalItem")}
					/>
				</form>
			</Dialog>
		);
	}
}

const mapStateToProps = ({ products: { fields }, modal: { open } }) => {
	return {
		fields,
		open
	};
};

export default reduxForm({
	form: "productsForm"
})(connect(mapStateToProps, actions)(ProductsForm));
