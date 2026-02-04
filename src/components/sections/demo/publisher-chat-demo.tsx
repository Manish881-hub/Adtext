"use client";

import { cn } from "@/lib/utils";

export function PublisherChatDemo() {
    return (
        <div className="relative w-[300px] md:w-[320px] h-[600px] md:h-[640px] bg-[#1a1b2e] rounded-[3rem] border-[8px] border-neutral-900 shadow-2xl overflow-hidden flex flex-col shrink-0">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-3xl z-20"></div>




            {/* Video Container - Simulates Phone Screen */}
            <div className="relative w-full h-full bg-black">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    playsInline
                    loop
                    muted
                >
                    <source src="/animation/Ai-search.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Optional Overlay to ensure text legibility if we add any back later */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"></div>
            </div>

            {/* Input Placeholder (Visual only) */}

        </div>
    );
}

