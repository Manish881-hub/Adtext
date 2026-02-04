import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, BarChart3, TrendingUp, Globe, Zap } from "lucide-react";
import { ChatDemo } from "@/components/sections/demo/chat-demo";
import { Section } from "@/components/ui/section";

export default function AdvertisersPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-advertiser-accent/20">
            {/* Hero: Scale & Reach (High Trust) */}
            <Section variant="advertiser" className="pt-24 pb-20 border-b border-dashed border-neutral-200 dark:border-neutral-800 bg-background text-foreground">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8">
                        <TrendingUp className="w-3 h-3 text-primary" />
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">Yield Report Q1 2026</span>
                    </div>
                    <h1 className="font-sans text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.05]">
                        Reach high-intent audiences in <span className="text-primary">AI conversation</span>.
                    </h1>
                    <p className="font-serif text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light">
                        Adstext leverages real-time semantic understanding to place your brand exactly when users express intent. 2-4x higher conversion than display.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/advertisers/signup">
                            <Button className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md font-sans font-medium uppercase tracking-wide">
                                Start Campaign
                            </Button>
                        </Link>
                        <Button variant="ghost" className="h-12 px-8 text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 font-sans font-medium uppercase tracking-wide">
                            View Media Kit
                        </Button>
                    </div>
                </div>
            </Section>

            {/* Stats Grid - Tabular/Data Dense */}
            <Section variant="advertiser" className="py-12 border-b border-dashed border-neutral-200 dark:border-neutral-800">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-neutral-200 dark:divide-neutral-800">
                    <div className="px-0 md:px-8 first:pl-0">
                        <div className="font-mono text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">Daily Impressions</div>
                        <div className="font-sans text-4xl font-bold text-foreground mb-2">1.2B<span className="text-primary text-lg align-top ml-1">+</span></div>
                        <p className="font-serif text-sm text-muted-foreground leading-relaxed">Across 500+ verified premium AI publishers and utilities.</p>
                    </div>
                    <div className="px-0 md:px-8">
                        <div className="font-mono text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">Avg. CTR</div>
                        <div className="font-sans text-4xl font-bold text-foreground mb-2">3.8%</div>
                        <p className="font-serif text-sm text-muted-foreground leading-relaxed">Compared to 0.3% industry average for display ads.</p>
                    </div>
                    <div className="px-0 md:px-8">
                        <div className="font-mono text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">Brand Safety</div>
                        <div className="font-sans text-4xl font-bold text-foreground mb-2">99.9%</div>
                        <p className="font-serif text-sm text-muted-foreground leading-relaxed">Real-time content filtering and sentiment analysis guardrails.</p>
                    </div>
                </div>
            </Section>

            {/* Interactive Demo Section - "The Product" */}
            <Section variant="advertiser" className="py-24 bg-neutral-50/50 dark:bg-neutral-900/20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Interactive Demo */}
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-50/50 rounded-[2rem] opacity-50 blur-3xl dark:opacity-20"></div>
                        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 ring-1 ring-neutral-200 dark:ring-neutral-800">
                            <ChatDemo className="rounded-xl shadow-none border-none" />
                        </div>
                    </div>

                    {/* Right: Narrative */}
                    <div className="order-1 lg:order-2">
                        <h2 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Ad Format</h2>
                        <h3 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Native to the conversation.
                        </h3>
                        <p className="font-serif text-lg text-muted-foreground mb-8 leading-relaxed font-light">
                            Unlike banner blindness, AI users create context. We insert your message as a helpful recommendation exactly when the user is looking for a solution.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 p-4 rounded-lg bg-background border border-neutral-200 dark:border-neutral-800 shadow-sm">
                                <Globe className="w-5 h-5 text-primary mt-1" />
                                <div>
                                    <h4 className="font-sans font-bold text-foreground text-sm">Semantic Targeting</h4>
                                    <p className="font-serif text-sm text-muted-foreground mt-1">Match broadly (e.g., "Travel") or specifically (e.g., "Flights to Tokyo under $800").</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-lg bg-background border border-neutral-200 dark:border-neutral-800 shadow-sm">
                                <Zap className="w-5 h-5 text-primary mt-1" />
                                <div>
                                    <h4 className="font-sans font-bold text-foreground text-sm">Zero-Latency Injection</h4>
                                    <p className="font-serif text-sm text-muted-foreground mt-1">Ads are served in &lt;50ms without slowing down the AI generation stream.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Case Study / Trust Section */}
            <Section variant="advertiser" className="py-24 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="font-sans text-2xl font-bold text-foreground">Partner Success</h2>
                    <Link href="#" className="font-sans text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1">
                        Read all case studies <span>→</span>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Case Study 1 */}
                    <div className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                        <div className="flex items-center gap-2 mb-6 text-muted-foreground">
                            <span className="font-mono uppercase text-xs font-bold tracking-wider">Travel</span>
                            <span>•</span>
                            <span className="font-serif text-xs">Expedia Partner</span>
                        </div>
                        <blockquote className="font-serif text-xl font-medium text-foreground mb-6 leading-relaxed">
                            "The intent signal from AI chat is incredibly strong. CPA dropped by 45% compared to our search campaigns."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                            <div>
                                <div className="font-sans font-bold text-foreground text-sm">Sarah Chen</div>
                                <div className="font-serif text-xs text-muted-foreground">VP Marketing, TravelCo</div>
                            </div>
                        </div>
                    </div>

                    {/* Case Study 2 */}
                    <div className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                        <div className="flex items-center gap-2 mb-6 text-muted-foreground">
                            <span className="font-mono uppercase text-xs font-bold tracking-wider">SaaS</span>
                            <span>•</span>
                            <span className="font-serif text-xs">Productivity</span>
                        </div>
                        <blockquote className="font-serif text-xl font-medium text-foreground mb-6 leading-relaxed">
                            "We reached developers exactly when they were asking about cloud infrastructure. The relevance is unmatched."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                            <div>
                                <div className="font-sans font-bold text-foreground text-sm">James Miller</div>
                                <div className="font-serif text-xs text-muted-foreground">Growth Lead, CloudScale</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
