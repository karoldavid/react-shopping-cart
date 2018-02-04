import { CART_ITEM_FIELDS } from "../utils/consts";

const INITIAL_STATE = {
	fields: CART_ITEM_FIELDS
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		default:
			return state;
	}
}
