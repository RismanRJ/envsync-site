import FeatureCard from "@/components/FeatureCard";
import Terminal from "@/components/Terminal";

const GH = "https://github.com/RismanRJ/envsync";

const problems = [
  "Developers share secrets over Slack, email, and sticky notes.",
  "New team members wait hours for the right .env.",
  "One wrong value means hours of debugging.",
  "Secrets are scattered across DMs with no audit trail.",
];

const steps = [
  { icon: "🔐", title: "Create a room", cmd: "envsync create myroom .env", text: "Encrypts and stores your .env in a local vault." },
  { icon: "🔑", title: "Share the key", cmd: "one-time, out-of-band", text: "Give teammates the room key once, over a channel you trust." },
  { icon: "🔄", title: "Sync", cmd: "envsync sync myroom", text: "Peers discover each other on the LAN and exchange an encrypted diff." },
];

const features = [
  ["🚫", "Zero server", "P2P over LAN, no cloud dependency."],
  ["🛡️", "End-to-end encrypted", "AES-256-GCM. Keys never leave your machines."],
  ["✈️", "Offline-first", "Works without internet and syncs when peers appear."],
  ["🧩", "Diff-based sync", "Only changed values transfer, with full history."],
  ["🐙", "GitHub backup", "Optional encrypted backup to a private repo."],
  ["🖥️", "Menu bar app", "Native tray app for macOS (envsync-tray)."],
];

const rows = [
  ["No server needed", "Yes", "No", "No", "N/A"],
  ["Free & open source", "Yes", "Freemium", "No", "N/A"],
  ["Works offline", "Yes", "No", "Partial", "No"],
  ["E2E encrypted", "Yes", "Yes", "Yes", "No"],
  ["Audit trail", "Yes", "Yes", "Yes", "No"],
  ["P2P / no cloud", "Yes", "No", "No", "N/A"],
];

const faqs = [
  ["Is it safe to sync .env files over the network?", "Yes. Every value is encrypted with AES-256-GCM using the room key before it leaves your machine, and the key itself is never transmitted over the network. Peers without the key see only ciphertext."],
  ["What happens if I'm not on the same network as my team?", "EnvSync is LAN-first, so remote peers won't discover each other automatically. Your vault keeps working offline, and you can use the optional encrypted GitHub backup to exchange changes across networks."],
  ["How is this different from HashiCorp Vault?", "Vault is a central secrets server you must deploy, unseal, and operate. EnvSync has no server at all: teammates sync directly, which suits small teams that just need to share .env files safely."],
  ["Can I use this with Docker / CI/CD?", "Yes for local Docker workflows: sync your .env, then point docker compose at it. For CI/CD, keep using your CI provider's secret store; EnvSync targets developer machines."],
  ["What encryption does EnvSync use?", "AES-256-GCM authenticated encryption. Values are encrypted at rest in the local vault and in transit during sync."],
];

const btn = "rounded-lg px-5 py-2.5 text-sm font-medium transition-colors";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-20 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Stop Slacking .env files. <span className="text-green-500">Start syncing them.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          P2P encrypted .env sync. No server. No cloud. Just your team on the same LAN.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a href="#install" className={`${btn} bg-green-500 text-black hover:bg-green-400`}>Get Started</a>
          <a href={GH} className={`${btn} border border-white/15 text-gray-100 hover:border-green-500/50`}>View on GitHub</a>
        </div>
        <div className="mx-auto mt-14 max-w-2xl text-left">
          <Terminal lines={["npm install -g p2p-envsync", "envsync create myroom .env", "envsync sync myroom"]} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">The .env problem every team has</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {problems.map((p) => (
            <li key={p} className="rounded-xl border border-red-500/20 bg-red-500/[0.03] p-5 text-gray-300">{p}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">How it works</h2>
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-xl border border-white/10 p-6">
              <div className="mb-3 text-2xl">{s.icon}</div>
              <h3 className="font-semibold">{i + 1}. {s.title}</h3>
              <code className="my-3 block rounded bg-black px-3 py-2 font-mono text-sm text-green-400">{s.cmd}</code>
              <p className="text-sm text-gray-400">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Features</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([icon, title, text]) => (
            <FeatureCard key={title} icon={icon} title={title}>{text}</FeatureCard>
          ))}
        </div>
      </section>

      <section id="install" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Install</h2>
        <div className="space-y-6">
          <div><p className="mb-2 text-sm text-gray-400">CLI</p><Terminal lines={["npm install -g p2p-envsync"]} /></div>
          <div><p className="mb-2 text-sm text-gray-400">Tray app</p><Terminal lines={["npm install -g p2p-envsync-tray"]} /></div>
          <p className="text-gray-400">VS Code extension: available on the marketplace.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">EnvSync vs alternatives</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.04] text-gray-300">
              <tr>
                {["Feature", "EnvSync", "Doppler", "1Password", ".env in Slack"].map((h, i) => (
                  <th key={h} className={`px-4 py-3 ${i === 1 ? "text-green-400" : ""}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]} className="border-t border-white/10 text-gray-400">
                  {r.map((c, i) => (
                    <td key={i} className={`px-4 py-3 ${i === 0 ? "text-gray-200" : ""} ${i === 1 ? "font-medium text-green-400" : ""}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">FAQ</h2>
        <div className="space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="rounded-xl border border-white/10 p-5">
              <summary className="cursor-pointer font-medium text-gray-100 marker:text-green-500">{q}</summary>
              <p className="mt-3 text-gray-400">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
