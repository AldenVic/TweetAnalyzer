/*
 * File to handle page requests
 *
 */

// Load dependencies...
var htmlString		= require("./htmlString");
var connection		= require("./dbConnection");
var url			= require('url');
var logger		= require("./app_log_config.js").getLogger();

// Db queries TODO move these to a dedicated file
var indexTableRows 	= 'SELECT * from tweets, sentiments where tweets.id = sentiments.id';
var newRows 		= 'SELECT * from tweets, sentiments where tweets.id = sentiments.id AND tweets.id > ';

/* 
 * Landing page
 * 
 * Params:
 * 	response object to return to client
 */
function index(request, response) {
    logger.trace("Request handler 'index' was called.");

    // Get all tweets from db and write to response object
    connection.query(indexTableRows, function(err, rows, fields) {
    if (err) throw err;

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(htmlString.buildShowTweetsHTML(rows));
    response.end();
    });

}

/*
 * Table update service. This should be called through AJAX by setting up an HTTP connection with the server
 *
 * Params:
 * 	response object to return to client 	
 */
function updatetable(request, response) {
  logger.trace("Request handler 'reloadtable' was called.");

  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;

  //  Get all new tweets from db and write to response object after making sure that the id returned is defined
  if(typeof query.lastID === 'undefined') {
    response.end();
    return;
  }

  connection.query(newRows + query.lastID, function(err, rows, fields) {
  if (err) throw err;

  logger.trace("Fetching new rows with ids > " + query.lastID);
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(htmlString.getNewRows( rows));
  response.end();
  });

}


// Exports
exports.index		= index;
exports.updatetable	= updatetable;
