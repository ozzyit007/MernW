const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema ({
  title: {type: String},
  description: {type: String},
  title: { type: String},

  creator: {type: String}

});

module.exports = mongoose.model('Article', articleSchema);
