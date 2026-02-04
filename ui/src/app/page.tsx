"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Clock, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-sm tracking-[0.3em] uppercase text-black/40 mb-8"
          >
            Temporary Email Service
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-black leading-[0.9] tracking-tight mb-8"
          >
            Your inbox,
            <br />
            <span className="italic">ephemeral.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl text-black/50 max-w-xl mx-auto leading-relaxed mb-12"
          >
            Disposable email addresses that protect your privacy.
            No sign-up required. Emails vanish after seven days.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="/mail"
              className="group inline-flex items-center gap-3 bg-black text-cream px-8 py-4 text-sm tracking-wide hover:bg-black/85 transition-colors duration-300"
            >
              Get Started
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-cream-dark/30 blur-[120px] -z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="w-full h-px bg-black/10 mb-20"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                icon: Shield,
                title: "Private",
                description:
                  "Your real email stays hidden. No personal data collected, no tracking, no strings attached.",
              },
              {
                icon: Clock,
                title: "Temporary",
                description:
                  "All emails are automatically deleted after 7 days. No digital footprint left behind.",
              },
              {
                icon: Zap,
                title: "Instant",
                description:
                  "Pick any username and start receiving emails immediately. No registration needed.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <feature.icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-black/30 mb-4 mx-auto md:mx-0"
                />
                <h3 className="font-serif text-2xl text-black mb-3 italic">
                  {feature.title}
                </h3>
                <p className="text-sm text-black/45 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="w-full h-px bg-black/10 mt-20"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl text-black mb-6 italic"
          >
            Simple by design.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-black/45 text-lg leading-relaxed mb-10"
          >
            Choose a username, receive emails. That&apos;s it.
            <br />
            Built with Golang for speed and reliability.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href="/mail"
              className="inline-flex items-center gap-2 text-sm text-black border-b border-black/20 pb-1 hover:border-black transition-colors duration-300"
            >
              Try it now
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-black/5">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-lg text-black">Hail</span>
          <span className="text-xs text-black/30">
            Built by Prasoon Kumar
          </span>
        </div>
      </footer>
    </div>
  );
}
