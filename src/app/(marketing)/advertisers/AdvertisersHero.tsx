import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ChatMockup from "@/components/shared/ChatMockup";
import CategoryPills from "@/components/shared/CategoryPills";

const AdvertisersHero = () => {
    return (
        <section className="py-16 lg:py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="label-mono mb-4 block">Target your ads with more context</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
                            The largest ad platform for AI chatbots
                        </h1>
                        <p className="text-lg text-foreground mb-2">
                            Adtext leverages LLMs to deliver unique ad formats tailored to GenAI applications.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            Tap into the next major consumer wave and begin advertising in GenAI apps with Adtext.
                        </p>
                        <Button size="lg" className="group font-mono uppercase tracking-wider text-sm">
                            Get started
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>

                    <div className="relative flex justify-center lg:justify-end">
                        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-4 absolute -right-12 top-1/2 -translate-y-1/2 opacity-50 pointer-events-none z-0">
                            <div className="space-y-4">
                                <CategoryPills categories={["CapCut", "Cosmic Latte"]} activeIndex={-1} />
                                <CategoryPills categories={["Dorian", "GOG"]} activeIndex={-1} />
                            </div>
                            <div className="space-y-4 pt-12">
                                <CategoryPills categories={["Hornet", "NetEase"]} activeIndex={-1} />
                                <CategoryPills categories={["CD Projekt", "SuperScale"]} activeIndex={-1} />
                            </div>
                            <div className="space-y-4 pt-24 hidden xl:block">
                                <CategoryPills categories={["AI Search", "Virtual Characters"]} activeIndex={-1} className="bg-primary/5 border-primary/20 text-primary" />
                                <CategoryPills categories={["Chat", "Support & Sales"]} activeIndex={-1} className="bg-primary/5 border-primary/20 text-primary" />
                            </div>
                        </div>
                        <ChatMockup variant="advertisers" className="relative z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvertisersHero;