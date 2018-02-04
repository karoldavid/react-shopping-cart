import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import FormFields from "./FormFields";
import { RaisedButton } from "material-ui";

class ProductsForm extends Component {
	onFormSubmit = params => {
		alert(`Form Data: ${JSON.stringify(params)}`);
		this.props.reset();
	};

	render() {
		const { handleSubmit, fields, errors } = this.props;

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

export default reduxForm({
	form: "productsForm"
})(connect()(ProductsForm));
