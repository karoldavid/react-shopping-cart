import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import FormFields from "./FormFields";
import { RaisedButton } from "material-ui";
import * as actions from "../actions";

class ProductsForm extends Component {
	onFormSubmit = params => {
		this.props.addItem(params);
		this.props.reset();
	};

	render() {
		const { handleSubmit, fields } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onFormSubmit)}>
				<FormFields fields={fields} />

				<RaisedButton
					primary
					labelColor="#FFFFFF"
					type="submit"
					label="Submit"
					className={"submit-button"}
					onClick={this.onSubmitClick}
				/>
			</form>
		);
	}
}

const mapStateToProps = ({ products: { fields } }) => {
	return {
		fields
	};
};

export default reduxForm({
	form: "productsForm"
})(connect(mapStateToProps, actions)(ProductsForm));
