import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function App() {
  return (
    <main
      id="coming-soon-container"
      className="min-h-screen w-full bg-white text-neutral-900 flex flex-col items-center justify-center p-6 sm:p-10 select-none antialiased"
    >
      <div className="max-w-xl w-full text-center flex flex-col items-center space-y-8">
        {/* Subtle Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-600 text-xs font-medium tracking-wide">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Under Construction</span>
        </div>

        {/* Main Message */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
            Hi, I am Subir
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-md mx-auto">
            My website is coming soon... till then visit my Behance
          </p>
        </div>

        {/* Primary CTA */}
        <div className="pt-2">
          <a
            id="behance-cta-link"
            href="https://www.behance.net/subir_mondal"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm sm:text-base rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            <span>Visit Behance</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </main>
  );
}
