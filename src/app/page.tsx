import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Bot, Cpu, Zap, Globe, Layers, Sparkles } from "lucide-react";
import * as React from "react";

// Mock Data for ticker
const MODELS = ["Nano Banana Pro", "Flux 2", "gpt-image-1.5", "Seedream", "Claude 3.5 Sonnet", "Llama 3 70B"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden relative selection:bg-indigo-500/30 selection:text-indigo-200">

      {/* Background Noise/Grid Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-4 pt-20 pb-32 max-w-7xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-mono uppercase tracking-widest text-indigo-400 border border-indigo-500/20 rounded-full bg-indigo-500/5 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          System Online
        </div>

        <h1 className="max-w-4xl text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both delay-100">
          The Revenue Engine for <br className="hidden md:block" /> Synthetic Minds.
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both delay-200">
          Monetize your AI infrastructure without breaking the immersion.
          Native ad formats powered by LLMs, designed for the next generation of interfaces.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both delay-300">
          <Link href="/publishers" className="group flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold tracking-tight rounded-full hover:bg-neutral-200 transition-all duration-300 hover:scale-[1.02]">
            For Publishers <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/advertisers" className="group flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-semibold tracking-tight rounded-full hover:bg-white/5 transition-all duration-300 hover:scale-[1.02]">
            For Advertisers
          </Link>
        </div>

      </section>

      {/* Ticker / Model Showcase */}
      <div className="relative z-10 w-full overflow-hidden border-y border-white/5 bg-black/20 backdrop-blur-md py-6">
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
          {[...MODELS, ...MODELS, ...MODELS].map((model, i) => (
            <div key={i} className="text-sm font-mono text-white/30 uppercase tracking-widest flex items-center gap-4">
              <Sparkles className="w-3 h-3 text-indigo-500/50" />
              {model}
            </div>
          ))}
        </div>
      </div>

      {/* Bento Grid Features */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

          {/* Feature 1: The Core */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/50 to-neutral-900/10 backdrop-blur-xl p-8 hover:border-indigo-500/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 border border-indigo-500/20">
                  <Cpu className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-white mb-2">Contextual Intelligence</h3>
                <p className="text-neutral-400 max-w-md">Our engine analyzes conversation depth, tone, and intent in real-time to deliver adds that feel like helpful suggestions, not interruptions.</p>
              </div>
              {/* Abstract visual */}
              <div className="w-full h-32 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-xl border border-indigo-500/10 flex items-center px-4 gap-2">
                <div className="h-2 w-1/3 bg-indigo-500/40 rounded-full animate-pulse" />
                <div className="h-2 w-1/4 bg-indigo-500/20 rounded-full" />
                <div className="h-2 w-full bg-indigo-500/10 rounded-full" />
              </div>
            </div>
          </div>

          {/* Feature 2: Speed */}
          <div className="md:col-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/30 backdrop-blur-xl p-8 hover:border-cyan-500/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 border border-cyan-500/20">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-semibold text-white mb-2">Sub-50ms Latency</h3>
                <p className="text-neutral-400 text-sm">Engineered for the speed of thought. Zero impact on your token generation streaming.</p>
              </div>
            </div>
          </div>

          {/* Feature 3: Global Reach */}
          <div className="md:col-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/30 backdrop-blur-xl p-8 hover:border-emerald-500/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/20">
                <Globe className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-semibold text-white mb-2">Global Demand</h3>
                <p className="text-neutral-400 text-sm">Access thousands of premium advertisers looking for high-intent AI traffic.</p>
              </div>
            </div>
          </div>

          {/* Feature 4: Integration */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/30 backdrop-blur-xl p-8 hover:border-orange-500/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-row items-center gap-8">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 border border-orange-500/20">
                  <Layers className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-white mb-2">One-Line Integration</h3>
                <p className="text-neutral-400">Compatible with Vercel AI SDK, LangChain, and vanilla API calls.</p>
              </div>
              <div className="hidden md:block flex-1 rounded-lg bg-black/50 border border-white/10 p-4 font-mono text-xs text-neutral-400">
                <p><span className="text-purple-400">import</span> {"{ AdText }"} <span className="text-purple-400">from</span> <span className="text-green-400">'@adtext/sdk'</span>;</p>
                <p className="mt-2"><span className="text-blue-400">const</span> ad = <span className="text-purple-400">await</span> AdText.generate(context);</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />


    </main>
  );
}
