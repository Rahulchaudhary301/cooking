// const mongoose = require("mongoose");

// // Define the schema for raw data details
// const RawDataListSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     unit: { type: String, required: true },
//     belog: { type: String, required: true }, // E.g., "kirana"
// });

// // Define the schema for masala data details
// const MasalaDataListSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     unit: { type: String, required: true },
//     belog: { type: String, required: true }, // E.g., "kirana"
// });

// // Define the schema for an individual item
// const ItemSchema = new mongoose.Schema({
//     img: { type: String, required: true },
//     optionButton: { type: Boolean, default: false },
//     name: { type: String, required: true },
//     range: { type: [String], required: true },
//     selecte: { type: Boolean, default: false },
//     member: { type: String, required: true },
//     RawDataList: { type: [RawDataListSchema], default: [] }, // Using the schema for raw data details
//     MasalaDataList: { type: [MasalaDataListSchema], default: [] }, // Using the schema for masala data details
//     RawData: { type: [String], required: true },
//     MashalaData: { type: [String], required: true },
//     RawDataUnit: { type: [String], required: true },
//     MashalaDataUnit: { type: [String], required: true },
// });

// // Define the schema for an order item category (e.g., Rice, Vegetable)
// const OrderCategorySchema = new mongoose.Schema({
//     categoryName: { type: String, required: true }, // E.g., "Rice", "Vegetable"
//     items: { type: [ItemSchema], required: true }, // List of items in this category
// });

// // Define the main schema for the user order
// const OrderListSchema = new mongoose.Schema(
//     {
//         name: { type: String, required: true },
//         mobile: { type: String, required: true },
//         clientRequest: { type: Boolean, required: true },
//         requsetGrant: { type: Boolean, required: true },
//         orderItem: { type: [OrderCategorySchema], required: true }, // List of categories and their items
//     },
//     { timestamps: true }
// );

// // Create the Mongoose model
// const OrderListModel = mongoose.model("OrderList", OrderListSchema);

// module.exports = OrderListModel;







const mongoose = require("mongoose");

// Define the schema for raw data details
const RawDataListSchema = new mongoose.Schema({
    name: { type: String, required: true },
    unit: { type: String, required: true },
    belog: { type: String, required: true }, // E.g., "kirana"
});

// Define the schema for masala data details
const MasalaDataListSchema = new mongoose.Schema({
    name: { type: String, required: true },
    unit: { type: String, required: true },
    belog: { type: String, required: true }, // E.g., "kirana"
});

// Define the schema for utensil data details
const UtensilSchema = new mongoose.Schema({
    img: { type: String, required: true }, // Image or name identifier
    name: { type: String, required: true }, // Name of the utensil
    unit: { type: [Number], required: true }, // Available units
    optionButton: { type: Boolean, default: false },
    selecte: { type: Boolean, default: false },
    SelectUnit: { type: String, required: true }, // Selected unit
});

// Define the schema for an individual item
const ItemSchema = new mongoose.Schema({
    img: { type: String, required: true },
    optionButton: { type: Boolean, default: false },
    name: { type: String, required: true },
    range: { type: [String], required: true },
    selecte: { type: Boolean, default: false },
    member: { type: String, required: true },
    RawDataList: { type: [RawDataListSchema], default: [] }, // Using the schema for raw data details
    MasalaDataList: { type: [MasalaDataListSchema], default: [] }, // Using the schema for masala data details
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
const OrderListSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        mobile: { type: String, required: true },
        clientRequest: { type: Boolean, required: true },
        requsetGrant: { type: Boolean, required: true },
        orderItem: { type: [OrderCategorySchema], required: true }, // List of categories and their items
        UtensilData: { type: [UtensilSchema], default: [] }, // List of utensils
    },
    { timestamps: true }
);

// Create the Mongoose model
const OrderListModel = mongoose.model("OrderList", OrderListSchema);

module.exports = OrderListModel;

