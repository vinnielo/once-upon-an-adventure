const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    lives: {type: String},
    itemName: {type: String},
    money: {type: Number}
});
const Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory;
