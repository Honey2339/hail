package lib

import "database/sql"

var CONNECTION_START = []byte("220 Connected\r\n")
var INIT = []byte("250 Welcome to Hail\r\n")
var SCCUESS = []byte("250 Ok\r\n")
var DATA_READY = []byte("354 End data with <CR><LF>.<CR><LF>\n")
var CLOSE = []byte("221 Goodbye\n")

var INVALID_MAIL = "553 ERROR: INVALID MAIL"
var SYNTAX_ERROR = "500 ERROR: NOT A COMMAND"
var DATABASE_ERROR = "[DB][ERROR] : Unable to connect to database"
var DATABASE_CONNECTED = "[DB][SUCCESS] : Connected To neon database"
var AUTH_OK = "235 Ok\r\n"
var Db *sql.DB