import { cn } from "@/lib/utils";

interface ChatMockupProps {
    variant?: "advertisers" | "publishers" | "default";
    className?: string;
}

const ChatMockup = ({ variant = "default", className }: ChatMockupProps) => {
    return (
        <div className={cn("rounded-2xl border border-border bg-card p-6 shadow-sm w-full max-w-md mx-auto", className)}>
            <div className="flex items-center gap-3 border-b border-border pb-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    AI
                </div>
                <div>
                    <div className="font-semibold">Chat Assistant</div>
                    <div className="text-xs text-muted-foreground">Online</div>
                </div>
            </div>

            <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                    <div className="bg-muted p-3 rounded-2xl rounded-tl-sm text-sm max-w-[80%]">
                        Hello! How can I help you today?
                    </div>
                </div>
                {variant === "advertisers" && (
                    <div className="bg-banner/5 border border-banner/10 p-4 rounded-xl">
                        <div className="text-banner-link font-medium mb-1 text-sm">Sponsored</div>
                        <div className="text-foreground text-sm">Discover how adstext can help you reach more customers in AI apps.</div>
                    </div>
                )}
            </div>

            <div className="relative">
                <div className="h-10 bg-muted/50 rounded-full w-full"></div>
            </div>
        </div>
    );
};

export default ChatMockup;
