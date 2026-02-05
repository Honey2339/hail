package main

import (
	"fmt"
	smtp "hail/cmd"
	"hail/database"
	. "hail/lib"
	"log"
	"net"
	"time"
)

func DelOldMail(){
	ticker := time.NewTicker(time.Hour)
	defer ticker.Stop()

	for range ticker.C {
		go database.Delete_old_mail()
	}
} 


func main() {
	listener, err := net.Listen("tcp", ":25")
	if err != nil {
		log.Fatal("Error starting server", err)
	}
	
	fmt.Println("SMTP server is listening on port 25")
	defer listener.Close()	
	
	Db, _ = database.ConnectDB()

	_, errExec := Db.Exec(`
		CREATE TABLE IF NOT EXISTS users (
			id SERIAL PRIMARY KEY,
			mail_from VARCHAR(255) NOT NULL,
			rcpt_to VARCHAR(255) NOT NULL,
			data TEXT NOT NULL,
			date TIMESTAMP DEFAULT NOW()
		)
	`)

	if errExec != nil {
		log.Fatalln(DATABASE_ERROR, errExec)
	}

	go DelOldMail()

	for {
		conn, err := listener.Accept()
		if err != nil {
			log.Fatalln("Error accepting connection : ", err)
		}
		go smtp.Process_my_smtp(conn)
	}
}