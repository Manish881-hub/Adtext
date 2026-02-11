"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp } from "@/hooks/useScrollAnimation";

const stats = [
    {
        title: "10x Higher Engagement",
        description: "Contextual relevance drives significantly better performance. Ads appear exactly when the user is asking about a related topic, feeling like a helpful suggestion rather than an interruption."
    },
    {
        title: "100% Brand Safe",
        description: "Our AI analyzes the sentiment and safety of the conversation in real-time. Your brand only appears in positive, relevant contexts, protecting your reputation automatically."
    },
    {
        title: "Zero Privacy Risk",
        description: "Future-proof your marketing stack. We don't use cookies, device IDs, or personal data. Targeting is based purely on the conversation content, making it fully GDPR and CPRA compliant by default."
    }
];

const AdvertisersStats = () => {
    return (
        <section className="py-20 px-6 lg:px-12 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center mb-16"
                >
                    <span className="label-mono mb-4 block">Performance without surveillance</span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                        Why context beats cookies
                    </h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.title}
                            variants={staggerItem}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="bg-background rounded-2xl p-6 shadow-sm border border-border hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-xl font-semibold text-foreground mb-4">{stat.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AdvertisersStats;
