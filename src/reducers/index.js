import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import products from "./ProductsReducer";
import modal from "./ModalReducer";
import taxes from "./TaxReducer";

export default combineReducers({
	form: formReducer,
	products,
	modal,
	taxes
});
