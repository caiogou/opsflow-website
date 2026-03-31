"use client";
import { LogoIcon } from "./LogoIcon";

export default function Navbar() {
  return (
    <nav className="bg-navy sticky top-0 z-50 border-b border-navy-mid">
      <div className="max-w-7xl mx-auto px-16 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline">
          <LogoIcon size={36} />
          <span className="text-lg font-bold text-white tracking-tight">OpsFlow Advisory</span>
        </a>
        <div className="flex items-center gap-9">
          <a href="#services" className="text-teal-muted text-sm no-underline hover:text-white transition-colors">Services</a>
          <a href="#how" className="text-teal-muted text-sm no-underline hover:text-white transition-colors">How it works</a>
          <a href="#why" className="text-teal-muted text-sm no-underline hover:text-white transition-colors">Why OpsFlow</a>
          <a href="#cases" className="text-teal-muted text-sm no-underline hover:text-white transition-colors">Cases</a>
          <a href="mailto:caio@opsflow-advisory.ch">
            <button className="bg-teal text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-teal-light transition-colors">
              Book a session
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
