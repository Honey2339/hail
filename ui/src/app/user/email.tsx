"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { searchEmails } from "@/app/actions/actions";
import { EmailContent } from "@/hooks/emailParser";
import Card from "@/components/Card";
import PaperButton from "@/components/PaperButton";
import EmailCard from "@/components/EmailCard";

export interface Email {
  id: number;
  date: string;
  mail_from: string;
  rcpt_to: string;
  data: EmailContent;
}

const EmailPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") ?? "";
  const emailId = searchParams.get("id");

  const [email, setEmail] = useState<Email | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEmail() {
      if (query && emailId) {
        try {
          const res = await searchEmails(`${query}@hail.prasoon.lol`);
          const selectedEmail = res.find(
            (e: Email) => e.id === Number(emailId)
          );
          setEmail(selectedEmail || null);
        } catch (error) {
          console.error("Failed to fetch email:", error);
        } finally {
          setLoading(false);
        }
      }
    }
    fetchEmail();
  }, [query, emailId]);

  if (loading) {
    return <div className="text-white text-2xl text-center">Loading...</div>;
  }

  if (!email) {
    return (
      <div className="text-white text-2xl text-center">Email not found</div>
    );
  }
  const handleBack = () => {
    router.push(`/user?q=${query}`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <EmailCard>
        <div className="flex items-center w-full">
          <div className="mr-auto" onClick={handleBack}>
            <PaperButton label="Back" />
          </div>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl text-white">
            {email.data.subject}
          </h1>
        </div>
        <div className="h-[2px] w-full mt-2 bg-zinc-300"></div>
        <div className="flex flex-col text-left w-full mt-4 overflow-y-scroll pr-2 custom-scrollbar">
          <div className="text-zinc-300 flex gap-1 text-base font-mono">
            <h1 className="font-semibold">Date : </h1>
            <h1>{new Date(email.date).toLocaleDateString()}</h1>
          </div>
          <div className="text-white flex gap-1 text-lg font-mono">
            <h1 className="font-semibold">From : </h1>
            <h1>{email.mail_from}</h1>
          </div>
          <div className="text-white flex gap-1 text-lg font-mono">
            <h1 className="font-semibold">To : </h1>
            <h1>{email.rcpt_to}</h1>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: email.data.html }}
            className="mt-5 text-white flex gap-1 text-lg font-sans"
          ></div>
          <div
            dangerouslySetInnerHTML={{ __html: email.data.html }}
            className="mt-5 text-white flex gap-1 text-lg font-sans"
          >
            {email.data.text}
          </div>
        </div>
      </EmailCard>
    </div>
  );
};

export default EmailPage;
