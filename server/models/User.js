const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  sprite: [
    {
      type: Schema.Types.ObjectId,
      ref: "Sprite" 
    }
  ],
  story: [
    {
      type: Schema.Types.ObjectId,
      ref: "Story" 
    }
  ],
  hearts: {type: String},
  inventory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Inventory"
    }
  ]
});

const User = mongoose.model("User", UserSchema);


module.exports = User;
