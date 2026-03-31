const testimonials = [
  {
    text: "The diagnostic session alone gave us more clarity than 6 months of internal discussions. The action plan was concrete, prioritised, and our team could execute it immediately.",
    initials: "VP",
    name: "VP Supply Chain",
    role: "Industrial manufacturer · Switzerland",
  },
  {
    text: "OpsFlow identified €800K in recoverable working capital in 2 weeks. The investment paid back in the first month. We're now on a retainer for ongoing advisory.",
    initials: "CO",
    name: "COO",
    role: "Mid-market manufacturer · Germany",
  },
  {
    text: "Senior-only delivery means no ramp-up time — they understood our business in the first session and delivered a full S&OP redesign in 6 weeks.",
    initials: "SC",
    name: "Supply Chain Director",
    role: "FMCG company · France",
  },
];

export default function Testimonials() {
  return (
    <section id="cases" className="py-24 px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="section-tag">Cases</p>
        <h2 className="section-title">Results that speak<br />for themselves.</h2>
        <p className="section-sub">First client cases will be published after initial engagements. Placeholders reflect realistic outcomes based on 17 years of EMEA experience.</p>
        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="testi-card">
              <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest px-2 py-1 rounded mb-4 uppercase">Coming soon</span>
              <p className="text-sm text-gray-500 leading-relaxed italic mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-teal flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{t.initials}</div>
                <div>
                  <p className="text-sm font-bold text-navy">{t.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
