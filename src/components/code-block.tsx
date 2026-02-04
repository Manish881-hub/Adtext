import { cn } from "@/lib/utils";

interface CodeBlockProps {
    code: string;
    language?: string;
    className?: string;
}

export function CodeBlock({ code, className }: CodeBlockProps) {
    return (
        <div className={cn("relative overflow-hidden rounded-xl bg-neutral-950 border border-neutral-800 shadow-2xl", className)}>
            <div className="flex items-center gap-1.5 px-4 py-3 bg-neutral-900/50 border-b border-neutral-800">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="p-4 overflow-x-auto">
                <pre className="font-mono text-xs sm:text-sm leading-relaxed text-indigo-100/90 selection:bg-indigo-500/30">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
}
