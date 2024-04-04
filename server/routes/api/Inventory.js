const router = require("express").Router();
const inventoryController = require("../../controllers/inventoryController")


// // Matches with "/api/inventory"
router.route("/:id?")
  .get(inventoryController.findAll)
  .post(inventoryController.create);



module.exports = router;
