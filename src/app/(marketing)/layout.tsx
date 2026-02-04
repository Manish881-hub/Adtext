"use client";

import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/Navbar";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-950">
            <AnnouncementBanner />
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
            <Toaster />
        </div>
    );
}
