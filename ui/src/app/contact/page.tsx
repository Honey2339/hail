"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Contact = () => {
  const links = [
    {
      name: "Twitter",
      href: "https://x.com/Prasoon2339",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/prasoon-kumar-15299a260/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/Honey2339",
      icon: Github,
    },
  ];

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <motion.h2
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-4xl sm:text-5xl text-black mb-3 italic"
        >
          Get in touch.
        </motion.h2>
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm text-black/40 mb-12"
        >
          Built by Prasoon Kumar
        </motion.p>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center gap-8"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-black/10 rounded-full group-hover:border-black/30 group-hover:bg-black group-hover:text-cream transition-all duration-300">
                <link.icon size={18} strokeWidth={1.5} />
              </div>
              <span className="text-xs text-black/30 group-hover:text-black/60 transition-colors duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
