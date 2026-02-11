import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function PublishersCTA() {
    return (
        <Section fullWidth container={false} className="p-0 py-0 md:py-0">
            <div className="grid md:grid-cols-2 w-full">
                {/* Publisher CTA */}
                <div className="bg-primary py-24 px-8 text-center flex flex-col items-center justify-center">
                    <h2 className="font-sans text-2xl font-bold text-primary-foreground mb-2">Partner with us</h2>
                    <p className="font-serif text-primary-foreground/80 mb-8 max-w-sm">Get in touch, and we will set you up with Adtext.</p>
                    <Link href="/contact">
                        <Button className="h-12 px-8 rounded-full bg-background text-primary hover:bg-background/90 font-bold text-xs uppercase tracking-wide">
                            Contact Us <span className="ml-2">→</span>
                        </Button>
                    </Link>
                </div>
                {/* Advertiser CTA */}
                <div className="bg-publisher-accent py-24 px-8 text-center flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>
                    <h2 className="font-sans text-2xl font-bold text-white mb-8">Are you an advertiser?</h2>
                    <Link href="/advertisers">
                        <Button className="h-12 px-8 rounded-full bg-white text-publisher-accent hover:bg-neutral-50 font-bold text-xs uppercase tracking-wide">
                            Adtext for Advertisers <span className="ml-2">→</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
}
