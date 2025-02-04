package smtp

import (
	"bufio"
	"hail/SMTPsession"
	"hail/database"
	. "hail/lib"
	"log"
	"net"
	"strings"
)

func Process_my_smtp(conn net.Conn) {
	session := &SMTPsession.SMTPSession{}
	state := &SMTPsession.SMTPStore{}
	
	defer conn.Close()

	
	_, err := conn.Write(CONNECTION_START)
	if err != nil {
		log.Printf("[ERROR]: Writing to client failed: %v\n", err)
		return
	}
	
	reader := bufio.NewReader(conn)
	
	for {
		input, err := reader.ReadString('\n')
		
		if err != nil {
			log.Printf("[ERROR]: Reading data failed: %v\n", err)
			return
		}
		
		input = strings.TrimSpace(input)
	
		if session.DataStored && !session.DataClose {

			if input != "." {
				state.Data += input
			} else {
				session.DataClose = true
			}

		} else if input == "HELO" || input == "EHLO" {

			session.Helo = true
			_, err = conn.Write(INIT)
			log.Printf("[STATE]: HELO received, session initialized\n")
			if err != nil {
				log.Println("", err)
				conn.Close()
				return
			}

		} else if input == "noop" || input == "help" || input == "info" || input == "vrfy" ||  input == "expn" {
			
			log.Println("[STATE] : Unhandled Command")

		} else if input == "auth" {
			
			log.Println(AUTH_OK)

		} else if input == "rset" {
			session.Helo = true
			log.Println(SCCUESS)

		} else if strings.HasPrefix(input, "MAIL FROM:") && session.Helo {

			if(!strings.Contains(input[10:], "@")){
				log.Println(INVALID_MAIL)
				conn.Close()
				return
			}
			state.MailFrom = input[10:]
			session.MailFromBool = true
			log.Printf("[STATE]: MAIL FROM set to %s\n", state.MailFrom)
			_, err = conn.Write(SCCUESS)
			if err != nil {
				log.Println("error writing response", err)
				conn.Close()
				return
			}

		} else if strings.HasPrefix(input, "RCPT TO:") && session.MailFromBool {
			
			if(!strings.Contains(input[8:], "@")){
				log.Println(INVALID_MAIL)
				conn.Close()
				return
			}
			state.RcptTo = input[8:]
			session.RcptToBool = true
			log.Printf("[STATE]: RCPT TO set to %s\n", state.RcptTo)
			_, err = conn.Write(SCCUESS)
			if err != nil {
				log.Println("error writing response", err)
				conn.Close()
				return
			}

		} else if input == "DATA:" && session.RcptToBool {

			conn.Write(DATA_READY)
			state.Data = input[5:]
			session.DataStored = true
			log.Printf("[STATE]: DATA section started\n")
			_, err = conn.Write(SCCUESS)
			if err != nil {
				log.Println("error writing response", err)
				conn.Close()
				return
			}

		} else if input == "QUIT" && session.DataClose {

			session.Quit = true
			println(CLOSE)
			log.Printf("[STATE]: QUIT received, closing connection\n")
			database.Add_mail(*state)
			conn.Write(CLOSE)
			conn.Close()
			break

		} else {
			log.Println("INVALID COMMAND: %s\n", input)
			_, err = conn.Write([]byte("500 Unrecognized command\r\n"))
			conn.Close()
			return
		}
	}
}