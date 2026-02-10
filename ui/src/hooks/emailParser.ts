import { simpleParser } from "mailparser";

export interface EmailAttachment {
  filename: string;
  contentType: string;
  size: number;
}

export interface EmailContent {
  subject: string;
  from: string;
  text: string;
  html: string;
  text_as_html: string;
  attachments: EmailAttachment[];
  date: Date;
}

// leading whitespace (RFC 5322 requires continuations to start with
// a space or tab). Without this, multipart boundaries aren't parsed
// and simpleParser can't extract the email body.
function fixHeaderFolding(raw: string): string {
  const splitMatch = raw.match(/(\r?\n){2}/);
  if (!splitMatch || splitMatch.index === undefined) return raw;

  const headerPart = raw.substring(0, splitMatch.index);
  const rest = raw.substring(splitMatch.index);

  const lines = headerPart.split(/\r?\n/);
  const fixed: string[] = [lines[0]];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line || line.startsWith(" ") || line.startsWith("\t")) {
      fixed.push(line);
    } else if (/^[A-Za-z][A-Za-z0-9-]*:/.test(line)) {
      fixed.push(line);
    } else {
      fixed.push(" " + line);
    }
  }

  return fixed.join("\r\n") + rest;
}

export async function parseEmail(data: string): Promise<EmailContent> {
  try {
    const parsed = await simpleParser(fixHeaderFolding(data));

    return {
      subject: parsed.subject ?? "",
      from: parsed.from?.text ?? "",
      text: parsed.text ?? "",
      html: parsed.html || "",
      text_as_html: parsed.textAsHtml ?? "",
      attachments: (parsed.attachments ?? []).map((a) => ({
        filename: a.filename ?? "",
        contentType: a.contentType ?? "",
        size: a.size ?? 0,
      })),
      date: parsed.date ?? new Date(),
    };
  } catch (error) {
    console.error("Error parsing email", error);
    throw error;
  }
}
