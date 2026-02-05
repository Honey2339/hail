"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const [username, setUsername] = React.useState("");
  const [focused, setFocused] = React.useState(false);

  const handleOnNext = () => {
    if (username.trim()) {
      router.push(`/user?q=${encodeURIComponent(username.toLowerCase())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleOnNext();
    }
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-black/40 hover:text-black/70 transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={14} />
          Back
        </Link>

        <h1 className="font-serif text-4xl sm:text-5xl text-black mb-3 italic">
          Choose your address.
        </h1>
        <p className="text-black/45 text-sm mb-10 leading-relaxed">
          Pick any username and start receiving emails instantly.
          Your inbox will be active for 7 days.
        </p>

        <div className="space-y-6">
          <div
            className={`flex items-center border-b-2 transition-colors duration-300 pb-3 ${
              focused ? "border-black" : "border-black/10"
            }`}
          >
            <input
              className="flex-1 bg-transparent text-black text-lg outline-none placeholder:text-black/25 font-sans"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={handleKeyDown}
              type="text"
              autoFocus
            />
            <span className="text-black/30 text-sm ml-2 whitespace-nowrap">
              @hail.prasoon.rs
            </span>
          </div>

          <button
            onClick={handleOnNext}
            disabled={!username.trim()}
            className="group w-full flex items-center justify-center gap-3 bg-black text-cream py-4 text-sm tracking-wide hover:bg-black/85 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Continue
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-black/5">
          <ul className="space-y-4 text-sm text-black/40 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 rounded-full bg-black/20 shrink-0" />
              <span>
                Disposable email protects your real address from spam,
                advertising, and malware. Anonymous and free.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 rounded-full bg-black/20 shrink-0" />
              <span>
                Emails are automatically deleted after{" "}
                <span className="text-black/70 font-medium">7 days</span>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 rounded-full bg-black/20 shrink-0" />
              <span>
                Use it for forum registrations, Wi-Fi sign-ups, or any
                service that requires an email.
              </span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
