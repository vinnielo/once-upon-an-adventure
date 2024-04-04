const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpriteSchema = new Schema({
    sprite: {type: String},
    name: { type: String, required: true },
    homeFirst: {type: Boolean, default: true},
    place: {type: String, default: "home"},
    apiFirstGuardTalk: {type: Boolean, default: true},
    apiFirstOrcTalk: {type: Boolean, default: true},
    apiFirstJaceTalk: {type: Boolean, default: true},
    apiFirstThiefTalk: {type: Boolean, default: true},
    lives: {type: Number, default: 3},
    permit: {type: Boolean, default: false},
    money: {type: Number, default: 0}

});
const Sprite = mongoose.model("Sprite", SpriteSchema);

module.exports = Sprite;
