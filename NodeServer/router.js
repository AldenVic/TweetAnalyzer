/*
 * Routing file to route requests to appropriate services
 *
 */

// Load dependencies...
var logger      = require("./app_log_config.js").getLogger();

/*
 * Function to call appropriate service based on URL path
 *
 * Params:
 * 	handle		list of URL-service mappings
 * 	pathname	URL path of service
 * 	response	response object to return to client	
 */
function route(handle,  pathname, request, response) {
  logger.trace("About to route a request for " + pathname);

  if (typeof handle[pathname] === 'function') {
    handle[pathname](request, response);
  } else {
  // TODO send appropriate 404 message in HTML and picture
  logger.trace("No request handler found for " + pathname);
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("404 Not found");
  response.end();
  }

}


// Exports
exports.route = route;
