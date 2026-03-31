const services = [
  {
    title: "Planning Excellence",
    desc: "S&OP and IBP design, demand and supply integration, governance and drumbeat. We build planning processes that generate decisions — not just reports. Exception and priority management included.",
    tags: ["S&OP", "IBP", "Demand Planning", "Exception Management"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" fill="#1a9e8f"/>
        <rect x="14" y="3" width="7" height="7" rx="1" fill="#1a9e8f" opacity=".5"/>
        <rect x="3" y="14" width="7" height="7" rx="1" fill="#1a9e8f" opacity=".4"/>
        <rect x="14" y="14" width="7" height="7" rx="1" fill="#1a9e8f" opacity=".2"/>
      </svg>
    ),
  },
  {
    title: "Inventory Optimisation",
    desc: "SKU segmentation (ABC/XYZ), safety stock redesign, replenishment logic and DRP. Free up working capital without degrading service levels — with measurable P&L impact.",
    tags: ["ABC/XYZ", "Safety Stock", "Working Capital", "DRP"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="13" width="4" height="9" rx="1" fill="#1a9e8f"/>
        <rect x="8" y="9" width="4" height="13" rx="1" fill="#1a9e8f" opacity=".7"/>
        <rect x="14" y="5" width="4" height="17" rx="1" fill="#1a9e8f" opacity=".5"/>
        <rect x="20" y="7" width="4" height="15" rx="1" fill="#1a9e8f" opacity=".3"/>
      </svg>
    ),
  },
  {
    title: "Supply Risk & Resilience",
    desc: "Tier 1 and 2 risk mapping, criticality scoring, dual-sourcing strategy and 90-day mitigation roadmap. Know your risks before they become disruptions.",
    tags: ["Risk Mapping", "Dual Sourcing", "Mitigation Plan"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#1a9e8f" strokeWidth="2"/>
        <path d="M12 7v5l3 3" stroke="#1a9e8f" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Distribution & Shipment Planning",
    desc: "Cost-to-serve modelling, network scenario analysis and shipment optimisation. Build a distribution network that fits your business today — and scales with it tomorrow.",
    tags: ["Network Design", "Cost-to-serve", "Shipment Optimisation"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 12h4l3-7 4 14 3-7h4" stroke="#1a9e8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-16">
      <div className="max-w-7xl mx-auto">
        <p className="section-tag">What we do</p>
        <h2 className="section-title">Four practice areas.<br />One goal: margin impact.</h2>
        <p className="section-sub">We work where the biggest P&L opportunities are — not where the noise is.</p>
        <div className="grid grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="svc-card">
              <div className="w-12 h-12 bg-teal-pale rounded-lg flex items-center justify-center mb-6">{s.icon}</div>
              <h3 className="text-lg font-bold text-navy mb-3">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {s.tags.map((t) => <span key={t} className="svc-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
