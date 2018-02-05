import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import products from "./ProductsReducer";
import modal from "./ModalReducer";

export default combineReducers({
	form: formReducer,
	products,
	modal
});
