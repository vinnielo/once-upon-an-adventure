const db = require("../models");

// Defining methods for the dataController
module.exports = {
    findAll: function(req, res) {
        db.Inventory.find(req.query)
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      },
    create: function(req, res) {
        
        db.Inventory.create(req.body)
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));

      },
    findInventory: function(req,res){
        db.Inventory.find({}).then(dbUser => {
            res.json(dbUser)
        }).catch((err) => res.status(422).json(err));
    }
};