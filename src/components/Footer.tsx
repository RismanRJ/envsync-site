import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
        <p>MIT License &middot; Built by RismanRJ</p>
        <ul className="flex gap-6">
          <li><a href="https://github.com/RismanRJ/envsync" className="hover:text-green-400">GitHub</a></li>
          <li><a href="https://www.npmjs.com/package/p2p-envsync" className="hover:text-green-400">npm</a></li>
          <li><Link href="/docs" className="hover:text-green-400">Docs</Link></li>
        </ul>
      </div>
    </footer>
  );
}
