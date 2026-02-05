import { Section } from "@/components/ui/section";

export default function PublishersSocialProof() {
    return (
        <Section variant="default" className="py-12 border-b border-dashed border-neutral-200 dark:border-neutral-800">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-opacity duration-500">
                {/* Placeholder Logos imitating reference logos */}
                {["CapCut", "Cosmic Latte", "Dorian", "GOG", "Hornet", "NetEase", "CD Projekt", "Superscale"].map((brand) => (
                    <div key={brand} className="flex justify-center items-center h-8">
                        <span className="font-sans font-bold text-xl text-foreground text-center leading-none">{brand}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
}
