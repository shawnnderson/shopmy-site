"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { site } from "@/config/site";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push(params.get("from") || "/");
      router.refresh();
    } else {
      setError("Incorrect password");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 text-center">
      <a href="#top" className="font-brand text-4xl leading-none text-paper">
        {site.brandName}
      </a>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoFocus
        className="w-full rounded border border-paper/30 bg-transparent px-4 py-3 text-paper placeholder-paper/50 focus:outline-none focus:ring-2 focus:ring-volt"
      />
      {error && <p className="text-sm text-red-300">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-volt px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink disabled:opacity-50"
      >
        {loading ? "Checking..." : "Enter"}
      </button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-pine px-6">
      <Suspense>
        <LoginForm />
      </Suspense>
    </main>
  );
}
