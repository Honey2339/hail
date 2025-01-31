package main

import (
	"fmt"
	smtp "hail/cmd"
	"log"
	"net"
)

func main() {
	listener, err := net.Listen("tcp", ":25")
	if err != nil {
		log.Fatal("Error starting server", err)
	}
	
	fmt.Println("SMTP server is listening on port 25")
	defer listener.Close()

	for {
		conn, err := listener.Accept()
		if err != nil {
			log.Fatal("Error accepting connection : ", err)
		}
		go smtp.Process_my_smtp(conn)
	}
}