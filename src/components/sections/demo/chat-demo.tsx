"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    ad?: {
        title: string;
        description: string;
        brand: string;
        image?: string;
    };
}

const DEMO_RESPONSES: Record<string, { response: string; ad: Message["ad"] }> = {
    default: {
        response: "I'd be happy to help you with that! Based on your interests, here's some relevant information.",
        ad: {
            title: "Discover Premium Products",
            description: "Find exactly what you're looking for with personalized recommendations.",
            brand: "Featured Partner",
        },
    },
    headphones: {
        response: "For running, I'd recommend wireless earbuds with secure fit and sweat resistance. The Sony WF-1000XM5 and AirPods Pro 2 are excellent choices with great sound quality and active noise cancellation.",
        ad: {
            title: "Sony WF-1000XM5",
            description: "Industry-leading noise cancellation. Secure fit for workouts. 8hr battery life.",
            brand: "Sony Audio",
        },
    },
    travel: {
        response: "Japan is amazing! For a 2-week trip, I'd suggest: Tokyo (4 days), Kyoto (3 days), Osaka (2 days), and maybe Hiroshima or Hakone. Spring (cherry blossoms) and fall (autumn leaves) are the best seasons.",
        ad: {
            title: "Japan Rail Pass",
            description: "Unlimited travel on JR trains. Save up to 60% on transportation. Book online today!",
            brand: "JR Pass",
        },
    },
    fitness: {
        response: "For building muscle, focus on compound exercises (squats, deadlifts, bench press), progressive overload, and adequate protein (1.6-2.2g per kg bodyweight). Aim for 3-4 strength sessions per week with proper rest.",
        ad: {
            title: "Whey Protein Isolate",
            description: "25g protein per serving. Zero sugar. Fast absorption for post-workout recovery.",
            brand: "Optimum Nutrition",
        },
    },
    cooking: {
        response: "For a quick weeknight pasta, try aglio e olio! Sauté sliced garlic in olive oil, add red pepper flakes, toss with spaghetti and pasta water. Finish with parsley and parmesan. Ready in 15 minutes!",
        ad: {
            title: "Truffle Olive Oil",
            description: "Elevate any dish with premium Italian truffle-infused extra virgin olive oil.",
            brand: "Eataly",
        },
    },
};

const SUGGESTED_PROMPTS = [
    "Best headphones for running?",
    "How to plan a trip to Japan?",
    "Tips for building muscle?",
    "Quick pasta recipe for dinner?",
];

function getResponse(input: string): { response: string; ad: Message["ad"] } {
    const lower = input.toLowerCase();
    if (lower.includes("headphone") || lower.includes("earbuds") || lower.includes("audio") || lower.includes("music")) {
        return DEMO_RESPONSES.headphones;
    }
    if (lower.includes("japan") || lower.includes("travel") || lower.includes("trip") || lower.includes("vacation")) {
        return DEMO_RESPONSES.travel;
    }
    if (lower.includes("muscle") || lower.includes("fitness") || lower.includes("gym") || lower.includes("workout") || lower.includes("exercise")) {
        return DEMO_RESPONSES.fitness;
    }
    if (lower.includes("cook") || lower.includes("recipe") || lower.includes("pasta") || lower.includes("dinner") || lower.includes("food")) {
        return DEMO_RESPONSES.cooking;
    }
    return DEMO_RESPONSES.default;
}

