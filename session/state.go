package session

type SMTPSession struct {
	Helo     bool
	MailFrom string
	RcptTo   string
	Data     bool
}