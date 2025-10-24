"use client";

import { useEffect, useMemo, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function LoginPage() {
  const [ready, setReady] = useState(false);
  const supabase = useMemo(() => {
    try {
      return createClient();
    } catch (e) {
      return null;
    }
  }, []);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="mb-6 text-center text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Sign in
        </h1>
        {!supabase ? (
          <div className="text-sm text-red-600 dark:text-red-400">
            Missing Supabase environment variables.
          </div>
        ) : ready ? (
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              style: {
                input: { background: "transparent" },
                button: { borderRadius: 9999 },
              },
            }}
            providers={[]}
            magicLink
            redirectTo={
              typeof window !== "undefined"
                ? `${window.location.origin}/dashboard`
                : undefined
            }
          />
        ) : null}
        <div className="mt-4 text-center text-sm text-zinc-600 dark:text-zinc-300">
          Dont have an account? Sign up above.
        </div>
        <div className="mt-6 text-center text-sm">
          <Link className="text-blue-600 hover:underline" href="/">
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
