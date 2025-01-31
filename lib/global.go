package lib

var INIT = []byte("250 Hello, please to meet you\r\n")
var SCCUESS = []byte("250 Ok\r\n")
var DATA_READY = []byte("354 End data with <CR><LF>.<CR><LF>\n")
var CLOSE = []byte("221 Goodbye\n")
