import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AnnouncementBanner() {
    return (
        <div className="bg-[#1a1b2e] text-white text-[10px] sm:text-xs py-2 px-4 text-center relative z-50 border-b border-white/5">
            <span className="opacity-80">Introducing Adstext for Publishers: </span>
            <Link href="/publishers" className="font-bold hover:underline inline-flex items-center ml-1 text-white">
                Monetize your AI traffic <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
        </div>
    );
}
