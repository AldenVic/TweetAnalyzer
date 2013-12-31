/*
 * Application start file
 *
 */

// Load dependencies...
var server		= require("./server");
var router		= require("./router");
var requestHandlers	= require("./requestHandlers");

// URL-service mappings
var handle = {}
handle["/"]		= requestHandlers.index;
handle["/index"]	= requestHandlers.index;
handle["/updatetable"]	= requestHandlers.updatetable;

// Start the server
server.start(router.route, handle);
