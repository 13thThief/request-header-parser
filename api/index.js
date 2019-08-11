'use strict';

let getInfo = function(req){
  let ip = req.headers['x-forwarded-for'].split(',')[0];
  // let xFor = req.headers['x-forwarded-for'];
  // let remoteAddress = req.connection.remoteAddress;
  let language = req.headers['accept-language'];
  let software = req.headers['user-agent'];

  // ip = xFor ? xFor : remoteAddress;

  let body = {
    ipaddress: ip,
    language: language,
    software: software
  }
  return body;
}

module.exports = { 
  getInfo
}