import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";

import { RaisedButton, Table, TableRow, TableRowColumn } from "material-ui";

import App from "./App";
import ShoppingCart from "./components/ShoppingCart";
import ToolBar from "./components/ToolBar";
import TotalTable from "./components/TotalTable";

Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = Enzyme.shallow(<App />);
	});

	it("renders", () => {
		expect(wrapper.length).to.equal(1);
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
		expect(container.length).to.equal(1);
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
		expect(container.length).to.equal(1);
	});
});

describe("TotalTable component", () => {
	const taxes = {
		netTotal: 47.25,
		taxTotal: 5.5874999999999995,
		taxCols: { "7": 1.96, "19": 3.61 },
		grandTotal: 52.837500000000006
	};
	let totalTable;

	beforeEach(() => {
		totalTable = Enzyme.shallow(<TotalTable data={taxes} />);
	});

	it("should have one table", () => {
		const table = totalTable.find(Table);
		expect(table.length).to.equal(1);
	});

	it("should contain five table rows", () => {
		const rows = totalTable.find(TableRow);
		expect(rows.length).to.equal(5);
	});
});
