import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-24 pb-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600 dark:border-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-400 mb-8">
                    <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2 animate-pulse"></span>
                    Now in public beta
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-8">
                    Monetize your AI app <br className="hidden lg:block" />
                    <span className="text-indigo-600 relative">
                        without hurting UX
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-indigo-200 dark:text-indigo-900/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                        </svg>
                    </span>
                </h1>
                <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Seamlessly integrate relevant ads into your chat, search, or generation interface. Increase revenue while keeping users engaged.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/publishers/signup">
                        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 h-14 text-lg rounded-full shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20">
                            Get started as a publisher
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="px-8 h-14 text-lg rounded-full border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900">
                        View demo
                    </Button>
                </div>
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] -z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
                <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
            </div>
        </section>
    );
}
