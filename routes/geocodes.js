var stats = {
  ip            : true,
  ip_no         : true,
  country_short : true,
  region        : true,
  city          : true,
  isp           : false,
  latitude      : true,
  longitude     : true,
  domain        : false,
  zipcode       : true,
  timezone      : true,
  netspeed      : false,
  iddcode       : false,
  areacode      : false,
  weatherstationcode: false,
  weatherstationname: false,
  mcc           : false,
  mnc           : false,
  mobilebrand   : false,
  elevation     : true,
  usagetype     : false,
  status        : true,
  country_long  : true
};

var ip2loc = require("ip2location-nodejs");
ip2loc.IP2Location_init('data/IP2LOCATION-LITE-DB11.BIN');

exports.findByIP = function(req, res){
  var ip = req.params.ip.replace(/-/g,'.');
  res.send(ip2loc.IP2Location_get_all(ip));
};

exports.findStat = function(req, res){
  console.log('stat passed: ', req.params.stat);
  var stat = stats[req.params.stat];
  var ip = req.params.ip.replace(/-/g,'.');
  var answer;

  if(stat) {
    if (stats[req.params.stat] == 'latitude') {
      answer = eval('ip2loc.IP2Location_get_latitude('+ip+')');
      console.log("evaluating longitude");
      console.log('ip: ', ip);
      console.log('answer lat: ', answer);
    } else if (stats[req.params.stat] == 'longitude') {
      console.log("evaluating longitude");
      answer = eval('ip2loc.IP2Location_get_' + 'longitude' + '('+ip+')');
//      answer = {longitude: ip2loc.IP2Location_get_longitude(ip)};
      console.log('answer long: ', answer);
    }
  } else {
    answer = -1;
  }
  console.log('answer: ', answer);
  res.send('{ ' + req.params.stat + ': ' + answer + '}');
};

exports.findLong = function(req, res){
  var ip = req.params.ip.replace(/-/g,'.');
  res.send('{ "longitude": "' + ip2loc.IP2Location_get_longitude(ip) + '"}');
};

exports.findLat = function(req, res){
  var ip = req.params.ip.replace(/-/g,'.');
  res.send('{ "latitude": "' + ip2loc.IP2Location_get_latitude(ip) + '"}');
};

