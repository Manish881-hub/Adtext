import { Section } from "@/components/ui/section";
import { Globe, Zap } from "lucide-react";

export default function AdvertisersFeatures() {
    return (
        <Section variant="advertiser" className="py-24 bg-neutral-50/50 dark:bg-neutral-900/20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Video Demo */}
                <div className="relative order-2 lg:order-1">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-50/50 rounded-[2rem] opacity-50 blur-3xl dark:opacity-20"></div>
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 ring-1 ring-neutral-200 dark:ring-neutral-800">
                        <video
                            src="/animation/pixel1.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Right: Narrative */}
                <div className="order-1 lg:order-2">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Ad Format</h2>
                    <h3 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Native to the conversation.
                    </h3>
                    <p className="font-serif text-lg text-muted-foreground mb-8 leading-relaxed font-light">
                        Unlike banner blindness, AI users create context. We insert your message as a helpful recommendation exactly when the user is looking for a solution.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4 p-4 rounded-lg bg-background border border-neutral-200 dark:border-neutral-800 shadow-sm">
                            <Globe className="w-5 h-5 text-primary mt-1" />
                            <div>
                                <h4 className="font-sans font-bold text-foreground text-sm">Semantic Targeting</h4>
                                <p className="font-serif text-sm text-muted-foreground mt-1">Match broadly (e.g., "Travel") or specifically (e.g., "Flights to Tokyo under $800").</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-lg bg-background border border-neutral-200 dark:border-neutral-800 shadow-sm">
                            <Zap className="w-5 h-5 text-primary mt-1" />
                            <div>
                                <h4 className="font-sans font-bold text-foreground text-sm">Zero-Latency Injection</h4>
                                <p className="font-serif text-sm text-muted-foreground mt-1">Ads are served in &lt;50ms without slowing down the AI generation stream.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
