/*
 * File containing HTML builder strings.
 * TODO:  This is a rough implementation. May require re-write or alternative HTML builder methods.
 *
 */

// Final html string to be returned
var html = '';

// ShowTweets builder strings TODO css used here if from Janko's jExpand. A lot of irrelevant css and js exists. Needs cleanup
var showTweetsHTMLHeader 	= '<!DOCTYPE html><html><meta charset="utf-8"><head><style type="text/css">body { font-family:Arial, Helvetica, Sans-Serif; font-size:0.8em;}#report { border-collapse:collapse;}#report h4 { margin:0px; padding:0px;}#report img {float:right;}#report ul { margin:10px 0 10px 40px; padding:0px;}#report th { background:#7CB8E2 repeat-x scroll center left; color:#fff; padding:7px 15px; text-align:left;}#report td { background:#C7DDEE none repeat-x scroll center left; color:#000; padding:7px 15px; }#report tr.odd td { background:#fff repeat-x scrollcenter left; cursor:pointer; }#report div.arrow { background:transparent no-repeat scroll 0px -16px; width:16px; height:16px; display:block;}#report div.up {background-position:0px 0px;}</style><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script><script>$(document).ready((function poll(){ $.ajax({ url: "updatetable", data: {lastID: $("#tweetsTable tr:last").attr("id")}, success: function(data){ $("#tweetsTable tr:last").after(data)}, dataType: "html", complete: poll, timeout: 30000});})());</script><title> Tweet Analyst v0.1 </title></head>';
var sentimentMapEmbedCode	= "<script type='text/javascript' src='http://public.tableausoftware.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 2564px; height: 1215px;'><noscript><a href='#'><img alt='Dashboard 1 ' src='http:&#47;&#47;public.tableausoftware.com&#47;static&#47;images&#47;Se&#47;Sentimentanddatemappedoverlocations&#47;Dashboard1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='2564' height='1215' style='display:none;'><param name='host_url' value='http%3A%2F%2Fpublic.tableausoftware.com%2F' /> <param name='site_root' value='' /><param name='name' value='Sentimentanddatemappedoverlocations&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='http:&#47;&#47;public.tableausoftware.com&#47;static&#47;images&#47;Se&#47;Sentimentanddatemappedoverlocations&#47;Dashboard1&#47;1.png' / > <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div><div style='width:2564px;height:22px;padding:0px 10px 0px 0px;color:black;font:normal 8pt verdana,helvetica,arial,sans-serif;'><div style='float:right; padding-right:8px;'><a href='http://www.tableausoftware.com/public/about-tableau-products?ref=http://public.tableausoftware.com/views/Sentimentanddatemappedoverlocations/Dashboard1' target='_blank'>Learn About Tableau</a></div></div>"
var showTweetsHTMLBody 		= '<body><h1> Tweets scraped </h1><div id="tweetsTable">';
var showTweetsHTMLFooter 	= '</div></body> </html>';

/*
 * ShowTweets builder function to initialize the table with values
 * Params:
 * 	values		row values 
 */
function buildTable(values) {
  var tableHTML = '<table id="report"> <thead> <tr> <th> Tweet ID </th> <th> User ID </th><th> Tweet </th> <th> Approximate sentiment </th> <th> Tweet Coordinates </th><th> Tweeter Location </th></tr> </thead> <tbody>';
 
  for( var i = 0; i < values.length; i++)
  {
    tableHTML += "<tr id=" + values[i].id + "> <td> " + values[i].id + " </td> <td> " + values[i].user_id + " </td>  <td> " + values[i].text + "<br/> <small>Tweeted at " + values[i].created_at + " </small></td>  <td> " + values[i].sentiment + "</td> <td> " + values[i].coordinates + " </td>  <td> " + values[i].user_location + " </td>  </tr>";
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
     newRows += "<tr id=" + values[i].id + "> <td> " + values[i].id + " </td> <td> " + values[i].user_id + " </td>  <td> " + values[i].text + "<br/> <small>Tweeted at " + values[i].created_at + " </small></td>  <td> " + values[i].sentiment + "</td> <td> " + values[i].coordinates + " </td>  <td> " + values[i].user_location + " </td>  </tr>";
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
  html += sentimentMapEmbedCode;
  html += showTweetsHTMLBody;
  html += buildTable(values);
  html += showTweetsHTMLFooter;

 return html;

}


// Exports
exports.buildShowTweetsHTML	= buildShowTweetsHTML;
exports.buildTable		= buildTable;
exports.getNewRows		= getNewRows;
