"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { searchEmails } from "@/app/actions/actions";
import { EmailContent } from "@/hooks/emailParser";
import Card from "@/components/Card";
import PaperButton from "@/components/PaperButton";

export interface Email {
  id: number;
  date: string;
  mail_from: string;
  rcpt_to: string;
  data: EmailContent;
}

const User = () => {
  const searchParam = useSearchParams();
  const router = useRouter();
  const query = searchParam.get("q") ?? "";
  const selectedEmailId = searchParam.get("users");

  useEffect(() => {
    if (!query) {
      router.push("/");
    }
  }, [router, query]);

  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEmails() {
      if (query) {
        try {
          const res = await searchEmails(`${query}@hail.prasoon.lol`);
          setEmails(res);
          console.log("Emails:", res);
        } catch (error) {
          console.error("Failed to fetch emails:", error);
        } finally {
          setLoading(false);
        }
      }
    }
    fetchEmails();
  }, [query]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center text-white text-2xl">Loading...</div>
      </div>
    );
  }

  const selectedEmail = selectedEmailId
    ? emails[parseInt(selectedEmailId)]
    : null;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card>
        <PaperButton label="Hi" />
      </Card>
    </div>
  );
};

export default User;
