const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactrpgDB");

const UserSeed = [
  {
    email: "test@test.com",
    password: "1234",
  },
  {
    email: "admin@admin.com",
    password: "admin",
  },
];

const SpriteSeed = [
  {
    sprite: "../assets/sprites/option1.png",
  },
  {
    sprite: "../assets/sprites/option2.png",
  },
  {
    sprite: "../assets/sprites/option3.png",
  },
  {
    sprite: "../assets/sprites/option4.png",
  },
  {
    sprite: "../assets/sprites/option5.png",
  },
  {
    sprite: "../assets/sprites/option6.png",
  },
  {
    sprite: "../assets/sprites/option7.png",
  },
  {
    sprite: "../assets/sprites/option8.png",
  },
  {
    sprite: "../assets/sprites/option9.png",
  },
  {
    sprite: "../assets/sprites/option10.png",
  },
  {
    sprite: "../assets/sprites/option11.png",
  },
];

db.Sprite.remove({})
  .then(() => db.Sprite.collection.insertMany(SpriteSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.User.remove({})
  .then(() => db.User.collection.insertMany(UserSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
