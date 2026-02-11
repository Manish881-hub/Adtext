"use client";

import { motion } from "framer-motion";

const logos = [
    { name: "CapCut", icon: "✂️" },
    { name: "Cosmic Latte", icon: "☕" },
    { name: "Dorian", icon: "🎭" },
    { name: "GOG", icon: "🎮" },
    { name: "Hornet", icon: "🐝" },
    { name: "NetEase", icon: "🎯" },
    { name: "CD Projekt", icon: "🎲" },
    { name: "SuperScale", icon: "📈" },
];

const LogoStrip = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-12 border-y border-border overflow-hidden"
        >
            <div className="flex animate-scroll-logos">
                {[...logos, ...logos].map((logo, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center justify-center min-w-[180px] px-8 group cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="text-2xl mr-2 group-hover:scale-125 transition-transform">{logo.icon}</span>
                        <span className="font-semibold text-muted-foreground text-lg whitespace-nowrap group-hover:text-foreground transition-colors">
                            {logo.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default LogoStrip;
