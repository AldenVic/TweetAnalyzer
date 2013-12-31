/*
 * This file is an initial implementation and is DEPRECATED.
 */

var htmlString = require("./htmlString");

var html = "";
var tableHTML = "";

function loadTable(values) {
 
  for( var i = 0; i < values.length; i++)
  {
    html += "<tbody> <tr> <td> " + values[i].text + "</tr> </th> </tbody>";
  }
  html += "</table></div></body> </html>";  
}

function reloadTable(values) {

  tableHTML = "<table> <thead> <tr> <th> Tweet </th> </tr>";
  for( var i = 0; i < values.length; i++)
  {
    tableHTML += "<tbody> <tr> <td> " + values[i].text + "</tr> </th> </tbody>";
  }
  tableHTML += "</table>";

}

function getTableHTML() {
  return tableHTML;
}

function getHtml() {
  return html;
}



exports.html = html;
exports.getHtml = getHtml;
exports.getTableHTML = getTableHTML;
exports.loadTable = loadTable;
exports.reloadTable = reloadTable;

