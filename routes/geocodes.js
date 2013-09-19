
var ip2loc = require("ip2location-nodejs");
ip2loc.IP2Location_init('data/IP2LOCATION-LITE-DB11.BIN');

exports.findByIP = function(req, res){
  var ip = req.params.ip.replace(/-/g,'.');
  res.send(ip2loc.IP2Location_get_all(ip));
};

exports.findStat = function(req, res){
  console.log('stat passed: ', req.params.stat);
  var stat = req.params.stat;
  var ip = req.params.ip.replace(/-/g,'.');
  var answer;
  if(stat) {
    if (stat == 'lat') {
      answer = ip2loc.IP2Location_get_longitude(ip);
//      answer = {latitude: ip2loc.IP2Location_get_longitude(ip)};
      console.log('answer lat: ', answer);
    } else if (stat == 'long') {
      answer = ip2loc.IP2Location_get_longitude(ip);
//      answer = {longitude: ip2loc.IP2Location_get_longitude(ip)};
      console.log('answer long: ', answer);
    }
  } else {
    answer = -1;
  }
  res.send(answer);
};

exports.findLong = function(req, res){
  var ip = req.params.ip.replace(/-/g,'.');
  res.send(ip2loc.IP2Location_get_longitude(ip));
};

