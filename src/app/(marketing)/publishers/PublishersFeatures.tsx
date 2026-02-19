"use client";

import React from "react";
import { Section } from "@/components/ui/section";
import { motion, AnimatePresence } from "framer-motion";
import { Type, Square, MessageCircle, Image } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

const formats = [
    {
        id: "text",
        icon: Type,
        title: "Inline-Text",
        description: "Inline text ads seamlessly integrated into the LLM conversation.",
        duration: 5000
    },
    {
        id: "carousel",
        icon: Square,
        title: "Product Carousel",
        description: "Scrollable product or brand images shown directly in the chat flow.",
        duration: 6000
    },
    {
        id: "query",
        icon: MessageCircle,
        title: "Query Suggestion",
        description: "Contextual prompts encouraging users to explore brands or products.",
        duration: 5000
    },
    {
        id: "banner",
        icon: Image,
        title: "Banner",
        description: "Full-width image ads matched to the conversation context.",
        duration: 5500
    }
];

const TextDemo = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="space-y-4"
    >
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-3"
        >
            <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xs font-medium shrink-0">
                U
            </div>
            <div className="flex-1">
                <p className="text-zinc-400 text-xs mb-1">User</p>
                <p className="text-white text-sm">What&apos;s the best protein powder for muscle gain?</p>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-3"
        >
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs shrink-0">
                🤖
            </div>
            <div className="flex-1">
                <p className="text-zinc-400 text-xs mb-1">AI Assistant</p>
                <p className="text-white text-sm">
                    For muscle gain, look for whey protein isolate with high BCAA content.
                    Aim for 20-30g per serving post-workout.
                </p>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-zinc-800/80 border border-orange-500/30 rounded-lg p-3 ml-11"
        >
            <p className="text-orange-400 text-xs font-medium mb-1">Sponsored</p>
            <p className="text-zinc-200 text-sm">
                Try <span className="text-orange-400 underline cursor-pointer hover:text-orange-300">Optimum Nutrition Gold Standard</span> — 24g protein per scoop, 5.5g BCAAs.
            </p>
        </motion.div>
    </motion.div>
);

const CarouselDemo = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="space-y-4"
    >
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-3"
        >
            <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xs font-medium shrink-0">
                U
            </div>
            <div className="flex-1">
                <p className="text-zinc-400 text-xs mb-1">User</p>
                <p className="text-white text-sm">Show me running shoes under $100</p>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-3"
        >
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs shrink-0">
                🏃
            </div>
            <div className="flex-1">
                <p className="text-zinc-400 text-xs mb-1">AI Assistant</p>
                <p className="text-white text-sm mb-3">Here are some great options within your budget:</p>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="ml-11"
        >
            <div className="flex gap-2 overflow-x-auto pb-2">
                {[
                    { name: "Nike Pegasus", price: "$89", color: "bg-orange-500" },
                    { name: "Adidas Boost", price: "$95", color: "bg-blue-500" },
                    { name: "Saucony Ride", price: "$79", color: "bg-green-500" }
                ].map((item, i) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + i * 0.15 }}
                        className="flex-shrink-0 w-28 bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700"
                    >
                        <div className={`h-20 ${item.color} flex items-center justify-center`}>
                            <span className="text-white text-2xl">👟</span>
                        </div>
                        <div className="p-2">
                            <p className="text-white text-xs font-medium truncate">{item.name}</p>
                            <p className="text-orange-400 text-xs">{item.price}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <p className="text-zinc-500 text-xs mt-2">← Swipe to see more →</p>
        </motion.div>
    </motion.div>
);

const QueryDemo = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="space-y-4"
    >
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-3"
        >
            <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xs font-medium shrink-0">
                U
            </div>
            <div className="flex-1">
                <p className="text-zinc-400 text-xs mb-1">User</p>
                <p className="text-white text-sm">I want to start cooking healthier meals</p>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-3"
        >
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs shrink-0">
                👨‍🍳
            </div>
            <div className="flex-1">
                <p className="text-zinc-400 text-xs mb-1">AI Assistant</p>
                <p className="text-white text-sm">
                    Great choice! I can help you plan healthy meals. Would you like recipe suggestions?
                </p>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="ml-11 space-y-2"
        >
            <p className="text-zinc-400 text-xs mb-2">Suggested for you:</p>
            {[
                "Compare meal kit services",
                "Find air fryer deals",
                "Browse healthy cookbooks"
            ].map((query, i) => (
                <motion.button
                    key={query}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="block w-full text-left px-3 py-2 bg-zinc-800/60 border border-orange-500/20 rounded-lg text-sm text-zinc-300 hover:border-orange-500/40 hover:bg-zinc-800 transition-all"
                >
                    <span className="text-orange-400 mr-2">→</span>
                    {query}
                </motion.button>
            ))}
        </motion.div>
    </motion.div>
);

