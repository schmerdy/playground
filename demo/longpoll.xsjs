var conn = $.db.getConnection();
var stmnt = conn.prepareStatement("SELECT SINGLE BREAK FROM LONGPOLL WHERE BREAK = 1");

/*
while (true) {
	var res = stmnt.executeQuery();
	break;
}
*/
$.response.contentType = "text/plain";
$.response.setBody("JSON.stringify(res)");