import { Attachment, simpleParser } from "mailparser";

export interface EmailContent {
  subject: string;
  from: string;
  text: string;
  html: string;
  text_as_html: string;
  attachments: Attachment[];
  date: Date;
}

export default async function parseEmail() {
  try {
    const parsed = await simpleParser("email");
  } catch (error) {}
}
