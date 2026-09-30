import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "P2P EnvSync Blog",
  description: "Articles on env file management, secrets management and developer workflow from the P2P EnvSync team.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">P2P EnvSync Blog</h1>
      <p className="mt-3 text-gray-400">More posts on secrets management and developer workflow are coming soon.</p>
      <Link
        href="/blog/why-env-files-are-broken"
        className="mt-10 block rounded-xl border border-white/10 p-6 transition-colors hover:border-green-500/40"
      >
        <h2 className="text-xl font-semibold text-gray-100">Why .env Files Are Broken (And How to Fix Them)</h2>
        <p className="mt-2 text-sm text-gray-400">The hidden costs of sharing dotenv files, and how P2P sync fixes them.</p>
      </Link>
    </div>
  );
}
