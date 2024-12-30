const mongoose = require("mongoose");

// Define the schema for an individual item
const ItemSchema = new mongoose.Schema({
    img: { type: String, required: true },
    optionButton: { type: Boolean, default: false },
    name: { type: String, required: true },
    range: { type: [String], required: true },
    selecte: { type: Boolean, default: false },
    member: { type: String, required: true },
    RawDataList: { type: [String], default: [] },
    MasalaDataList: { type: [String], default: [] },
    RawData: { type: [String], required: true },
    MashalaData: { type: [String], required: true },
    RawDataUnit: { type: [String], required: true },
    MashalaDataUnit: { type: [String], required: true },
});

// Define the schema for an order item category (e.g., Rice, Vegetable)
const OrderCategorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true }, // E.g., "Rice", "Vegetable"
    items: { type: [ItemSchema], required: true }, // List of items in this category
});



// Define the main schema for the user order
const OrderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    orderItem: { type: [OrderCategorySchema], required: true }, // List of categories and their items
}, { timestamps: true });

// Create the Mongoose model
const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;
