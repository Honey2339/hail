"use server";

import { parseEmail } from "@/hooks/emailParser";
import { db } from "@/lib/db";

export async function searchEmails(rcptQuery: string) {
  try {
    const result = await db.query(
      `SELECT id, mail_from, rcpt_to, data, date FROM users WHERE rcpt_to ILIKE $1`,
      [`%${rcptQuery}%`]
    );
    const output = [];
    for (const i of result.rows) {
      const parsedEmail = await parseEmail(i.data);
      output.push({
        id: i.id,
        date: i.date,
        mail_from: i.mail_from,
        rcpt_to: i.rcpt_to,
        data: parsedEmail,
      });
    }
    return output;
  } catch (error) {
    console.error("Error fetching emails", error);
    throw new Error("Error fetching emails");
  }
}
