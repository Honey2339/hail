package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func ConnectDB()(*sql.DB, error){
	err := godotenv.Load(".env")
	if err != nil{
		log.Fatalf("Error loading .env file")
	}
	dcs := fmt.Sprintf(
		"host=%s dbname=%s user=%s password=%s sslmode=disable",
		os.Getenv("PGHOST"),
		os.Getenv("PGDATABASE"),
		os.Getenv("PGUSER"),
		os.Getenv("PGPASSWORD"),
	)
	db, err := sql.Open("postgres", dcs)

	if err != nil {
		log.Fatalln("[DB][ERROR] : Could not connect to db")
		return nil, err
	}

	log.Println("[DB][SUCCES] : Connected to DB")

	return db, err
}