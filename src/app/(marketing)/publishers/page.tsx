import PublishersHero from "./PublishersHero";
import PublishersSocialProof from "./PublishersSocialProof";
import PublishersFeatures from "./PublishersFeatures";
import PublishersIntegration from "./PublishersIntegration";
import PublishersCTA from "./PublishersCTA";

export default function PublishersPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-publisher-accent/20">
            <PublishersHero />
            <PublishersSocialProof />
            <PublishersFeatures />
            <PublishersIntegration />
            <PublishersCTA />
        </div>
    );
}
