import AdvertisersHero from "./AdvertisersHero";
import AdvertisersStats from "./AdvertisersStats";
import AdvertisersReach from "./AdvertisersReach";
import AdvertisersFeatures from "./AdvertisersFeatures";
import AdvertisersCaseStudies from "./AdvertisersCaseStudies";

export default function AdvertisersPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-advertiser-accent/20">
            <AdvertisersHero />

            <AdvertisersFeatures />
            <AdvertisersReach />
            <AdvertisersStats />
            <AdvertisersCaseStudies />
        </div>
    );
}
