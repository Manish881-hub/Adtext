import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const CodeSnippet = ({ className }: { className?: string }) => (
    <div className={cn("font-mono text-xs md:text-sm leading-relaxed bg-neutral-950 text-neutral-400 p-6 md:p-8 rounded-xl border border-neutral-800 overflow-x-auto shadow-2xl relative", className)}>
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

export default function PublishersIntegration() {
    return (
        <Section variant="publisher" className="bg-neutral-900 text-white border-b border-neutral-800">
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
    );
}
