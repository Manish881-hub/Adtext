import { cn } from "@/lib/utils";

interface CategoryPillsProps {
    categories: string[];
    activeIndex?: number;
    className?: string;
}

const CategoryPills = ({ categories, activeIndex = -1, className }: CategoryPillsProps) => {
    return (
        <div className={cn("flex flex-wrap gap-2", className)}>
            {categories.map((category, index) => (
                <span
                    key={category}
                    className={cn(
                        "px-3 py-1 rounded-full text-xs font-medium transition-colors border",
                        index === activeIndex
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-muted text-muted-foreground border-transparent hover:border-primary/50"
                    )}
                >
                    {category}
                </span>
            ))}
        </div>
    );
};

export default CategoryPills;
