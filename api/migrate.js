const express = require('express');
const mongoose = require('mongoose');

let Hierarchy = require('./service.model');

mongoose.connect('mongodb+srv://arc:TCdZ4pVkBnb3L27D@cluster0.jwj5q.mongodb.net/hierarchy?retryWrites=true&w=majority')
data = {
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
      };

let hierarchy = new Hierarchy(data)
hierarchy.save();