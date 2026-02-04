"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { searchEmails } from "@/app/actions/actions";
import { EmailContent } from "@/hooks/emailParser";
import PaperCard from "@/components/PaperCard";
import EmailPage from "./email";
import { motion } from "framer-motion";
import { ArrowLeft, Mail } from "lucide-react";

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
      <div className="flex flex-col items-center justify-center h-screen bg-cream">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-black/40 text-sm tracking-wide"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  if (selectedEmailId != null) {
    return <EmailPage />;
  }

  const handleBack = () => {
    router.push("/mail");
  };

  return (
    <div className="min-h-screen bg-cream pt-28 pb-16 px-6">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm text-black/40 hover:text-black/70 transition-colors duration-300 mb-10"
        >
          <ArrowLeft size={14} />
          Back
        </button>

        <div className="flex items-baseline justify-between mb-2">
          <h1 className="font-serif text-3xl sm:text-4xl text-black italic">
            Inbox
          </h1>
          <span className="text-xs text-black/30">
            {query}@hail.prasoon.lol
          </span>
        </div>

        <div className="h-px w-full bg-black/10 mb-2" />

        {emails.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Mail size={24} strokeWidth={1} className="text-black/15 mb-4" />
            <p className="text-black/30 text-sm">No emails yet</p>
          </div>
        ) : (
          <div className="divide-y divide-black/5">
            {emails.map((email, i) => (
              <motion.div
                key={email.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <PaperCard
                  title={email.data.subject}
                  body={email.data.text}
                  date={email.data.date.toISOString()}
                  onClick={() => router.push(`/user?q=${query}&id=${email.id}`)}
                />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

const User = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen bg-cream">
          <span className="text-black/40 text-sm">Loading...</span>
        </div>
      }
    >
      <UserContent />
    </Suspense>
  );
};

export default User;
