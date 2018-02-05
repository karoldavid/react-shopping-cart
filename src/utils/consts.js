export const CART_ITEM_FIELDS = [
	{ name: "name", label: "Name", value: "", type:"string", required: true },
	{ name: "comments", label: "Comments", value: "", type:"string", required: false },
	{ name: "price", label: "Price", value: 0, unit: "€", type:"number", required: true },
	{ name: "tax", label: "Tax", value: 0, unit: "%", type:"number", required: true },
	{ name: "totalItem", label: "Total Item", value: 0, unit: "€", type:"number", required: true }
];
