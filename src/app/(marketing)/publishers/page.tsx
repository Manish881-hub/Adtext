import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PublisherChatDemo } from "@/components/sections/demo/publisher-chat-demo";
import { Section } from "@/components/ui/section";

const CodeSnippet = ({ className }: { className?: string }) => (
    <div className={cn("font-mono text-xs md:text-sm leading-relaxed bg-[#0F172A] text-slate-300 p-6 md:p-8 rounded-xl border border-slate-800 overflow-x-auto shadow-2xl relative", className)}>
        <div className="absolute top-4 right-4 flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        </div>
        <div className="mb-4">
            <span className="text-pink-400">import</span> {"{ AdsProvider, Ad }"} <span className="text-pink-400">from</span> <span className="text-cyan-300">"@adstext/sdk"</span>
        </div>
        <div className="mb-4">
            <span className="text-pink-400">const</span> <span className="text-blue-300">App</span> = () ={">"} {"{"} <br />
            &nbsp;&nbsp;<span className="text-slate-500">// Stored messages</span> <br />
            &nbsp;&nbsp;<span className="text-pink-400">const</span> [messages, setMessages] = useState{"<"}Message[]{">"}([])
        </div>
        <div>
            &nbsp;&nbsp;<span className="text-pink-400">return</span> ( <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"<"}<span className="text-yellow-300">AdsProvider</span> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">token</span>=<span className="text-cyan-300">'YOUR_TOKEN'</span> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">messages</span>={"{"}messages{"}"} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{">"} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{/* Rest of your application */}"} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<"}<span className="text-yellow-300">Ad</span> <span className="text-blue-300">format</span>=<span className="text-cyan-300">"inline"</span> /&gt; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"</"}<span className="text-yellow-300">AdsProvider</span>{">"} <br />
            &nbsp;&nbsp;); <br />
            {"}"};
        </div>
    </div>
);

export default function PublishersPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-publisher-accent/20">
            {/* 1. Hero Section (Left) + Mobile Mockup (Right) */}
            <Section variant="publisher" className="pt-12 pb-12 md:pb-24 border-b border-dashed border-neutral-200 dark:border-neutral-800">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="max-w-xl">
                        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 font-medium">
                            Monetize your traffic with AI ads
                        </h2>
                        <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.05]">
                            The largest ad platform for <br />
                            <span className="text-foreground">Conversational AI publishers</span>
                        </h1>
                        <p className="font-serif text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-light">
                            Transform your GenAI app into a revenue engine with native, AI-powered ads. <br className="hidden md:block" />
                            Monetize your free users with our ad formats powered by LLMs and designed specifically for chat-based interfaces.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/publishers/signup">
                                <Button className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold uppercase tracking-wide shadow-lg shadow-primary/20">
                                    Monetize My Traffic <span className="ml-2">→</span>
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Interactive Mobile Mockup (Right) */}
                    <div className="relative lg:sticky lg:top-24 flex justify-center lg:justify-end h-fit">
                        <PublisherChatDemo />
                    </div>
                </div>
            </Section>

            {/* 2. Logo Grid */}
            <Section variant="default" className="py-12 border-b border-dashed border-neutral-200 dark:border-neutral-800">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-opacity duration-500">
                    {/* Placeholder Logos imitating reference logos */}
                    {["CapCut", "Cosmic Latte", "Dorian", "GOG", "Hornet", "NetEase", "CD Projekt", "Superscale"].map((brand) => (
                        <div key={brand} className="flex justify-center items-center h-8">
                            <span className="font-sans font-bold text-xl text-foreground text-center leading-none">{brand}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 3. Ad Formats (Left) vs Examples (Right) */}
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

            {/* 4. Integration Section (Dark) */}
            <Section variant="publisher" className="bg-[#1E293B] text-white border-b border-slate-700">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="order-2 lg:order-2">
                        <CodeSnippet />
                    </div>
                    <div className="order-1 lg:order-1">
                        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 mb-6 font-medium">
                            How it works
                        </h2>
                        <h3 className="font-sans text-4xl md:text-5xl font-bold text-white mb-8">
                            Integrate and <br className="hidden md:block" /> customize
                        </h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="font-sans text-xl font-bold text-white mb-2">Integrate in minutes</h4>
                                <p className="font-serif text-slate-400 leading-relaxed">Skip the complexity of AI integration. Our battle-tested NPM package lets you add GenAI-powered ads to your React or React Native app with just a few lines of code.</p>
                            </div>
                            <div>
                                <h4 className="font-sans text-xl font-bold text-white mb-2">Customize in seconds</h4>
                                <p className="font-serif text-slate-400 leading-relaxed">From tweaks to complete makeovers, take full control of how AI ads appear in your application.</p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <Link href="/contact">
                                <Button className="h-12 px-8 rounded-full bg-white text-neutral-900 hover:bg-neutral-200 font-bold text-xs uppercase tracking-wide">
                                    Contact Us <span className="ml-2">→</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 5. Partner CTA (Two columns) */}
            <Section fullWidth container={false} className="p-0 py-0 md:py-0">
                <div className="grid md:grid-cols-2 w-full">
                    {/* Publisher CTA */}
                    <div className="bg-primary py-24 px-8 text-center flex flex-col items-center justify-center">
                        <h2 className="font-sans text-2xl font-bold text-primary-foreground mb-2">Partner with us</h2>
                        <p className="font-serif text-primary-foreground/80 mb-8 max-w-sm">Get in touch, and we will set you up with Adstext.</p>
                        <Link href="/contact">
                            <Button className="h-12 px-8 rounded-full bg-background text-primary hover:bg-background/90 font-bold text-xs uppercase tracking-wide">
                                Contact Us <span className="ml-2">→</span>
                            </Button>
                        </Link>
                    </div>
                    {/* Advertiser CTA */}
                    <div className="bg-[#4338CA] py-24 px-8 text-center flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>
                        <h2 className="font-sans text-2xl font-bold text-white mb-8">Are you an advertiser?</h2>
                        <Link href="/advertisers">
                            <Button className="h-12 px-8 rounded-full bg-white text-[#4338CA] hover:bg-neutral-50 font-bold text-xs uppercase tracking-wide">
                                Adstext for Advertisers <span className="ml-2">→</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
