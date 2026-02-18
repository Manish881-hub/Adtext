"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ArrowRight, Scan, Target, Sparkles } from "lucide-react";
import { staggerContainer, staggerItem, fadeInUp } from "@/hooks/useScrollAnimation";

const steps = [
    {
        icon: Scan,
        title: "Real-time analysis",
        description: "Our LLMs analyze each user session in real time, without the need for keywords."
    },
    {
        icon: Target,
        title: "Contextual matching",
        description: "We align ads with user context to show the most relevant products, brands, or entertainment content."
    },
    {
        icon: Sparkles,
        title: "Native ad generation",
        description: "Our LLMs create contextual, native advertisements tailored to each user session, ensuring maximum relevance and engagement."
    }
];

const HowItWorks = () => {
    return (
        <Section variant="advertiser" className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center mb-16"
                >
                    <span className="label-mono mb-4 block">How it works</span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                        Inside Adtext
                    </h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-8 mb-12"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            variants={staggerItem}
                            whileHover={{ y: -8 }}
                            className="text-center group relative"
                        >
                            <motion.div
                                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <step.icon className="w-8 h-8 text-primary" />
                            </motion.div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

                            {/* Step connector line */}
                            {index < steps.length - 1 && (
                                <motion.div
                                    className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-y-1/2"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                                />
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <Link href="/advertisers/contact">
                        <Button className="group font-mono uppercase tracking-wider text-sm">
                            Contact us
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </Section>
    );
};

export default HowItWorks;