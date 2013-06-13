
var conn = $.db.getConnection();
var stmnt = conn.prepareStatement("SELECT BREAK FROM LONGPOLL WHERE BREAK = 1");


var res = stmnt.executeQuery();

$.response.contentType = "text/plain";
$.response.setBody("JSON.stringify(res)");