import { AnimatedCard } from "@/components/ui/feature-block-card";
import { Input } from "@/components/ui/input";
import React from "react";

const Page = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-80">
        <div className="flex flex-col rounded-lg shadow-sm shadow-black/5">
          <AnimatedCard>
            <div className="flex">
              <Input
                className="-me-px rounded-e-none shadow-none"
                placeholder="username"
                type="text"
              />
              <span className="z-10 inline-flex items-center rounded-e-lg border border-input bg-background px-3 text-sm text-muted-foreground">
                @hail.prasoon.lol
              </span>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
};

export default Page;
