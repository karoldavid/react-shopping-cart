export const validate = (values, props) => {
	const errors = {};

	const requiredFields = props.fields.reduce((previous, field) => {
		if (field.required) {
			return [ ...previous, field.name];
		}
		return previous;
	}, []);

//	console.log(props.fields)

	requiredFields.forEach((name) => {
		const index = props.fields.findIndex(field => field.name === name);
		if (!values[name]) {
			errors[name] = `${props.fields[index].label} is required`;
		}
	});

	if (values.name && (values.name.length < 3 || values.name > 32)) {
		errors.name =
			"Name cannot be shorter than three characters or longer than 32";
	}

	if (
		values.comments &&
		(values.comments.length < 10 || values.comments > 32)
	) {
		errors.comments =
			"Comments cannot be shorter than ten characters or longer than 32";
	}

	if (values.price && (values.price < 0 || values.price > 1000000)) {
		errors.price = "pRICE must be a value between 0 and 1000000";
	}

	if (values.tax && (values.tax < 0 || values.tax > 100)) {
		errors.tax = "Tax must be a value between 0 and 100";
	}

	return errors;
};
