/*
 * File containing HTML builder strings.
 * TODO:  This is a rough implementation. May require re-write or alternative HTML builder methods.
 *
 */

// Final html string to be returned
var html = '';

// ShowTweets builder strings TODO css used here if from Janko's jExpand. A lot of irrelevant css and js exists. Needs cleanup
var showTweetsHTMLHeader 	= '<!DOCTYPE html><html><head><style type="text/css">body { font-family:Arial, Helvetica, Sans-Serif; font-size:0.8em;}#report { border-collapse:collapse;}#report h4 { margin:0px; padding:0px;}#report img {float:right;}#report ul { margin:10px 0 10px 40px; padding:0px;}#report th { background:#7CB8E2 repeat-x scroll center left; color:#fff; padding:7px 15px; text-align:left;}#report td { background:#C7DDEE none repeat-x scroll center left; color:#000; padding:7px 15px; }#report tr.odd td { background:#fff repeat-x scrollcenter left; cursor:pointer; }#report div.arrow { background:transparent no-repeat scroll 0px -16px; width:16px; height:16px; display:block;}#report div.up {background-position:0px 0px;}</style><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script><script>$(document).ready((function poll(){ $.ajax({ url: "updatetable", data: {lastID: $("#tweetsTable tr:last").attr("id")}, success: function(data){ $("#tweetsTable tr:last").after(data)}, dataType: "html", complete: poll, timeout: 30000});})());</script><title> Tweet Analyst v0.1 </title></head>';
var showTweetsHTMLBody 		= '<body><h1> Tweets scraped </h1><div id="tweetsTable">';
var showTweetsHTMLFooter 	= '</div></body> </html>';

/*
 * ShowTweets builder function to initialize the table with values
 * Params:
 * 	values		row values 
 */
function buildTable(values) {
  var tableHTML = '<table id="report"> <thead> <tr> <th> Tweet </th> <th> Approximate sentiment </th> </tr> </thead> <tbody>';
 
  for( var i = 0; i < values.length; i++)
  {
    tableHTML += "<tr id=" + values[i].id + "> <td> " + values[i].text + "</td>  <td> " + values[i].sentiment + "</td> </tr>";
  }

  tableHTML += '</tbody> </table>';

  return tableHTML;

}

/*
 * ShowTweets builder function to add new rows
 * Params:
 *      values          row values
 */
function getNewRows(values) {
  var newRows = '';
  for( var i = 0; i < values.length; i++)
  {
    newRows += "<tr id=" + values[i].id + "> <td> " + values[i].text + "</td>  <td> " + values[i].sentiment + "</td> </tr>";
  }

  return newRows;

}

/*
 * showTweets page builder function.
 * Params:
 * 	values          row values
 */
function buildShowTweetsHTML(values) {
  html 	= showTweetsHTMLHeader;
  html += showTweetsHTMLBody;
  html += buildTable(values);
  html += showTweetsHTMLFooter;

 return html;

}


// Exports
exports.buildShowTweetsHTML	= buildShowTweetsHTML;
exports.buildTable		= buildTable;
exports.getNewRows		= getNewRows;
