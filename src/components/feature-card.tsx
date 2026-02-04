import { cn } from "@/lib/utils";

interface FeatureCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
}

export function FeatureCard({ title, description, icon, className, children }: FeatureCardProps) {
    return (
        <div className={cn("p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all hover:shadow-md", className)}>
            {icon && <div className="mb-4 text-indigo-600 dark:text-indigo-400 [&>svg]:w-6 [&>svg]:h-6">{icon}</div>}
            <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100">{title}</h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">{description}</p>
            {children}
        </div>
    );
}
