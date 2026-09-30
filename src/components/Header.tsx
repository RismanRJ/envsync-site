import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog" },
  { href: "https://github.com/RismanRJ/envsync", label: "GitHub" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold text-gray-100">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
          P2P EnvSync
        </Link>
        <ul className="flex items-center gap-4 text-sm text-gray-400 sm:gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-green-400">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
