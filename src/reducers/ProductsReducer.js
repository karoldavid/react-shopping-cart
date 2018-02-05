import { CART_ITEM_FIELDS } from "../utils/consts";
import { ADD_ITEM, REMOVE_ITEM, REMOVE_ITEMS } from "../actions/types";

const INITIAL_STATE = {
	fields: CART_ITEM_FIELDS,
	items: [
		{
			name: "Product 1",
			comment: "",
			price: "8",
			tax: "19",
			totalItem: "0"
		},
		{
			name: "Product 2",
			comment: "",
			price: "11",
			tax: "19",
			totalItem: "0"
		},
		{
			name: "Product 3",
			comment: "Lorem Ipsum comment",
			price: "16.25",
			tax: "7",
			totalItem: "0"
		},
		{
			name: "Product 4",
			comment: "",
			price: "12",
			tax: "7",
			totalItem: "0"
		}
	],
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
