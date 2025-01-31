package smtp

import (
	"bufio"
	"fmt"
	"hail/SMTPsession"
	. "hail/lib"
	"log"
	"net"
	"strings"
)

func Process_my_smtp(conn net.Conn) {
	session := &SMTPsession.SMTPSession{}
	state := &SMTPsession.SMTPStore{}
	
	defer conn.Close()

	
	_, err := conn.Write([]byte("220 Welcome to the Go SMTP server"))
	if err != nil {
		log.Fatal("Error writing to client : ", err)
		return
	}
	
	reader := bufio.NewReader(conn)
	
	for {
		input, err := reader.ReadString('\n')
		
		if err != nil {
			log.Println("Error reading data: ", err)
			return
		}
		
		input = strings.TrimSpace(input)
		fmt.Println("Client : ", input)
		if session.DataStored && !session.DataClose{
			if input != "." {
				state.Data += input
			} else {
				session.DataClose = true
			}
		} else if input == "HELO" || input == "EHLO" {
			session.Helo = true
			_, err = conn.Write(INIT)
			if err != nil {
				log.Fatalln("error writing response :", err)
				return
			}
		} else if strings.HasPrefix(input, "MAIL FROM:") && session.Helo {
			state.MailFrom = input[10:]
			session.MailFromBool = true
			println(input[10:])
			_, err = conn.Write(SCCUESS)
			if err != nil {
				log.Fatalln("error writing response", err)
				return
			}
		} else if strings.HasPrefix(input, "RCPT TO:") && session.MailFromBool {
			state.RcptTo = input[8:]
			session.RcptToBool = true
			println(state.RcptTo)
			_, err = conn.Write(SCCUESS)
			if err != nil {
				log.Fatalln("error writing response", err)
				return
			}
		} else if input == "DATA:" && session.RcptToBool {
			conn.Write(DATA_READY)
			state.Data = input
			session.DataStored = true
			_, err = conn.Write(SCCUESS)
			if err != nil {
				log.Fatalln("error writing response", err)
				return
			}
		} else if input == "QUIT" && session.DataClose {
			session.Quit = true
			println(CLOSE)
			conn.Write(CLOSE)
			conn.Close()
			break
		} else {
			println(input)
			log.Fatalln("Please try again")
		}
	}
}