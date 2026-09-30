import type { Metadata } from "next";
import Terminal from "@/components/Terminal";

export const metadata: Metadata = {
  title: "EnvSync Documentation — CLI Reference & Setup Guide",
  description:
    "Quick start, CLI command reference (create, join, sync, invite, backup-init, status, reveal, history), tray app usage and the EnvSync security model.",
  alternates: { canonical: "/docs" },
};

const commands: [string, string][] = [
  ["envsync create <room> <file>", "Create a room from a .env file and store it encrypted in the local vault."],
  ["envsync join <room>", "Join an existing room using the room key shared by a teammate."],
  ["envsync sync <room>", "Discover peers on the LAN and exchange encrypted diffs."],
  ["envsync invite <room>", "Show the room key and details to share with a new teammate."],
  ["envsync backup-init <room>", "Set up optional encrypted backup to a private GitHub repo."],
  ["envsync status", "List rooms, peers and sync state."],
  ["envsync reveal <room>", "Decrypt and print the current values of a room."],
  ["envsync history <room>", "Show the change history for a room."],
];

const h2 = "mb-4 mt-12 text-2xl font-bold";
const p = "mb-4 leading-7 text-gray-400";

export default function Docs() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">Documentation</h1>
      <p className={`${p} mt-3`}>Everything you need to sync .env files with your team.</p>

      <h2 className={h2}>Quick start</h2>
      <Terminal lines={[
        "npm install -g p2p-envsync",
        "envsync create myroom .env",
        "# share the room key with a teammate, then on their machine:",
        "envsync join myroom",
        "envsync sync myroom",
      ]} />

      <h2 className={h2}>CLI reference</h2>
      <div className="space-y-3">
        {commands.map(([c, d]) => (
          <div key={c} className="rounded-xl border border-white/10 p-4">
            <code className="font-mono text-sm text-green-400">{c}</code>
            <p className="mt-1 text-sm text-gray-400">{d}</p>
          </div>
        ))}
      </div>

      <h2 className={h2}>Tray app</h2>
      <p className={p}>The tray app puts sync status in your macOS menu bar so rooms stay up to date in the background.</p>
      <Terminal lines={["npm install -g p2p-envsync-tray"]} />

      <h2 className={h2}>Security model</h2>
      <ul className="list-disc space-y-2 pl-6 text-gray-400">
        <li>Values are encrypted with AES-256-GCM using the room key.</li>
        <li>The room key is shared once, out-of-band, and never sent over the network.</li>
        <li>Peers are discovered on the local network only; there is no central server.</li>
        <li>GitHub backups contain only ciphertext.</li>
        <li>Anyone holding the room key can read the room, so rotate the room if a key leaks.</li>
      </ul>
    </article>
  );
}
