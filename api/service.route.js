const express = require('express');
const serviceRoutes = express.Router();

//let Hierarchy = require('./service.model');

serviceRoutes.route('/hierarchy').get((req, res) => {
  const data = {
    "data": [
      {
        "name": "A",
        "description": "This is a description of A",
        "parentId": ""
      },
      {
        "name": "B",
        "description": "This is a description of B",
        "parent": "A"
      },
      {
        "name": "C",
        "description": "This is a description of C",
        "parent": "A"
      },
      {
        "name": "D",
        "description": "This is a description of D",
        "parent": "A"
      },
      {
        "name": "B-1",
        "description": "This is a description of B-1",
        "parent": "B"
      },
      {
        "name": "B-2",
        "description": "This is a description of B-2",
        "parent": "B"
      },
      {
        "name": "B-3",
        "description": "This is a description of B-3",
        "parent": "B"
      }
    ]
  }
  // Hierarchy.find((err, hierarchies)=>{
  //   if(err){
  //     res.json(err);
  //   }
  //   else {
      res.json(data);
  //   }
  // });
});

module.exports = serviceRoutes;