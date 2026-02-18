"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
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
        <Section variant="advertiser" className="py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
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
                            Reach users when intent is highest
                        </motion.span>
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Drive Clicks and <br />  Conversions from <br/> AI Apps
                        </motion.h1>
                        <motion.p
                            className="text-lg text-foreground mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Show ads that align with what users are talking about — and turn conversations into actions.
                        </motion.p>
                        <motion.p
                            className="text-lg text-muted-foreground mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Bid on openRTB-compatible requests enriched with deep semantic context, not personal data.
                        </motion.p>
<motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Link href="/advertisers/contact">
                                <Button size="lg" className="group font-mono uppercase tracking-wider text-sm">
                                    Get started
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link href="https://Demo.adtext.org" target="_blank">
                                <Button size="lg" className="group font-mono uppercase tracking-wider text-sm ml-4">
                                    See Live Placement
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>


                </div>
            </div>
        </Section>
    );
};

export default AdvertisersHero;