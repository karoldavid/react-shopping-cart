import { TAX_GET } from "../actions/types";

const INITIAL_STATE = {
	netTotal: 0,
	taxTotal: 0,
	taxCols: {},
	grandTotal: 0
};

const calculateTax = item => {
	return parseInt(item.tax, 0) * parseInt(item.price, 0) / 100;
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case TAX_GET:
			return {
				...state,
				taxCols: action.payload.reduce((prev, next) => {
					const { tax } = next;
					typeof prev[tax] === "undefined"
						? (prev[tax] = calculateTax(next))
						: (prev[tax] += calculateTax(next));
					return prev;
				}, {}),
				taxTotal: action.payload.reduce((prev, next) => {
					return prev + next.tax * next.price / 100;
				}, 0),
				netTotal: action.payload.reduce((prev, next) => {
					return prev + next.price;
				}, 0),
				grandTotal: action.payload.reduce((prev, next) => {
					return prev + next.price * next.tax / 100 + next.price;
				}, 0)
			};
		default:
			return state;
	}
}
