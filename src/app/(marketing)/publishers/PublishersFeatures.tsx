"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Type, Square, MessageCircle, Image } from "lucide-react";
import { staggerContainer, staggerItem, fadeInUp, fadeInRight } from "@/hooks/useScrollAnimation";

const formats = [
    {
        icon: Type,
        title: "Inline-Text",
        description: "Inline text ads seamlessly integrated into the LLM conversation."
    },
    {
        icon: Square,
        title: "Product Carousel",
        description: "Scrollable product or brand images shown directly in the chat flow."
    },
    {
        icon: MessageCircle,
        title: "Query suggestion",
        description: "Contextual prompts encouraging users to explore brands or products."
    },
    {
        icon: Image,
        title: "Banner",
        description: "Full-width image ads matched to the conversation context."
    }
];

export default function PublishersFeatures() {
    return (
        <Section variant="publisher" className="py-20 px-6 lg:px-12 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="label-mono mb-4 block">Native formats that respect the conversation</span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                            Ads that feel like recommendations
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                            Our system extracts high‑level intent signals on the client side to create contextual ad slots inside the response. No personal data leaves the device.
                        </p>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="space-y-6"
                        >
                            {formats.map((format) => (
                                <motion.div
                                    key={format.title}
                                    variants={staggerItem}
                                    whileHover={{ x: 8 }}
                                    className="flex gap-4 group cursor-pointer"
                                >
                                    <motion.div
                                        className="flex-shrink-0 w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        <format.icon className="w-5 h-5 text-primary" />
                                    </motion.div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{format.title}</h4>
                                        <p className="text-muted-foreground text-sm">{format.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInRight}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-neutral-900 rounded-2xl p-6 shadow-xl"
                    >
                        {/* Chat demo */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="space-y-4"
                        >
                            <motion.div variants={staggerItem} className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-medium">
                                    U
                                </div>
                                <div className="flex-1">
                                    <p className="text-muted-foreground text-xs mb-1">User</p>
                                    <p className="text-secondary-foreground text-sm">How can I water my plant when I'm away?</p>
                                </div>
                            </motion.div>

                            <motion.div variants={staggerItem} className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xs">
                                    🌱
                                </div>
                                <div className="flex-1">
                                    <p className="text-muted-foreground text-xs mb-1">Plant bot</p>
                                    <p className="text-secondary-foreground text-sm">
                                        You can try to fill a water bottle, poke holes in the cap, invert and bury it slightly in the plant's soil.
                                        The water will slowly drip out, watering your plant.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={staggerItem}
                                whileHover={{ scale: 1.02 }}
                                className="bg-primary/20 border border-primary/30 rounded-lg p-4 ml-11 cursor-pointer"
                            >
                                <p className="text-primary text-xs font-medium mb-1">Suggestion from Adtext</p>
                                <p className="text-secondary-foreground text-sm">
                                    If you don't want to use a DIY solution you can purchase{" "}
                                    <span className="text-primary underline cursor-pointer hover:text-primary/80 transition-colors">Plant Life Support</span>,
                                    an automatic watering system for...
                                </p>
                                <p className="text-muted-foreground text-xs mt-2">amazon.com</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
