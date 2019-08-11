'use strict';

let getInfo = function(req){
  let ip;
  let xFor = req.headers['x-forwarded-for'];
  let remoteAddress = req.connection.remoteAddress;
  let language = req.headers['accept-language'];
  let software = req.headers['user-agent'];

  if(xFor)
    ip = xFor;
  else ip = remoteAddress;

  let body = {
    ipaddress: ip,
    language: language,
    software: software
  }
  return body
}

module.exports = { 
  getInfo
}