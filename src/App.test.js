import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import renderer from 'react-test-renderer';
import App from "./App";
import ShoppingCart from "./components/ShoppingCart";
import ToolBar from "./components/ToolBar";

Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = Enzyme.shallow(<App />);
	});

	it("renders", () => {
		expect(wrapper.length).toEqual(1);
	});
});

describe("ShoppingCart component", () => {
	const initialState = {
		taxes: {},
		products: {},
		modal: {}
	};
	const mockStore = configureStore();
	let store, container;

	beforeEach(() => {
		store = mockStore(initialState);
		container = Enzyme.shallow(<ShoppingCart store={store} />);
	});

	it("renders", () => {
		expect(container.length).toEqual(1);
	});
});


describe("ToolBar component", () => {
	const initialState = null;

	const mockStore = configureStore();
	let store, container;

	beforeEach(() => {
		store = mockStore(initialState);
		container = Enzyme.shallow(<ToolBar store={store} />);
	});

	it("renders", () => {
		expect(container.length).toEqual(1);
	});
});