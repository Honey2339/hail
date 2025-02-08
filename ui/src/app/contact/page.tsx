import Card from "@/components/Card";
import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="text-white flex h-screen items-center justify-center p-6">
      <div className="max-w-lg w-full bg-zinc-800 p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-semibold mb-6">Connect With Me</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://x.com/Prasoon2339"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition"
          >
            <Twitter size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/prasoon-kumar-15299a260/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/Honey2339"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition"
          >
            <Github size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
