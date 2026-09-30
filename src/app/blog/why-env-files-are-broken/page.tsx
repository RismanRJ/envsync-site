import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why .env Files Are Broken (And How to Fix Them)",
  description:
    "Env file management is a mess: secrets in Slack, stale values, no audit trail. Learn dotenv best practices and how P2P sync fixes the developer workflow.",
  alternates: { canonical: "/blog/why-env-files-are-broken" },
};

const h2 = "mb-3 mt-10 text-2xl font-bold";
const p = "mb-4 leading-7 text-gray-400";

export default function Post() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">Why .env Files Are Broken (And How to Fix Them)</h1>
      <p className="mt-2 text-sm text-gray-500">By RismanRJ</p>

      <p className={`${p} mt-8`}>
        The .env file is the most widely used config format in modern development, and the least managed. It is
        gitignored by design, so it lives outside every workflow your team already trusts. Env file management
        ends up being a chat message away from a leak.
      </p>

      <h2 className={h2}>The way most teams share secrets</h2>
      <p className={p}>
        A new developer joins. Someone pastes a .env into Slack, or emails it, or drops it in a shared doc. It works,
        so nobody questions it. But that secret now lives in message history forever, searchable by anyone with
        access, and impossible to revoke or audit. Real secrets management should not depend on scrolling back through
        a DM.
      </p>

      <h2 className={h2}>Drift, onboarding and debugging</h2>
      <p className={p}>
        Files drift. One teammate rotates an API key, another keeps using the old one, and the bug reports start.
        A single wrong value can cost hours of debugging because nothing tells you what changed or when. Onboarding
        is slow too: new hires wait for whoever knows the right file to come online.
      </p>

      <h2 className={h2}>Why central tools are not always the answer</h2>
      <p className={p}>
        Hosted secrets managers solve much of this, but they add an account, a server, a bill, and an outage
        dependency for what is often a five-person team sharing a handful of variables. Many dotenv best practices
        stop at &quot;never commit it&quot;, leaving the actual sharing problem unsolved.
      </p>

      <h2 className={h2}>A peer-to-peer developer workflow</h2>
      <p className={p}>
        EnvSync takes a different approach. Your .env is encrypted with AES-256-GCM into a local vault. Teammates
        share a room key once, out-of-band, then sync directly over the LAN. There is no server to run and no cloud
        to trust. Only changed values move between peers, and every change is recorded in a history you can inspect.
      </p>
      <p className={p}>
        Because it is offline-first, it keeps working on a plane or behind a flaky office network, and it syncs the
        moment peers appear. An optional encrypted backup to a private GitHub repo covers remote teammates.
      </p>

      <h2 className={h2}>Try it</h2>
      <p className={p}>
        Install with <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-green-400">npm install -g p2p-envsync</code>,
        create a room from your .env, and stop pasting secrets into chat. It is free, open source and MIT licensed.
      </p>
    </article>
  );
}
