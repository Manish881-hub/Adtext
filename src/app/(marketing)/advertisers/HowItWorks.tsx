import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scan, Target, Sparkles } from "lucide-react";

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
        <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="label-mono mb-4 block">How it works</span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                        Inside Adstext
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                                <step.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Button className="group font-mono uppercase tracking-wider text-sm">
                        Contact us
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;