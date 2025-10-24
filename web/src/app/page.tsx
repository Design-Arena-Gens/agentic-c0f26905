import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-6 py-24 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
          Supabase Auth Example
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          Use the login page to sign in and access the dashboard.
        </p>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="rounded-full bg-black px-5 py-2 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Login
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full border border-zinc-300 px-5 py-2 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
