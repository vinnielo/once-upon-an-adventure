const db = require("../models");

// Defining methods for the storyController
module.exports = {
  findAll: function (req, res) {
    db.Story.find(req.query)
      .then((dbBook) => res.json(dbBook))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    const { id } = req.params;
    db.Story.create(req.body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          { _id: id },
          { $set: { story: _id } },
          { new: true }
        )
      )
      .then((dbStory) => res.json(dbStory))
      .catch((err) => res.status(422).json(err));
  },

  updateStory: function (req, res) {
    db.User.find({ _id: req.params.id }).then((dbUser) => {
      db.Story.findOneAndUpdate(
        { _id: dbUser[0].story },
        { $set: { text: req.params.text } },
        { useFindAndModify: false }
      )
        .then((dbModel) => {
          res.json(dbModel);
        })
        .catch((err) => res.status(422).json(err));
    });
  },
};
