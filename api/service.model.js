
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Hierarchy = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
},{
    collection: 'hierarchies'
});

module.exports = mongoose.model('Hierarchy', Hierarchy);