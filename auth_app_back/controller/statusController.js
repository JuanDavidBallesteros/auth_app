const package_json = require("../package.json");

exports.ping = function (req, res) {
  const version = package_json.version;
  const name = package_json.name;
  res.json({ data: "pong - " + name + " v:" + version });
};