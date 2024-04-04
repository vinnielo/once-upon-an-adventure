const path = require("path");
const router = require("express").Router();
const userRoutes = require("./Users");
const spriteRoutes = require("./sprite");
const storyRoutes = require("./storyRoute");
const inventoryRoutes = require("./Inventory")


// user routes
router.use("/signup", userRoutes);
router.use("/sprite", spriteRoutes);
router.use("/story", storyRoutes);
router.use("/user", userRoutes);
router.use("/inventory", inventoryRoutes);

// For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;
