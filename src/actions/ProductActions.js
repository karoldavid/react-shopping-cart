import { ADD_ITEM, REMOVE_ITEM } from "./types";

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
