"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface Email {
  id: number;
  date: string;
  mail_from: string;
  rcpt_to: string;
  data: string;
}

const User = () => {
  const searchParam = useSearchParams();
  const router = useRouter();
  const query = searchParam.get("q") || "";

  useEffect(() => {
    if (!query) {
      router.push("/");
    }
  }, [router, query]);

  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);

  return <div>User</div>;
};

export default User;
