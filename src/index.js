import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import { MuiThemeProvider } from "material-ui";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
