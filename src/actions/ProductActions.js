import { ADD_ITEM, REMOVE_ITEM, REMOVE_ITEMS } from "./types";

export const addItem = item => {
	return {
		type: ADD_ITEM,
		payload: item
	};
};

export const removeItem = index => {
	return {
		type: REMOVE_ITEM,
		payload: index
	};
};

export const resetCart = () => {
	return {
		type: REMOVE_ITEMS
	}
}
