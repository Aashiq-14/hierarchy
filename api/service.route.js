const express = require('express');
const serviceRoutes = express.Router();
const mongoose = require('mongoose');

let Hierarchy = require('./service.model');

mongoose.connect('mongodb+srv://arc:TCdZ4pVkBnb3L27D@cluster0.jwj5q.mongodb.net/hierarchy?retryWrites=true&w=majority')

serviceRoutes.route('/hierarchy').get((req, res) => {
  Hierarchy.find().then((response)=>{
    res.json(response[0]);
}).catch(err => res.status(500).json('something went wrong'));
});

module.exports = serviceRoutes;