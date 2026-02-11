"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import LogoStrip from "./LogoStrip";

const features = [
    { id: "search", label: "AI search", video: "/animation/Ai-search.mp4" },
    { id: "support", label: "Support & sales", video: "/animation/support-speed.mp4" },
    { id: "chat", label: "Chat", video: "/animation/pixel1.mp4" },
    { id: "characters", label: "Virtual AI characters", video: "/animation/deepai.mp4" },
];

const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const
        }
    }
};



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
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={heroVariants}
                    className="max-w-xl"
                >
                    <motion.span
                        className="label-mono mb-4 block"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Monetize your traffic with AI ads
                    </motion.span>
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        The monetization layer for privacy-first AI platforms
                    </motion.h1>
                    <motion.p
                        className="text-lg text-foreground mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        We enable Generative AI platforms to monetize through non‑intrusive, contextual sponsored content — without tracking users.
                    </motion.p>
                    <motion.p
                        className="text-lg text-muted-foreground mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Avoid cookies, fingerprinting, and cross‑session tracking. Just pure, intent-based monetization designed for chat interfaces.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link href="/publishers/signup">
                            <Button
                                size="lg"
                                className="group font-mono uppercase tracking-wider text-sm"
                            >
                                Monetize my traffic
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>

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
            <div className="pt-12">
                <LogoStrip />
            </div>
        </Section>
    );
}
