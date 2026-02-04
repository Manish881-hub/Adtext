import { motion } from "framer-motion";
import CategoryPills from "@/components/shared/CategoryPills";

const AdvertisersReach = () => {
    return (
        <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="label-mono mb-4 block">Reach your audience</span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                        Our reach
                    </h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                        We work with a range of publishers, from AI search engines, entertainment apps with virtual AI characters,
                        and social chat platforms to customer support bots and sales apps.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-muted/50 rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground mb-2">Targeting</h4>
                            <p className="text-muted-foreground text-sm">
                                A large and diverse user base, primarily Gen Z and Millennials
                            </p>
                        </div>
                        <div className="bg-muted/50 rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground mb-2">High Engagement</h4>
                            <p className="text-muted-foreground text-sm">
                                Users spend on average over 30 minutes with products in our publisher portfolio,
                                and can be targeted precisely at each stage of their journey
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="space-y-4">
                            <CategoryPills categories={["AI search", "Support & sales"]} activeIndex={0} />
                            <CategoryPills categories={["Chat", "AI characters"]} activeIndex={-1} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AdvertisersReach;