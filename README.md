# Custom SMTP Server for Temporary Email

A lightweight, secure, and ephemeral email communication service built from scratch in Go. This custom SMTP server enables temporary email functionality with self-expiring mailboxes for enhanced privacy.

![coverimg](https://github.com/user-attachments/assets/f532a20a-6517-4f78-b4fb-e9e246de2ae8)

## Features
- **Custom-built SMTP server**: No dependencies on third-party mail servers.
- **Self-expiring mailboxes**: Emails are automatically deleted after a predefined time.
- **Lightweight & Efficient**: Optimized for performance and low resource consumption.

## Usage
- The server listens for incoming emails to `username@hail.prasoon.lol` and stores them temporarily.
- Emails are accessible via UI at `https://hail.prasoon.lol`
- Messages auto-expire after the 7 day.

## Configuration
- `DATABASE_URL`: 'your supabase uri'

## Contributing
Feel free to open issues or PRs to enhance the project.

## Contact
For questions or suggestions, reach out to `prasoon2honey@gmail.com`.
