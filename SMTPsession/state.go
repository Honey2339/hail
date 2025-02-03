package SMTPsession

type SMTPSession struct {
	Helo         bool
	MailFromBool bool
	RcptToBool   bool
	DataStored   bool
	DataClose    bool
	Quit         bool
}

type SMTPStore struct {
	MailFrom string
	RcptTo   string
	Data     string
	Date     string
}