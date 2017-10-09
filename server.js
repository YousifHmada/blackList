require('./config/config');
var axios = require('axios');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Movie} = require('./models/movie');
var {Authenticated} = require('./db/middlewares/authenticated');


var app = express();
var port = process.env.PORT || 4200;

app.use(bodyParser.json());

app.use(express.static('dist'));


app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
