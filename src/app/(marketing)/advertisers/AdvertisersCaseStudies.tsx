import Link from "next/link";
import { Section } from "@/components/ui/section";

export default function AdvertisersCaseStudies() {
    return (
        <Section variant="advertiser" className="py-24 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center justify-between mb-12">
                <h2 className="font-sans text-2xl font-bold text-foreground">Partner Success</h2>
                <Link href="#" className="font-sans text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1">
                    Read all case studies <span>→</span>
                </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-2 mb-6 text-muted-foreground">
                        <span className="font-mono uppercase text-xs font-bold tracking-wider">Travel</span>
                        <span>•</span>
                        <span className="font-serif text-xs">Expedia Partner</span>
                    </div>
                    <blockquote className="font-serif text-xl font-medium text-foreground mb-6 leading-relaxed">
                        "The intent signal from AI chat is incredibly strong. CPA dropped by 45% compared to our search campaigns."
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                        <div>
                            <div className="font-sans font-bold text-foreground text-sm">Sarah Chen</div>
                            <div className="font-serif text-xs text-muted-foreground">VP Marketing, TravelCo</div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-2 mb-6 text-muted-foreground">
                        <span className="font-mono uppercase text-xs font-bold tracking-wider">SaaS</span>
                        <span>•</span>
                        <span className="font-serif text-xs">Productivity</span>
                    </div>
                    <blockquote className="font-serif text-xl font-medium text-foreground mb-6 leading-relaxed">
                        "We reached developers exactly when they were asking about cloud infrastructure. The relevance is unmatched."
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                        <div>
                            <div className="font-sans font-bold text-foreground text-sm">James Miller</div>
                            <div className="font-serif text-xs text-muted-foreground">Growth Lead, CloudScale</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
