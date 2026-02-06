"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


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

const mockupVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 40 },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut" as const
        }
    }
};

const AdvertisersHero = () => {
    return (
        <section className="py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={heroVariants}
                    >
                        <motion.span
                            className="label-mono mb-4 block"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Target your ads with more context
                        </motion.span>
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            The largest ad platform for AI chatbots
                        </motion.h1>
                        <motion.p
                            className="text-lg text-foreground mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Adstext leverages LLMs to deliver unique ad formats tailored to GenAI applications.
                        </motion.p>
                        <motion.p
                            className="text-lg text-muted-foreground mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Tap into the next major consumer wave and begin advertising in GenAI apps with Adstext.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Button size="lg" className="group font-mono uppercase tracking-wider text-sm">
                                Get started
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
};

export default AdvertisersHero;