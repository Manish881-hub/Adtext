import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PublishersCTA() {
    return (
        <section className="py-16 px-6 lg:px-12 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Publisher CTA */}
                    <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl py-20 px-8 text-center flex flex-col items-center justify-center overflow-hidden">
                        {/* Dot pattern overlay */}
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                                backgroundSize: '16px 16px',
                            }}
                        />
                        <div className="relative z-10">
                            <h2 className="font-sans text-2xl md:text-3xl font-bold text-white mb-2">Partner with us</h2>
                            <p className="font-serif text-white/80 mb-8 max-w-sm">
                                Get in touch, and we will set you up with Adtext.
                            </p>
                            <Link href="/publishers/contact">
                                <Button className="h-12 px-8 rounded-full bg-white text-neutral-900 hover:bg-neutral-100 font-bold text-xs uppercase tracking-wider">
                                    Contact Us <span className="ml-2">→</span>
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Advertiser CTA */}
                    <div className="relative bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl py-20 px-8 text-center flex flex-col items-center justify-center overflow-hidden">
                        {/* Dot pattern overlay */}
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                                backgroundSize: '16px 16px',
                            }}
                        />
                        <div className="relative z-10">
                            <h2 className="font-sans text-2xl md:text-3xl font-bold text-white mb-8">Are you an advertiser?</h2>
                            <Link href="/advertisers">
                                <Button className="h-12 px-8 rounded-full bg-white text-indigo-700 hover:bg-neutral-100 font-bold text-xs uppercase tracking-wider">
                                    Adtext for Advertisers <span className="ml-2">→</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
