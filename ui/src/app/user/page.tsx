"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { searchEmails } from "@/app/actions/actions";
import { EmailContent } from "@/hooks/emailParser";
import PaperCard from "@/components/PaperCard";
import EmailPage from "./email";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Copy, Check, RefreshCw } from "lucide-react";

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
  const [copied, setCopied] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const emailAddress = `${query}@hail.prasoon.rs`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const res = await searchEmails(emailAddress);
      setEmails(res.reverse());
    } catch (error) {
      console.error("Failed to fetch emails:", error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    async function fetchEmails() {
      if (query) {
        try {
          const res = await searchEmails(`${query}@hail.prasoon.rs`);
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
            {query}@hail.prasoon.rs
          </span>
        </div>

        <div className="h-px w-full bg-black/10 mb-2" />

        {emails.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-6">
              <Mail size={24} strokeWidth={1.5} className="text-black/30" />
            </div>
            <h2 className="font-serif text-xl text-black italic mb-2">
              Waiting for emails
            </h2>
            <p className="text-black/40 text-sm mb-8 text-center max-w-xs">
              Use this address to sign up for services or receive emails
            </p>

            <div className="w-full max-w-sm bg-black/5 rounded-lg p-4 mb-6">
              <p className="text-xs text-black/40 mb-2 text-center">
                Your temporary email
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-black font-medium text-sm sm:text-base">
                  {emailAddress}
                </span>
                <button
                  onClick={handleCopy}
                  className="p-1.5 hover:bg-black/10 rounded transition-colors"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <Check size={14} className="text-green-600" />
                  ) : (
                    <Copy size={14} className="text-black/40" />
                  )}
                </button>
              </div>
            </div>

            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black/80 transition-colors disabled:opacity-50"
            >
              <RefreshCw
                size={14}
                className={refreshing ? "animate-spin" : ""}
              />
              {refreshing ? "Checking..." : "Check for new emails"}
            </button>

            <div className="mt-10 pt-8 border-t border-black/5 w-full max-w-sm">
              <p className="text-xs text-black/30 text-center mb-4">
                Tips for using temporary email
              </p>
              <ul className="space-y-3 text-xs text-black/40">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-black/20 shrink-0" />
                  <span>Use for newsletter signups, free trials, or one-time verifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-black/20 shrink-0" />
                  <span>Emails arrive instantly — refresh to check</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-black/20 shrink-0" />
                  <span>All emails are deleted after 7 days</span>
                </li>
              </ul>
            </div>
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
