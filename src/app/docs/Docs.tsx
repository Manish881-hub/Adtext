"use client"
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Book, Code, Zap, Shield, Settings, Users, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";

type DocSection = {
    id: string;
    title: string;
    icon: React.ReactNode;
    content: React.ReactNode;
};

const docSections: DocSection[] = [
    {
        id: "overview",
        title: "Overview",
        icon: <Book className="w-4 h-4" />,
        content: (
            <div className="space-y-6">
                <div className="rounded-lg overflow-hidden border border-border mb-8">
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop"
                        alt="Adtext ads showcase"
                        className="w-full h-64 object-cover"
                    />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Adtext is the simplest way to monetize text-based & AI apps such as chatbots, search engines or instant messaging apps with unique, native ad formats. Sign up, install an SDK and start generating revenue from your audience in a couple of minutes.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {[
                        { title: "React SDK", desc: "React SDK with an npm package for React apps" },
                        { title: "JavaScript SDK", desc: "JavaScript SDK for web apps" },
                        { title: "Swift SDK", desc: "Swift SDK for iOS apps" },
                        { title: "Kotlin SDK", desc: "Kotlin SDK for Android apps" },
                        { title: "Flutter SDK", desc: "Flutter SDK for Flutter-based mobile apps" },
                        { title: "React Native SDK", desc: "React Native SDK for iOS and Android apps" },
                    ].map((sdk) => (
                        <div key={sdk.title} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer group">
                            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{sdk.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{sdk.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "quickstart",
        title: "Quick Start",
        icon: <Zap className="w-4 h-4" />,
        content: (
            <div className="space-y-6">
                <p className="text-lg text-muted-foreground">Get started with Adtext in just a few minutes.</p>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">1. Create an Account</h3>
                    <p className="text-muted-foreground">Sign up for a free Adtext account at our dashboard. You'll receive an API key that you'll use to authenticate your requests.</p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">2. Install the SDK</h3>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                        <code>npm install @adtext/sdk</code>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">3. Initialize Adtext</h3>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre>{`import { Adtext } from '@adtext/sdk';

const adtext = new Adtext({
  apiKey: 'your-api-key',
  publisherId: 'your-publisher-id'
});`}</pre>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">4. Display Ads</h3>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre>{`const ad = await adtext.getAd({
  context: 'User is asking about travel destinations',
  format: 'native'
});

// Render the ad in your UI
console.log(ad.content);`}</pre>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "sdk-reference",
        title: "SDK Reference",
        icon: <Code className="w-4 h-4" />,
        content: (
            <div className="space-y-6">
                <p className="text-lg text-muted-foreground">Complete API reference for the Adtext SDK.</p>

                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground">Adtext.getAd(options)</h3>
                        <p className="text-muted-foreground">Fetches a contextual ad based on the provided options.</p>

                        <h4 className="font-medium text-foreground">Parameters</h4>
                        <div className="border border-border rounded-lg overflow-hidden">
                            <table className="w-full text-sm">
                                <thead className="bg-muted">
                                    <tr>
                                        <th className="text-left p-3 font-medium">Name</th>
                                        <th className="text-left p-3 font-medium">Type</th>
                                        <th className="text-left p-3 font-medium">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-border">
                                        <td className="p-3 font-mono text-primary">context</td>
                                        <td className="p-3 text-muted-foreground">string</td>
                                        <td className="p-3 text-muted-foreground">The conversation context for ad targeting</td>
                                    </tr>
                                    <tr className="border-t border-border">
                                        <td className="p-3 font-mono text-primary">format</td>
                                        <td className="p-3 text-muted-foreground">string</td>
                                        <td className="p-3 text-muted-foreground">Ad format: 'native', 'banner', 'interstitial'</td>
                                    </tr>
                                    <tr className="border-t border-border">
                                        <td className="p-3 font-mono text-primary">userId</td>
                                        <td className="p-3 text-muted-foreground">string?</td>
                                        <td className="p-3 text-muted-foreground">Optional user identifier for frequency capping</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground">Adtext.trackImpression(adId)</h3>
                        <p className="text-muted-foreground">Tracks an ad impression for analytics and billing.</p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground">Adtext.trackClick(adId)</h3>
                        <p className="text-muted-foreground">Tracks an ad click for analytics and billing.</p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "authentication",
        title: "Authentication",
        icon: <Shield className="w-4 h-4" />,
        content: (
            <div className="space-y-6">
                <p className="text-lg text-muted-foreground">Learn how to authenticate your requests to the Adtext API.</p>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">API Keys</h3>
                    <p className="text-muted-foreground">
                        All API requests require authentication using an API key. You can find your API key in your dashboard under Settings → API Keys.
                    </p>
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                        <p className="text-amber-600 dark:text-amber-400 text-sm">
                            <strong>Security Note:</strong> Keep your API keys secure and never expose them in client-side code. Use environment variables or a backend proxy.
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Request Headers</h3>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                        <code>Authorization: Bearer your-api-key</code>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "configuration",
        title: "Configuration",
        icon: <Settings className="w-4 h-4" />,
        content: (
            <div className="space-y-6">
                <p className="text-lg text-muted-foreground">Configure Adtext to match your application's needs.</p>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Initialization Options</h3>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre>{`const adtext = new Adtext({
  apiKey: 'your-api-key',
  publisherId: 'your-publisher-id',
  environment: 'production', // or 'sandbox'
  timeout: 5000, // request timeout in ms
  retries: 3, // number of retry attempts
  debug: false // enable debug logging
});`}</pre>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Ad Placement Settings</h3>
                    <p className="text-muted-foreground">
                        Configure where and how ads appear in your application through the dashboard. You can set frequency caps, content filters, and targeting preferences.
                    </p>
                </div>
            </div>
        ),
    },
    {
        id: "advertisers",
        title: "For Advertisers",
        icon: <Users className="w-4 h-4" />,
        content: (
            <div className="space-y-6">
                <p className="text-lg text-muted-foreground">Learn how to create and manage ad campaigns on Adtext.</p>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Creating a Campaign</h3>
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                        <li>Log in to your advertiser dashboard</li>
                        <li>Click "Create Campaign" and select your campaign type</li>
                        <li>Set your targeting preferences (topics, demographics, locations)</li>
                        <li>Upload your creative assets or write your ad copy</li>
                        <li>Set your budget and bidding strategy</li>
                        <li>Review and launch your campaign</li>
                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Ad Formats</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg border border-border">
                            <h4 className="font-medium text-foreground">Native Text Ads</h4>
                            <p className="text-sm text-muted-foreground mt-1">Seamlessly integrated text ads that match the conversation flow</p>
                        </div>
                        <div className="p-4 rounded-lg border border-border">
                            <h4 className="font-medium text-foreground">Sponsored Messages</h4>
                            <p className="text-sm text-muted-foreground mt-1">AI-generated contextual recommendations</p>
                        </div>
                        <div className="p-4 rounded-lg border border-border">
                            <h4 className="font-medium text-foreground">Rich Media</h4>
                            <p className="text-sm text-muted-foreground mt-1">Interactive ads with images and CTAs</p>
                        </div>
                        <div className="p-4 rounded-lg border border-border">
                            <h4 className="font-medium text-foreground">Video Ads</h4>
                            <p className="text-sm text-muted-foreground mt-1">Short-form video content (coming soon)</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
];

const Docs = () => {
    const [activeSection, setActiveSection] = useState("overview");
    const [searchQuery, setSearchQuery] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const currentSection = docSections.find((s) => s.id === activeSection) || docSections[0];

    const filteredSections = docSections.filter((section) =>
        section.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
                <div className="flex items-center justify-between px-4 lg:px-8 h-16">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-foreground">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4L12 20L20 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 12H17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                            Adtext Docs
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Input
                            type="search"
                            placeholder="Search docs..."
                            className="w-64"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button variant="outline" asChild>
                            <Link href="/login">Log in</Link>
                        </Button>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside
                    className={cn(
                        "fixed lg:sticky top-16 left-0 z-40 w-64 h-[calc(100vh-4rem)] border-r border-border bg-background transition-transform lg:translate-x-0",
                        sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    )}
                >
                    <nav className="p-4 space-y-1">
                        <div className="mb-4 lg:hidden">
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                            Get Started
                        </p>
                        {filteredSections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => {
                                    setActiveSection(section.id);
                                    setSidebarOpen(false);
                                }}
                                className={cn(
                                    "w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors",
                                    activeSection === section.id
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                )}
                            >
                                {section.icon}
                                {section.title}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Overlay for mobile */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Main content */}
                <main className="flex-1 min-w-0">
                    <div className="max-w-4xl mx-auto px-6 py-12">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                            <Link href="/docs" className="hover:text-foreground transition-colors">Docs</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-foreground">{currentSection.title}</span>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSection}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h1 className="text-4xl font-bold text-foreground mb-8">
                                    {currentSection.title}
                                </h1>
                                {currentSection.content}
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation footer */}
                        <div className="flex justify-between mt-16 pt-8 border-t border-border">
                            {docSections.findIndex((s) => s.id === activeSection) > 0 && (
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        const currentIndex = docSections.findIndex((s) => s.id === activeSection);
                                        setActiveSection(docSections[currentIndex - 1].id);
                                    }}
                                >
                                    ← {docSections[docSections.findIndex((s) => s.id === activeSection) - 1]?.title}
                                </Button>
                            )}
                            <div className="flex-1" />
                            {docSections.findIndex((s) => s.id === activeSection) < docSections.length - 1 && (
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        const currentIndex = docSections.findIndex((s) => s.id === activeSection);
                                        setActiveSection(docSections[currentIndex + 1].id);
                                    }}
                                >
                                    {docSections[docSections.findIndex((s) => s.id === activeSection) + 1]?.title} →
                                </Button>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Docs;