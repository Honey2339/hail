"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-b border-black/5"
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between gap-4 text-left"
      >
        <h3 className="text-base text-black/70 transition-colors duration-200 hover:text-black">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-black/25 shrink-0"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.25, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.2 },
              },
            }}
          >
            <p className="pb-6 text-sm text-black/40 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Faq() {
  const faqs: Omit<FAQItemProps, "index">[] = [
    {
      question: "Why delete temporary emails after 7 days?",
      answer:
        "Temporary emails are deleted after 7 days to ensure privacy and security, prevent storage overload, and comply with best practices for temporary data retention.",
    },
    {
      question: "Can I use the temporary email for account verification?",
      answer:
        "Yes, you can use the temporary email for one-time verifications, but some services may block temporary email domains. If an issue arises, consider using a different provider.",
    },
    {
      question: "Is my temporary email address unique?",
      answer:
        "Yes, each generated email address is unique for your session. However, once it expires, the same address might be assigned to another user.",
    },
    {
      question: "Can I recover a deleted email?",
      answer:
        "No, once an email is deleted, it is permanently removed from our system. We do not store backups for security and privacy reasons.",
    },
    {
      question: "How does a temporary email service work?",
      answer:
        "When you visit our site, we generate a random email address for you. Any emails sent to that address appear in your inbox, and after a set period, they are automatically deleted.",
    },
    {
      question: "Can I send emails using a temporary email address?",
      answer:
        "No, our service is designed only for receiving emails, not for sending them. This is to prevent misuse and ensure compliance with email service policies.",
    },
  ];

  return (
    <section className="w-full">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="font-serif text-4xl text-black mb-2 italic">
          Questions & Answers
        </h2>
        <p className="text-sm text-black/40 mb-12">
          Everything you need to know about Hail.
        </p>
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
