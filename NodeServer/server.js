/*
 * Server file
 */

// Load dependencies...
var http	= require("http");
var url		= require("url");
var logger	= require("./app_log_config.js").getLogger();

/*
 * Server start call
 *
 * Params:
 * 	route		function to handle routing
 * 	handle		URL-service mappings
 */
function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    logger.trace("Request for " + pathname + " received...");

    route(handle, pathname, request, response);
  }
  
  http.createServer(onRequest).listen(80);
  logger.trace("Server started...");
}


// Exports
exports.start = start;
