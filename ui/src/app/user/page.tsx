"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { searchEmails } from "@/app/actions/actions";
import { EmailContent } from "@/hooks/emailParser";
import Card from "@/components/Card";
import PaperButton from "@/components/PaperButton";
import PaperCard from "@/components/PaperCard";

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
        <div className="flex items-center w-full">
          <div className="mr-auto">
            <PaperButton label="Back" />
          </div>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl text-white">
            {query}@hail.prasoon.lol
          </h1>
        </div>
        <div className="h-[2px] w-full mt-2 bg-zinc-300"></div>
        <div className="flex flex-col items-center mt-5 space-y-6 w-full max-h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
          <PaperCard
            title="[Development] 385929 is your verification code"
            body="385929 is your OTP code for DocSol. Do not share this with anyone. It was requested at 03 February 2025, 13:29 UTC. If you did not request this, please ignore this email."
            date="03/02/2025"
          />
          <PaperCard
            title="[Development] 385929 is your verification code"
            body="385929 is your OTP code for DocSol. Do not share this with anyone. It was requested at 03 February 2025, 13:29 UTC. If you did not request this, please ignore this email."
            date="03/02/2025"
          />
          <PaperCard
            title="[Development] 385929 is your verification code"
            body="385929 is your OTP code for DocSol. Do not share this with anyone. It was requested at 03 February 2025, 13:29 UTC. If you did not request this, please ignore this email."
            date="03/02/2025"
          />
          <PaperCard
            title="[Development] 385929 is your verification code"
            body="385929 is your OTP code for DocSol. Do not share this with anyone. It was requested at 03 February 2025, 13:29 UTC. If you did not request this, please ignore this email."
            date="03/02/2025"
          />
          <PaperCard
            title="[Development] 385929 is your verification code"
            body="385929 is your OTP code for DocSol. Do not share this with anyone. It was requested at 03 February 2025, 13:29 UTC. If you did not request this, please ignore this email."
            date="03/02/2025"
          />
          <PaperCard
            title="[Development] 385929 is your verification code"
            body="385929 is your OTP code for DocSol. Do not share this with anyone. It was requested at 03 February 2025, 13:29 UTC. If you did not request this, please ignore this email."
            date="03/02/2025"
          />
        </div>
      </Card>
    </div>
  );
};

export default User;
