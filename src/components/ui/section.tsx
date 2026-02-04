import * as React from "react"
import { cn } from "@/lib/cn"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "default" | "publisher" | "advertiser"
    container?: boolean
    fullWidth?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, variant = "default", container = true, fullWidth = false, style, children, ...props }, ref) => {

        // Map variants to CSS variable overrides for this section's scope
        const variantStyles: Record<string, React.CSSProperties> = {
            default: {},
            publisher: {
                "--primary": "var(--publisher-accent)",
                "--accent": "var(--publisher-accent)",
                "--ring": "var(--publisher-accent)",
            } as React.CSSProperties,
            advertiser: {
                "--primary": "var(--advertiser-accent)",
                "--accent": "var(--advertiser-accent)",
                "--ring": "var(--advertiser-accent)",
            } as React.CSSProperties,
        }

        return (
            <section
                ref={ref}
                // Merge the variant-specific variable overrides with any custom style prop
                style={{ ...variantStyles[variant as string], ...style }}
                className={cn(
                    "py-16 md:py-24 relative overflow-hidden",
                    className
                )}
                {...props}
            >
                {container ? (
                    <div className={cn(
                        "mx-auto px-4 md:px-6",
                        fullWidth ? "w-full" : "container"
                    )}>
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        )
    }
)
Section.displayName = "Section"

export { Section }
