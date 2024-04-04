const db = require("../models");

// Defining methods for the dataController
module.exports = {
    findAll: function(req, res) {
        db.Sprite.find(req.query)
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        const { id } = req.params
        db.Sprite.create(req.body)
        .then(({ _id}) => db.User.findOneAndUpdate({_id: id}, { $set: {sprite: _id}}, {new: true}))
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      },
      findSprite: function (req, res) {
        db.Sprite.find({sprite: req.body.sprite})
          .then(dbUser => {
            
                  res.json(dbUser)
              
          }).catch((err) => res.status(422).json(err));
      },
      updateMoney: function(req, res) {
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {money: req.params.money}}, {useFindAndModify: false})
          .then(dbResponse => {
            res.json(dbResponse)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      },
      updateHomeFirst: function(req, res) {
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {homeFirst: false}}, {useFindAndModify: false})
          .then(dbResult => {
            res.json(dbResult)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      },
      updateGuardTalk: function(req, res) {
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {apiFirstGuardTalk: false}}, {useFindAndModify: false})
          .then(dbResult => {
            res.json(dbResult)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      },
      
      updatePlace: function(req, res) {
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {place: req.params.place}}, {useFindAndModify: false})
          .then(dbResult => {
            res.json(dbResult)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      },
      
      updateOrcTalk: function(req, res) {
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {apiFirstOrcTalk: false}}, {useFindAndModify: false})
          .then(dbResult => {
            res.json(dbResult)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      },
      updateJaceTalk: function(req, res) {
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {apiFirstJaceTalk: false}}, {useFindAndModify: false})
          .then(dbResult => {
            res.json(dbResult)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      },
      updateThiefTalk: function(req, res) {
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {apiFirstThiefTalk: false}}, {useFindAndModify: false})
          .then(dbResult => {
            res.json(dbResult)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      },
      updatePermit: function(req, res) {
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {permit: true}}, {useFindAndModify: false})
          .then(dbResult => {
            res.json(dbResult)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      },
      updateLives: function(req, res) {
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {lives: req.params.lives}}, {useFindAndModify: false})
          .then(dbResult=> {
            res.json(dbResult)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      }
  
};