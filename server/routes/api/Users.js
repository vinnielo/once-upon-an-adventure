const router = require("express").Router();
const dataController = require("../../controllers/dataController");

// Matches with "/api/signup"
router.route("/")
  .get(dataController.findAll)
  .post(dataController.create);
 
  router.route("/login")
  .post(dataController.findUser)

  router.route("/avatar/:id?")
  .get(dataController.findUserAvatar);

  router.route("/avatar/story/:id?")
  .get(dataController.findUserStory);

  router.route("/inventory/:id?")
  .get(dataController.findUserInventory)

  module.exports = router;