
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Hierarchy = new Schema({
  data: {
    type: Object
  }
},{
    collection: 'hierarchies'
});

module.exports = mongoose.model('Hierarchy', Hierarchy);