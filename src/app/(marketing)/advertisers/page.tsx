import AdvertisersHero from "./AdvertisersHero";
import AdvertisersStats from "./AdvertisersStats";
import AdvertisersReach from "./AdvertisersReach";
import AdvertisersIndustries from "./AdvertisersIndustries";
import AdvertisersFeatures from "./AdvertisersFeatures";
import AdvertisersCaseStudies from "./AdvertisersCaseStudies";
import HowItWorks from "./HowItWorks";

export default function AdvertisersPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-advertiser-accent/20">
            <AdvertisersHero />
            <AdvertisersFeatures />
            <AdvertisersStats />
            <AdvertisersReach />
            <AdvertisersIndustries />
            <HowItWorks />
            <AdvertisersCaseStudies />
        </div>
    );
}