const BannerDemo = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="space-y-4"
    >
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-3"
        >
            <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xs font-medium shrink-0">
                U
            </div>
            <div className="flex-1">
                <p className="text-zinc-400 text-xs mb-1">User</p>
                <p className="text-white text-sm">What laptop should I buy for video editing?</p>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-3"
        >
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs shrink-0">
                💻
            </div>
            <div className="flex-1">
                <p className="text-zinc-400 text-xs mb-1">AI Assistant</p>
                <p className="text-white text-sm mb-3">
                    For video editing, you&apos;ll want at least 16GB RAM and a dedicated GPU...
                </p>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
            className="ml-11"
        >
            <div className="relative rounded-xl overflow-hidden border border-orange-500/30 bg-gradient-to-r from-zinc-800 to-zinc-900">
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-orange-500/20 rounded text-orange-400 text-xs">
                    Sponsored
                </div>
                <div className="p-4 flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🖥️</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-white font-semibold text-sm">MacBook Pro M3</p>
                        <p className="text-zinc-400 text-xs">Up to 36GB unified memory</p>
                        <p className="text-orange-400 text-sm font-medium mt-1">From $1,999</p>
                    </div>
                </div>
                <div className="px-4 pb-3">
                    <button className="w-full py-2 bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium rounded-lg transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
        </motion.div>
    </motion.div>
);

const demoComponents: Record<string, React.FC> = {
    text: TextDemo,
    carousel: CarouselDemo,
    query: QueryDemo,
    banner: BannerDemo
};

export default function PublishersFeatures() {
    const [active, setActive] = useState("text");
    const [progress, setProgress] = useState(0);
    const [restartKey, setRestartKey] = useState(0);
    const progressRef = useRef(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const isPausedRef = useRef(false);

    const currentFormat = formats.find(f => f.id === active);
    const duration = currentFormat?.duration || 5000;

    const handleMouseEnter = useCallback(() => {
        isPausedRef.current = true;
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        isPausedRef.current = false;
        setRestartKey(k => k + 1);
    }, []);

    useEffect(() => {
        if (isPausedRef.current) return;

        progressRef.current = 0;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setProgress(0);

        intervalRef.current = setInterval(() => {
            progressRef.current += 100 / (duration / 50);
            
            if (progressRef.current >= 100) {
                progressRef.current = 100;
                setProgress(100);
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
            } else {
                setProgress(progressRef.current);
            }
        }, 50);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [active, duration, restartKey]);

    useEffect(() => {
        if (progress >= 100 && !isPausedRef.current) {
            const currentIndex = formats.findIndex(f => f.id === active);
            const nextIndex = (currentIndex + 1) % formats.length;
            const timeout = setTimeout(() => {
                setActive(formats[nextIndex].id);
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [progress, active]);

    const handleFormatClick = (id: string) => {
        setActive(id);
    };

    return (
        <Section variant="publisher" className="py-20 px-6 lg:px-12 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="label-mono mb-4 block">Native formats that respect the conversation</span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                            Ads that feel like recommendations
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                            Our system extracts high‑level intent signals on the client side to create contextual ad slots inside the response. No personal data leaves the device.
                        </p>

                        <div
                            className="space-y-2"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {formats.map((format) => {
                                const isActive = active === format.id;
                                const Icon = format.icon;

                                return (
                                    <motion.div
                                        key={format.id}
                                        onClick={() => handleFormatClick(format.id)}
                                        className="relative cursor-pointer group"
                                        whileHover={{ x: 4 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeBar"
                                                    className="absolute left-0 top-0 h-full w-[3px] bg-orange-500 rounded-r"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                        </AnimatePresence>

                                        <div className={`relative pl-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-orange-500/5' : 'hover:bg-muted/50'}`}>
                                            <div className="flex items-start gap-4">
                                                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isActive ? 'bg-orange-500/10 border border-orange-500/30' : 'bg-background border border-border group-hover:border-orange-500/20'}`}>
                                                    <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-orange-500' : 'text-primary group-hover:text-orange-500'}`} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className={`font-semibold mb-1 transition-colors ${isActive ? 'text-orange-500' : 'text-foreground group-hover:text-orange-500'}`}>
                                                        {format.title}
                                                    </h4>
                                                    <p className="text-muted-foreground text-sm">{format.description}</p>
                                                </div>
                                            </div>

                                            {isActive && (
                                                <div className="absolute left-0 right-0 bottom-0 h-[1.5px] bg-neutral-700/40">
                                                    <motion.div
                                                        className="h-full bg-orange-500 shadow-[0_0_6px_rgba(255,115,0,0.6)]"
                                                        style={{ width: `${progress}%` }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-neutral-900 rounded-2xl p-6 shadow-xl min-h-[400px] flex flex-col"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-zinc-800">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="ml-2 text-zinc-500 text-xs">AI Chat Demo</span>
                        </div>

                        <div className="flex-1 relative">
                            <AnimatePresence mode="wait">
                                <div key={`${active}-${restartKey}`}>
                                    {React.createElement(demoComponents[active])}
                                </div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}