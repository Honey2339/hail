package smtp

import (
	"bufio"
	"fmt"
	"hail/session"
	"log"
	"net"
	"strings"
)

func Process_my_smtp(conn net.Conn) {
	session := &session.SMTPSession{}
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

		if input == "HELO" || input == "ELHO" {
			session.Helo = true
			_, err = conn.Write([]byte("250 Hello, please to meet you\r\n"))
			if err != nil {
				log.Fatalln("error writing response :", err)
				return
			}
		} else if input == "MAIL FROM" || session.Helo {
			session.MailFrom = input[10:]
			println(input[10:])
			_, err = conn.Write([]byte("250 Ok\r\n"))
			if err != nil {
				log.Fatalln("error writing response", err)
				return
			}
		} else {
			log.Fatalln("Please try again")
		}
	}
}