export function CTA() {
  return (
    <section className="py-24 px-16 bg-teal text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl font-normal text-white mb-5">Start with a free conversation.</h2>
        <p className="text-lg text-emerald-50 leading-relaxed mb-10">
          90 minutes. Structured thinking about your supply chain challenges. Honest perspectives on where the real value is — whether we work together or not.
        </p>
        <a href="mailto:caio@opsflow-advisory.ch">
          <button className="btn-white">Book your free session → caio@opsflow-advisory.ch</button>
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-navy-mid py-12 px-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-base font-bold text-white">OpsFlow Advisory</span>
        <div className="flex gap-7">
          {["Services", "How it works", "Why OpsFlow", "Contact"].map((l) => (
            <a key={l} href={l === "Contact" ? "mailto:caio@opsflow-advisory.ch" : `#${l.toLowerCase().replace(/ /g, "")}`}
              className="text-teal-muted text-sm no-underline hover:text-white transition-colors">{l}</a>
          ))}
        </div>
        <span className="text-xs text-slate-600">© 2026 OpsFlow Advisory · Nyon, Switzerland · opsflow-advisory.ch</span>
      </div>
    </footer>
  );
}
