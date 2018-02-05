import { TAX_GET } from "./types";

export const getTax = data => {
	return {
		type: TAX_GET,
		payload: data
	};
};
