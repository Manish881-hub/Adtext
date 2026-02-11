"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";

export function Navbar() {
    const pathname = usePathname();
    const isPublisher = pathname?.startsWith("/publishers");
    const isAdvertiser = pathname?.startsWith("/advertisers");

    return (
        <div className="flex flex-col">

            <nav>
                <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Left Section: Mobile Trigger & Logo */}
                    <div className="flex items-center gap-4">
                        <div className="md:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <button className="p-2 -ml-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                        <Menu className="h-6 w-6" />
                                        <span className="sr-only">Open menu</span>
                                    </button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                    <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                                    <div className="flex flex-col gap-8 mt-8">
                                        <Link href="/" className="text-xl font-heading font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2">
                                            <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm font-mono">
                                                A
                                            </div>
                                            Adtext
                                        </Link>
                                        <div className="flex flex-col gap-4 text-lg font-medium font-sans">
                                            <Link
                                                href="/publishers"
                                                className={cn("text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors", isPublisher && "text-neutral-900 dark:text-white font-bold")}
                                            >
                                                Publishers
                                            </Link>
                                            <Link
                                                href="/advertisers"
                                                className={cn("text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors", isAdvertiser && "text-neutral-900")}
                                            >
                                                Advertisers
                                            </Link>
                                            <Link
                                                href="/login"
                                                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                                            >
                                                Log in
                                            </Link>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                        <Link href="/" className="flex items-center gap-2 text-xl font-heading font-bold tracking-tight text-foreground">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4L12 20L20 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 12H17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                            Adtext
                        </Link>
                    </div>

                    {/* Center Section: Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium font-heading absolute left-1/2 -translate-x-1/2">
                        <Link
                            href="/publishers"
                            className={cn("text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors", isPublisher && "text-neutral-900 dark:text-white font-semibold")}
                        >
                            Publishers
                        </Link>
                        <Link
                            href="/advertisers"
                            className={cn("text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors", isAdvertiser && "text-neutral-900 dark:text-white font-semibold")}
                        >
                            Advertisers
                        </Link>
                    </div>

                    {/* Right Section: Login */}
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden md:block text-xs font-mono font-medium px-5 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors uppercase tracking-wide">
                            Log in
                        </Link>
                        <Link href="/login" className="md:hidden text-xs font-mono font-medium px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors uppercase tracking-wide">
                            Log in
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
