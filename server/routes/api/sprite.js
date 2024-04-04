const router = require("express").Router();
const spriteController = require("../../controllers/spriteController");


// // Matches with "/api/sprite"
router.route("/:id?")
  .get(spriteController.findAll)
  .post(spriteController.create)
  
  
  router.route("/homefirst/:id?")
  .put(spriteController.updateHomeFirst)

  router.route("/guardTalk/:id?")
  .put(spriteController.updateGuardTalk)

  router.route("/orcTalk/:id?")
  .put(spriteController.updateOrcTalk)

  router.route("/jaceTalk/:id?")
  .put(spriteController.updateJaceTalk)

  router.route("/thiefTalk/:id?")
  .put(spriteController.updateThiefTalk)
  
  router.route("/permit/:id?")
  .put(spriteController.updatePermit)

  router.route("/place/:id?/:place?")
  .put(spriteController.updatePlace)

  router.route("/money/:id?/:money?")
  .put(spriteController.updateMoney)

  router.route("/lives/:id?/:lives?")
  .put(spriteController.updateLives)




module.exports = router;
