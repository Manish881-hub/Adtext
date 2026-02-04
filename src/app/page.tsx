import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      <div className="z-10 max-w-5xl w-full items-center justify-center text-center lg:flex flex-col gap-12">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full dark:bg-indigo-900/30 dark:text-indigo-400">
            AI-Native Ad Platform
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
            Adtext
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            The contextual ad platform built for AI chatbots. <br />
            Choose your path below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-8">
          <Link href="/publishers" className="group relative block p-8 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 hover:border-indigo-500/50 hover:ring-1 hover:ring-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-md text-left">
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
              <ArrowRight className="w-5 h-5 text-indigo-500" />
            </div>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900 dark:text-white">Publishers</h2>
            <p className="text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed">
              Monetize your AI chat, search, or generation app with relevant, non-intrusive ads.
            </p>
            <div className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-2">
              Start monetizing <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link href="/advertisers" className="group relative block p-8 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 hover:border-cyan-500/50 hover:ring-1 hover:ring-cyan-500/50 transition-all duration-300 shadow-sm hover:shadow-md text-left">
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
              <ArrowRight className="w-5 h-5 text-cyan-500" />
            </div>
            <h2 className="text-2xl font-bold mb-3 text-neutral-900 dark:text-white">Advertisers</h2>
            <p className="text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed">
              Reach high-intent users right inside their AI conversations with semantic targeting.
            </p>
            <div className="text-cyan-600 dark:text-cyan-400 font-medium flex items-center gap-2">
              Start campaigning <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>

      <footer className="mt-20 text-neutral-400 text-sm">
        &copy; {new Date().getFullYear()} Adtext. Built for AI-native advertising.
      </footer>
    </main>
  );
}
