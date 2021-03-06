const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const serviceRoute = require('./service.route');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', serviceRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});