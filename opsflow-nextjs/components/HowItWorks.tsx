const steps = [
  {
    num: "1",
    title: "Free 90-min diagnostic session",
    desc: "A structured conversation about your supply chain reality. Honest thinking about your challenges. You walk away with clarity on your top priorities whether we work together or not.",
    price: "Free — no commitment required",
  },
  {
    num: "2",
    title: "Rapid Assessment",
    desc: "2-week structured diagnostic. Your top 3 priorities ranked by P&L impact. A 90-day action plan ready to execute. Executive summary presentation for your leadership team.",
    price: "Starting at CHF 8,500 — fixed price",
  },
  {
    num: "3",
    title: "Full engagement",
    desc: "Senior-led implementation of the action plan. 4–12 weeks depending on scope. Your team owns the results. No dependency created — we build capabilities, not reliance.",
    price: "CHF 22–80K depending on scope",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-16 bg-teal-pale/30">
      <div className="max-w-7xl mx-auto">
        <p className="section-tag">How it works</p>
        <h2 className="section-title">From first conversation<br />to measurable results.</h2>
        <p className="section-sub">Three steps. Fixed timelines. No open-ended engagements.</p>
        <div className="grid grid-cols-[1fr_48px_1fr_48px_1fr] items-start gap-0 mt-14">
          {steps.map((s, i) => (
            <>
              <div key={s.num} className="px-2">
                <div className="w-14 h-14 rounded-full bg-teal flex items-center justify-center text-white text-2xl font-serif mb-6">{s.num}</div>
                <h3 className="text-lg font-bold text-navy mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                <p className="text-xs text-teal font-semibold mt-4">{s.price}</p>
              </div>
              {i < steps.length - 1 && (
                <div key={`arrow-${i}`} className="flex items-start justify-center pt-5 text-teal text-3xl">→</div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
