"use client";

import { AnimatedCard } from "@/components/ui/feature-block-card";
import { Input } from "@/components/ui/input";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const [username, setUsername] = React.useState("");
  const handleOnNext = () => {
    if (username.trim()) {
      router.push(`/user?q=${encodeURIComponent(username.toLowerCase())}`);
    }
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96">
        <div className="flex flex-col space-y-6 rounded-lg shadow-sm shadow-black/5">
          <AnimatedCard>
            <div className="flex flex-col space-y-4">
              <div className="flex">
                <Input
                  className="-me-px rounded-e-none shadow-none"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                />
                <span className="z-10 inline-flex items-center rounded-e-lg border border-input bg-background px-3 text-sm text-muted-foreground">
                  @hail.prasoon.lol
                </span>
              </div>
              <RainbowButton onClick={handleOnNext}>Next</RainbowButton>
            </div>
          </AnimatedCard>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm">
            <ul className="space-y-4 text-sm font-semibold font-sans text-zinc-300">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-500"></span>
                <span>
                  Disposable temporary email protects your real email address
                  from spam, advertising mailings, malwares. It&apos;s anonymous
                  and free.
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-500"></span>
                <span>
                  Mails will be deleted after{" "}
                  <span className="text-red-500">7 days</span>
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-500"></span>
                <span>
                  Many forums, Wi-Fi owners, websites and blogs ask visitors to
                  register before they can view content, post comments or
                  download something. Temp-Mail - is most advanced throwaway
                  email service that helps you avoid spam and stay safe.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
