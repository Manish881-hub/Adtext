import { Section } from "@/components/ui/section";

export default function PublishersFeatures() {
    return (
        <Section variant="publisher" className="bg-background">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Left: Text Content */}
                <div className="pt-8">
                    <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 font-medium">
                        Mix & Match Formats that fit your app
                    </h2>
                    <h3 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-12">
                        Our ad formats
                    </h3>

                    <div className="space-y-10 group">
                        <div className="border-l-4 border-primary pl-6 cursor-pointer">
                            <h4 className="font-sans text-lg font-bold text-foreground mb-2">Text</h4>
                            <p className="font-serif text-muted-foreground leading-relaxed font-light">Simple inline text ad displayed as part of a streaming response from the LLM.</p>
                        </div>
                        <div className="border-l-4 border-transparent pl-6 hover:border-neutral-300 cursor-pointer transition-colors">
                            <h4 className="font-sans text-lg font-bold text-foreground mb-2">Box</h4>
                            <p className="font-serif text-muted-foreground leading-relaxed font-light">An ad displayed in the conversation flow, with an optional image of a product or brand for added visibility.</p>
                        </div>
                        <div className="border-l-4 border-transparent pl-6 hover:border-neutral-300 cursor-pointer transition-colors">
                            <h4 className="font-sans text-lg font-bold text-foreground mb-2">Query Suggestion</h4>
                            <p className="font-serif text-muted-foreground leading-relaxed font-light">Suggestions to continue the conversation with a brand or product.</p>
                        </div>
                        <div className="border-l-4 border-transparent pl-6 hover:border-neutral-300 cursor-pointer transition-colors">
                            <h4 className="font-sans text-lg font-bold text-foreground mb-2">Banner</h4>
                            <p className="font-serif text-muted-foreground leading-relaxed font-light">Full-width visual ad contextual to the conversation.</p>
                        </div>
                    </div>
                </div>

                {/* Right: Dark Chat Preview (Plant Example from Screenshot) */}
                <div className="bg-[#0F172A] rounded-xl p-6 md:p-8 min-h-[500px] flex flex-col justify-center shadow-2xl">
                    <div className="space-y-6 max-w-md mx-auto w-full font-sans">
                        {/* User */}
                        <div>
                            <div className="text-slate-400 text-xs mb-2">User</div>
                            <div className="bg-[#3B82F6] text-white p-4 rounded-2xl rounded-tl-none inline-block">
                                How can I water my plant when I'm away?
                            </div>
                        </div>
                        {/* Bot */}
                        <div className="w-full">
                            <div className="text-slate-400 text-xs mb-2">Plant bot</div>
                            <div className="bg-white text-[#0F172A] p-4 rounded-2xl rounded-tl-none inline-block w-full mb-4">
                                You can try to fill a water bottle, poke holes in the cap, invert and bury it slightly in the plant's soil. The water will slowly drip out, watering your plant.
                            </div>
                        </div>

                        {/* Box Ad Format - Example of Ad styling, can customize later */}
                        <div className="bg-[#E2E8F0] p-4 rounded-xl flex items-center gap-4">
                            <div className="w-20 h-20 bg-[#D4B996] rounded-lg flex items-center justify-center text-[#5D4037] font-bold text-xs text-center p-2 leading-tight">
                                PLANT LIFE SUPPORT 🪴
                            </div>
                            <div>
                                <div className="font-bold text-[#0F172A] text-sm mb-1">Plant Life Support</div>
                                <div className="text-xs text-slate-500">amazon.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
