import { CART_ITEM_FIELDS } from "../utils/consts";
import { ADD_ITEM } from "../actions/types";

const INITIAL_STATE = {
	fields: CART_ITEM_FIELDS,
	items: []
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_ITEM:
			return { ...state, items: [...state.items, action.payload] };
		default:
			return state;
	}
}
