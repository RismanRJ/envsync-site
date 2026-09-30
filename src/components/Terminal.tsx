export default function Terminal({ lines, title = "terminal" }: { lines: string[]; title?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-green-500/20 bg-black shadow-[0_0_40px_-10px_rgba(34,197,94,0.35)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs text-gray-500">{title}</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-7 text-gray-200">
        {lines.map((l, i) => (
          <div key={i}>
            {l.startsWith("#") ? (
              <span className="text-gray-500">{l}</span>
            ) : (
              <>
                <span className="text-green-500">$ </span>
                {l}
              </>
            )}
          </div>
        ))}
      </pre>
    </div>
  );
}
