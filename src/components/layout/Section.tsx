import { cn } from "@/lib/utils"

export function Section({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <section className={cn("w-full", className)}>
            <div className="mx-auto max-w-7xl px-6">
                {children}
            </div>
        </section>
    )
}
