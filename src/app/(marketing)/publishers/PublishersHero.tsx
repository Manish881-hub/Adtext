"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    { id: "search", label: "AI search", video: "/animation/Ai-search.mp4" },
    { id: "support", label: "Support & sales", video: "/animation/support-speed.mp4" },
    { id: "chat", label: "Chat", video: "/animation/pixel1.mp4" },
    { id: "characters", label: "Virtual AI characters", video: "/animation/deepai.mp4" },
];



export default function PublishersHero() {
    const [activeFeature, setActiveFeature] = useState(features[0]);

    const handleVideoEnd = () => {
        const currentIndex = features.findIndex((f) => f.id === activeFeature.id);
        const nextIndex = (currentIndex + 1) % features.length;
        setActiveFeature(features[nextIndex]);
    };

    return (
        <Section variant="publisher" className="pt-24 pb-12 border-b border-dashed border-neutral-200 dark:border-neutral-800">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                {/* Left: Text Content */}
                <div className="max-w-xl">
                    <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 font-medium">
                        Monetize your traffic with AI ads
                    </h2>
                    <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.05]">
                        The largest ad platform for <br />
                        <span className="text-foreground">Conversational AI publishers</span>
                    </h1>
                    <p className="font-serif text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-light">
                        Transform your GenAI app into a revenue engine with native, AI-powered ads. <br className="hidden md:block" />
                        Monetize your free users with our ad formats powered by LLMs and designed specifically for chat-based interfaces.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/publishers/signup">
                            <Button className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold uppercase tracking-wide shadow-lg shadow-primary/20">
                                Monetize My Traffic <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right: Interactive Video Switcher */}
                <div className="space-y-8">
                    {/* Video Display */}
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-black rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 ring-1 ring-neutral-200 dark:ring-neutral-800 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.video
                                key={activeFeature.id}
                                src={activeFeature.video}
                                autoPlay
                                muted
                                playsInline
                                onEnded={handleVideoEnd}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full object-contain"
                            />
                        </AnimatePresence>
                    </div>

                    {/* Feature Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                        {features.map((feature) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveFeature(feature)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-base font-medium transition-all duration-200",
                                    activeFeature.id === feature.id
                                        ? "bg-[#1C2033] text-white shadow-sm"
                                        : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                                )}
                            >
                                {feature.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom: Brand Grid */}
            <div className="pt-12 border-t border-dashed border-neutral-200 dark:border-neutral-800">
                <div className="grid lg:grid-cols-2">
                    {/* Left: Logos Grid */}
                    <div className="grid grid-cols-4 grid-rows-2 [&>div]:border-r [&>div]:border-b [&>div]:border-dashed [&>div]:border-neutral-200 dark:[&>div]:border-neutral-800 [&>div:nth-child(4n)]:border-r-0 lg:[&>div:nth-child(4n)]:border-r [&>div:nth-last-child(-n+4)]:border-b-0 lg:[&>div:nth-last-child(-n+4)]:border-b-0">
                        {[
                            { name: "CapCut", logo: "/logo/capcut.svg" },
                            { name: "Cosmic Latte", logo: "/logo/cosmiclatte.svg" },
                            { name: "Dorian", logo: "/logo/dorian.svg" },
                            { name: "GOG.com", logo: "/logo/gog.svg" },
                            { name: "Hornet", logo: "/logo/hornet.svg" },
                            { name: "NetEase Games", logo: "/logo/netease.svg" },
                            { name: "CD Projekt", logo: "/logo/cdprojekt.svg" },
                            { name: "SuperScale", logo: "/logo/superscale.svg" },
                        ].map((pub) => (
                            <div key={pub.name} className="flex items-center justify-center p-6 h-32 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                                <img src={pub.logo} alt={`${pub.name} logo`} className="max-w-full max-h-12 opacity-60 hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>

                    {/* Right: Text Grid */}
                    <div className="grid grid-cols-2 grid-rows-2 [&>div]:border-r [&>div]:border-b [&>div]:border-dashed [&>div]:border-neutral-200 dark:[&>div]:border-neutral-800 [&>div:nth-child(2n)]:border-r-0 [&>div:nth-last-child(-n+2)]:border-b-0">
                        {[
                            { label: "AI search", highlight: true },
                            { label: "Virtual AI characters" },
                            { label: "Chat" },
                            { label: "Support & sales" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center justify-center p-8 h-32 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                                {item.highlight ? (
                                    <span className="px-4 py-2 rounded-full bg-[#2F3545] text-white text-sm font-medium">
                                        {item.label}
                                    </span>
                                ) : (
                                    <span className="text-lg text-muted-foreground font-medium text-center">
                                        {item.label}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
