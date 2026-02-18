"use client";

import { motion } from "framer-motion";
import { PublisherContactForm } from "./PublisherContactForm";
import { AdvertiserContactForm } from "./AdvertiserContactForm";

export { PublisherContactForm, AdvertiserContactForm };

export default function ContactForms({ defaultTab = "publishers" }: { defaultTab?: "publishers" | "advertisers" }) {
    return (
        <section className="py-20 px-6 lg:px-12 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <span className="label-mono mb-3 block">Get in touch</span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
                        Let's work together
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Fill in the form below and our team will reach out within 1–2 business days.
                    </p>
                </motion.div>

                <div className="hidden lg:grid grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-card border border-border rounded-2xl p-8 shadow-sm"
                    >
                        <div className="mb-8">
                            <span className="label-mono block mb-2 text-publisher-accent">Publishers</span>
                            <h3 className="text-xl font-semibold text-foreground">Monetize your audience</h3>
                            <p className="text-sm text-muted-foreground mt-1">Integrate premium AI-native ad formats into your product.</p>
                        </div>
                        <PublisherContactForm />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-card border border-border rounded-2xl p-8 shadow-sm"
                    >
                        <div className="mb-8">
                            <span className="label-mono block mb-2 text-advertiser-accent">Advertisers</span>
                            <h3 className="text-xl font-semibold text-foreground">Reach the right audience</h3>
                            <p className="text-sm text-muted-foreground mt-1">Tap into the fastest-growing AI consumer wave.</p>
                        </div>
                        <AdvertiserContactForm />
                    </motion.div>
                </div>

                <div className="lg:hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-card border border-border rounded-2xl p-6 shadow-sm"
                    >
                        <div className="mb-6">
                            <span className="label-mono block mb-2 text-publisher-accent">Publishers</span>
                            <h3 className="text-xl font-semibold text-foreground">Monetize your audience</h3>
                        </div>
                        <PublisherContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
