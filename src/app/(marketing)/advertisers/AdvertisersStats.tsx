"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp } from "@/hooks/useScrollAnimation";

const stats = [
    {
        title: "1+ Billion daily user impressions",
        description: "GenAI applications generate over 1+ billion daily user impressions while growing 20% month-over-month. Tap into the largest pool of AI-native advertising and achieve massive scale from day one."
    },
    {
        title: "Rates starting from just $3 CPM",
        description: "Get exceptional value compared to other traditional digital channels, maximizing reach without breaking your budget with CPM rates starting from $3."
    },
    {
        title: "2-4x the performance of other channels",
        description: "Thanks to LLMs, GenAI apps can routinely generate 3-5% CTR across a wide spectrum of advertiser categories. With our competitive pricing and high performance, Adtext can deliver 2-4x better CPA or CPI than traditional advertising channels."
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
                    <span className="label-mono mb-4 block">Next-gen ads in the era of AI</span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                        Advertise in AI chatbots
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