export function ChatDemo({ className }: { className?: string }) {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "assistant",
            content: "Hi! I'm your AI assistant. Ask me anything—try one of the suggestions below, or type your own question!",
        },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [displayedResponse, setDisplayedResponse] = useState("");
    const [showAd, setShowAd] = useState(false);
    const [currentAd, setCurrentAd] = useState<Message["ad"] | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, displayedResponse, showAd]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isTyping) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input.trim(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);
        setDisplayedResponse("");
        setShowAd(false);
        setCurrentAd(null);

        // Simulate thinking delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        const { response, ad } = getResponse(userMessage.content);
        setCurrentAd(ad);

        // Typewriter effect
        for (let i = 0; i <= response.length; i++) {
            await new Promise((resolve) => setTimeout(resolve, 15));
            setDisplayedResponse(response.slice(0, i));
        }

        // Show ad after response completes
        await new Promise((resolve) => setTimeout(resolve, 300));
        setShowAd(true);

        // Add final message
        setMessages((prev) => [
            ...prev,
            {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: response,
                ad,
            },
        ]);
        setDisplayedResponse("");
        setIsTyping(false);
    };

    const handleSuggestion = (prompt: string) => {
        setInput(prompt);
    };

    return (
        <div className={cn("bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 flex flex-col font-sans", className)}>
            {/* Header */}
            <div className="p-4 border-b border-neutral-100 dark:border-neutral-800 flex items-center gap-3 bg-neutral-50/50 dark:bg-neutral-900">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-orange-500/20">
                    AI
                </div>
                <div className="flex-1">
                    <div className="text-sm font-bold text-neutral-900 dark:text-white font-sans">AI Assistant</div>
                    <div className="text-xs text-green-600 dark:text-green-500 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Live Demo
                    </div>
                </div>
                <div className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    Powered by Adstext
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto min-h-[300px] max-h-[400px] bg-white dark:bg-neutral-950">
                {messages.map((message, index) => (
                    <div key={message.id} className={cn("flex gap-3", message.role === "user" && "flex-row-reverse")}>
                        {message.role === "assistant" && (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-orange-400 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                AI
                            </div>
                        )}
                        <div className="space-y-2 max-w-[85%]">
                            <div
                                className={cn(
                                    "p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm",
                                    message.role === "user"
                                        ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-tr-sm font-medium"
                                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 rounded-tl-sm border border-neutral-200 dark:border-neutral-700"
                                )}
                            >
                                {message.content}
                            </div>

                            {/* Ad Card */}
                            {message.ad && index === messages.length - 1 && !isTyping && (
                                <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/20 p-3.5 rounded-xl flex gap-3 items-start relative overflow-hidden group hover:border-primary/40 transition-all cursor-pointer animate-in fade-in slide-in-from-bottom-2 duration-300">
                                    <div className="absolute top-2 right-2 text-[9px] font-bold text-primary bg-white/70 dark:bg-neutral-900/70 px-1.5 py-0.5 rounded border border-primary/20">
                                        AD
                                    </div>
                                    <div className="w-10 h-10 bg-white dark:bg-neutral-900 rounded-lg flex-shrink-0 flex items-center justify-center border border-neutral-100 dark:border-neutral-800 shadow-sm">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs text-primary font-bold mb-0.5">{message.ad.brand}</div>
                                        <div className="text-neutral-900 dark:text-white font-bold text-sm mb-1 truncate">{message.ad.title}</div>
                                        <div className="text-neutral-600 dark:text-neutral-400 text-xs leading-relaxed line-clamp-2 font-serif">{message.ad.description}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {/* Typing Indicator + Live Response */}
                {isTyping && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-orange-400 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                            AI
                        </div>
                        <div className="space-y-2 max-w-[85%]">
                            <div className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 p-3.5 rounded-2xl rounded-tl-sm border border-neutral-200 dark:border-neutral-700 text-sm leading-relaxed shadow-sm">
                                {displayedResponse || (
                                    <span className="flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                                    </span>
                                )}
                                {displayedResponse && <span className="animate-pulse">|</span>}
                            </div>

                            {/* Ad appears after typing */}
                            {showAd && currentAd && (
                                <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/20 p-3.5 rounded-xl flex gap-3 items-start relative overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
                                    <div className="absolute top-2 right-2 text-[9px] font-bold text-primary bg-white/70 dark:bg-neutral-900/70 px-1.5 py-0.5 rounded border border-primary/20">
                                        AD
                                    </div>
                                    <div className="w-10 h-10 bg-white dark:bg-neutral-900 rounded-lg flex-shrink-0 flex items-center justify-center border border-neutral-100 dark:border-neutral-800 shadow-sm">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs text-primary font-bold mb-0.5">{currentAd.brand}</div>
                                        <div className="text-neutral-900 dark:text-white font-bold text-sm mb-1 truncate">{currentAd.title}</div>
                                        <div className="text-neutral-600 dark:text-neutral-400 text-xs leading-relaxed line-clamp-2 font-serif">{currentAd.description}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length === 1 && !isTyping && (
                <div className="px-4 pb-2 flex flex-wrap gap-2 bg-white dark:bg-neutral-950">
                    {SUGGESTED_PROMPTS.map((prompt) => (
                        <button
                            key={prompt}
                            onClick={() => handleSuggestion(prompt)}
                            className="text-xs px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-primary/10 hover:text-primary dark:hover:text-primary transition-colors border border-neutral-200 dark:border-neutral-800 hover:border-primary/30"
                        >
                            {prompt}
                        </button>
                    ))}
                </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
                <div className="relative flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message..."
                        disabled={isTyping}
                        className="flex-1 bg-neutral-100 dark:bg-neutral-900 border-0 rounded-full py-3 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 font-sans"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isTyping}
                        className="p-3 bg-primary hover:bg-primary/90 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 disabled:text-neutral-400 text-primary-foreground rounded-full transition-colors disabled:cursor-not-allowed shadow-md shadow-primary/20"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}
