package database

import (
	"database/sql"
	"hail/SMTPsession"
	. "hail/lib"
	"log"
	"os"
	"time"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func ConnectDB()(*sql.DB, error){
	err := godotenv.Load(".env")
	if err != nil{
		log.Println("Error loading .env file")
	}
	dcs := os.Getenv("DATABASE_URL")
	db, err := sql.Open("postgres", dcs)

	if err != nil {
		log.Println(DATABASE_ERROR)
		return nil, err
	}

	log.Println(DATABASE_CONNECTED)

	return db, err
}

func Add_mail(state SMTPsession.SMTPStore){
	query_add  := "INSERT INTO users (mail_from, rcpt_to, data, date) VALUES ($1, $2, $3, NOW())"
	_, err := Db.Exec(query_add, state.MailFrom, state.RcptTo, state.Data)

	if err != nil {
		log.Println("[DB][ERROR] : Could not insert data")
	} else {
		log.Println("[DB][SUCCESS] : Inserted data into db")	
	}
}

func Delete_old_mail(){
	for {
        _, err := Db.Exec(`DELETE FROM users WHERE created_at < NOW() - INTERVAL '7 days'`)
        if err != nil {
            log.Println("Error deleting old emails:", err)
        } else {
            log.Println("Old emails deleted successfully")
        }
        time.Sleep(24 * time.Hour)
    }
}