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

    return (
        <div className="flex flex-col">
            <div className="bg-indigo-600 text-white text-xs md:text-sm font-medium py-2.5 px-4 text-center">
                <span className="opacity-95">Adstext raised a $10M seed round to reinvent advertising in the era of AI.</span>
                <Link href="#" className="underline ml-2 opacity-100 hover:text-indigo-100 font-semibold">Learn more</Link>
            </div>
            <nav className="border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md sticky top-0 z-50">
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
                                        <Link href="/" className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2">
                                            <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                                A
                                            </div>
                                            Adstext
                                        </Link>
                                        <div className="flex flex-col gap-4 text-lg font-medium">
                                            <Link
                                                href="/publishers"
                                                className={cn("text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors", isPublisher && "text-neutral-900 dark:text-white font-bold")}
                                            >
                                                Publishers
                                            </Link>
                                            <Link
                                                href="/advertisers"
                                                className={cn("text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors")}
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
                        <Link href="/" className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2">
                            <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                A
                            </div>
                            Adstext
                        </Link>
                    </div>

                    {/* Center Section: Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium absolute left-1/2 -translate-x-1/2">
                        <Link
                            href="/publishers"
                            className={cn("text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors", isPublisher && "text-neutral-900 dark:text-white font-semibold")}
                        >
                            Publishers
                        </Link>
                        <Link
                            href="/advertisers"
                            className={cn("text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors")}
                        >
                            Advertisers
                        </Link>
                    </div>

                    {/* Right Section: Login */}
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden md:block text-sm font-medium px-5 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors uppercase tracking-wide text-xs">
                            Log in
                        </Link>
                        <Link href="/login" className="md:hidden text-sm font-medium px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors uppercase tracking-wide text-xs">
                            Log in
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
