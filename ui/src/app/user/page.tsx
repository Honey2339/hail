"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { searchEmails } from "@/app/actions/actions";
import { EmailContent } from "@/hooks/emailParser";
import Card from "@/components/Card";
import PaperButton from "@/components/PaperButton";
import PaperCard from "@/components/PaperCard";
import EmailPage from "./email";

export interface Email {
  id: number;
  date: string;
  mail_from: string;
  rcpt_to: string;
  data: EmailContent;
}

const UserContent = () => {
  const searchParam = useSearchParams();
  const router = useRouter();
  const query = searchParam.get("q") ?? "";
  const selectedEmailId = searchParam.get("id");

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
          setEmails(res.reverse());
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

  if (selectedEmailId != null) {
    return <EmailPage />;
  }

  const handleBack = () => {
    router.push("/mail");
  };
  const handleOnClick = (id: any) => {
    router.push(`/user?q=${query}&id=${id}`);
  };

  if (emails.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Card>
          <div className="flex items-center w-full">
            <div className="mr-auto" onClick={handleBack}>
              <PaperButton label="Back" />
            </div>
            <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl text-white">
              {query}@hail.prasoon.lol
            </h1>
          </div>
          <div className="h-[2px] w-full mt-2 bg-zinc-300"></div>
          <div className="flex flex-col items-center mt-5 space-y-6 w-full max-h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
            <div className="text-center text-white text-2xl">
              No emails found
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card>
        <div className="flex items-center w-full">
          <div className="mr-auto" onClick={handleBack}>
            <PaperButton label="Back" />
          </div>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl text-white">
            {query}@hail.prasoon.lol
          </h1>
        </div>
        <div className="h-[2px] w-full mt-2 bg-zinc-300"></div>
        <div className="flex flex-col items-center mt-5 space-y-6 w-full max-h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
          {emails.map((email) => (
            <PaperCard
              key={email.id}
              title={email.data.subject}
              body={email.data.text}
              date={email.data.date.toISOString()}
              onClick={() => handleOnClick(email.id)}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

const User = () => {
  return (
    <Suspense fallback={<div className="text-white text-2xl">Loading...</div>}>
      <UserContent />
    </Suspense>
  );
};

export default User;
