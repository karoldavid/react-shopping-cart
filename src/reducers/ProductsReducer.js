import { CART_ITEM_FIELDS } from "../utils/consts";
import { ADD_ITEM, REMOVE_ITEM, REMOVE_ITEMS } from "../actions/types";

const INITIAL_STATE = {
	fields: CART_ITEM_FIELDS,
	items: [{ tax: "10", totalItem: "100" }, { tax: "20", totalItem: "200" }, { tax: "10", totalItem: "50" }, { tax: "10", totalItem: "320" }],
	item: CART_ITEM_FIELDS.reduce((prev, next) => {
		return { ...prev, [next.name]: next.value };
	}, {})
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				items: [...state.items, { ...state.item, ...action.payload }]
			};
		case REMOVE_ITEM:
			return {
				...state,
				items: state.items.filter(
					(item, index) => index !== action.payload
				)
			};
		case REMOVE_ITEMS:
			return {
				...state,
				items: []
			};
		default:
			return state;
	}
}
