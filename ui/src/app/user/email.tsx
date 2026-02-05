"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { searchEmails } from "@/app/actions/actions";
import { EmailContent } from "@/hooks/emailParser";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

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
          const res = await searchEmails(`${query}@hail.prasoon.rs`);
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
    return (
      <div className="flex items-center justify-center h-screen bg-cream">
        <span className="text-black/40 text-sm">Loading...</span>
      </div>
    );
  }

  if (!email) {
    return (
      <div className="flex items-center justify-center h-screen bg-cream">
        <span className="text-black/40 text-sm">Email not found</span>
      </div>
    );
  }

  const handleBack = () => {
    router.push(`/user?q=${query}`);
  };

  return (
    <div className="min-h-screen bg-cream pt-28 pb-16 px-6">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm text-black/40 hover:text-black/70 transition-colors duration-300 mb-10"
        >
          <ArrowLeft size={14} />
          Back to inbox
        </button>

        <h1 className="font-serif text-3xl sm:text-4xl text-black mb-6 italic">
          {email.data.subject}
        </h1>

        <div className="flex flex-col gap-1 mb-8 pb-6 border-b border-black/5">
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-black/30 w-10">From</span>
            <span className="text-sm text-black/70">{email.mail_from}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-black/30 w-10">To</span>
            <span className="text-sm text-black/70">{email.rcpt_to}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-black/30 w-10">Date</span>
            <span className="text-sm text-black/70">
              {new Date(email.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: email.data.html }}
          className="prose prose-sm max-w-none text-black/70 leading-relaxed break-words [&_a]:text-black [&_a]:underline [&_img]:max-w-full"
        />
      </motion.div>
    </div>
  );
};

export default EmailPage;
