"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const AnnouncementBanner = () => {
    return (
        <motion.div
            className="relative overflow-hidden bg-gradient-to-r from-banner via-primary/90 to-banner text-banner-text py-2.5 px-4 text-center text-sm cursor-pointer group"
            whileHover={{ backgroundPosition: "200% center" }}
            transition={{ duration: 0.6 }}
        >
            {/* Shimmer overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />

            <div className="relative flex items-center justify-center gap-2">
                {/*<motion.span
                    whileHover={{ rotate: 20, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Sparkles className="w-4 h-4 text-banner-link" />
                </motion.span>*/}
                <span className="font-medium">
                    The privacy‑native monetization layer for Generative AI applications

                    <motion.a
                        href="#"
                        className="ml-1 text-banner-link font-semibold inline-flex items-center gap-1"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </motion.a>
                </span>
            </div>
        </motion.div>
    );
};

export default AnnouncementBanner;
