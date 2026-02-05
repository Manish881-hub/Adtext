"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const reachData = [
    {
        title: "Targeting",
        description: "A large and diverse user base, primarily Gen Z and Millennials"
    },
    {
        title: "High Engagement",
        description: "Users spend on average over 30 minutes with products in our publisher portfolio, and can be targeted precisely at each stage of their journey"
    }
];

const features = [
    { id: "search", label: "AI search", video: "/animation/Ai-search.mp4" },
    { id: "support", label: "Support & sales", video: "/animation/support-speed.mp4" },
    { id: "chat", label: "Chat", video: "/animation/pixel1.mp4" },
    { id: "characters", label: "AI characters", video: "/animation/deepai.mp4" },
];

const AdvertisersReach = () => {
    const [activeFeature, setActiveFeature] = useState(features[0]);

    return (
        <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Content (Compromised width) */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="label-mono mb-4 block">Reach your audience</span>
                            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                                Our reach
                            </h2>
                            <p className="text-muted-foreground">
                                We work with a range of publishers, from AI search engines, entertainment apps with virtual AI characters,
                                and social chat platforms to customer support bots and sales apps.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid gap-8"
                        >
                            {reachData.map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={staggerItem}
                                    className=""
                                >
                                    <h4 className="label-mono text-primary mb-2">{item.title}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Video Switcher (Larger area) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInRight}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 space-y-8"
                    >
                        {/* Video Display - Larger Aspect Ratio to match screenshot */}
                        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-white rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 ring-1 ring-neutral-200 dark:ring-neutral-800 flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.video
                                    key={activeFeature.id}
                                    src={activeFeature.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full object-contain"
                                />
                            </AnimatePresence>
                        </div>

                        {/* Feature Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center">
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AdvertisersReach;