var log4js      = require("log4js");


function getLogger() {
  log4js.configure(__dirname + '/log/log4js_config.json', {});
  var logger = log4js.getLogger('null');
  logger.setLevel("trace");

  return logger;
}


module.exports.getLogger = getLogger;

