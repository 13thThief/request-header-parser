'use strict';

let express = require('express');
let route = express.Router();
let api = require('../api');

route.get('/whoami', (req, res, next) => {
  let body = api.getInfo(req);
  res.json(body);
})

module.exports = route;
