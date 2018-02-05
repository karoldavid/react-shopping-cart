import { MODAL_OPEN, MODAL_CLOSE } from "../actions/types";

const INITIAL_STATE = {
	open: false
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case MODAL_OPEN:
			return { ...state, open: true };
		case MODAL_CLOSE:
			return { ...state, open: false };
		default:
			return state;
	}
}
