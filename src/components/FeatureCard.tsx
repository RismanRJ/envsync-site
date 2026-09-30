export default function FeatureCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-green-500/40">
      <div className="mb-3 text-2xl">{icon}</div>
      <h3 className="mb-2 font-semibold text-gray-100">{title}</h3>
      <p className="text-sm leading-6 text-gray-400">{children}</p>
    </div>
  );
}
