"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { AdvertiserContactForm } from "@/components/shared/AdvertiserContactForm";

export default function AdvertisersContactPage() {
    return (
        <Section variant="advertiser" className="py-20 px-6 lg:px-12 min-h-screen">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="label-mono mb-3 block text-advertiser-accent">For Advertisers</span>
                    <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
                        Let's work together
                    </h1>
                    <p className="text-muted-foreground">
                        Fill in the form below and our team will reach out within 1–2 business days.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm"
                >
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-foreground">Reach the right audience</h2>
                        <p className="text-sm text-muted-foreground mt-1">
                            Tap into the fastest-growing AI consumer wave.
                        </p>
                    </div>
                    <AdvertiserContactForm />
                </motion.div>
            </div>
        </Section>
    );
}
