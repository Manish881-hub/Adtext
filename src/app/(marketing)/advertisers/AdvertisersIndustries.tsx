import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gamepad2, ShoppingBag, Heart, Cpu, Plane, Dumbbell } from "lucide-react";

const industries = [
  {
    icon: Gamepad2,
    title: "Digital entertainment",
    description: "Engage with a diverse landscape of AI entertainment platforms. From interactive stories and AI-based RPG games to dating and virtual characters, connect with an audience that's right for your product.",
    brands: ["CD Projekt", "NetEase", "SuperScale"]
  },
  {
    icon: ShoppingBag,
    title: "eCommerce",
    description: "Target users using AI shopping experiences. Reach consumers who use smart shopping assistants, personalized recommendations, and AI product discovery tools in digital marketplaces.",
    brands: ["Supergoop", "Staples", "Sonos"]
  },
  {
    icon: Heart,
    title: "Health & wellness",
    description: "Connect with users using AI health and wellness solutions. From AI fitness coaches to mental health support, reach an engaged audience that actively invests in their wellbeing through AI.",
    brands: ["Walgreens", "Goop", "Botanic Choice"]
  },
  {
    icon: Cpu,
    title: "Productivity & AI tools",
    description: "Target users who are advancing their productivity with AI at work. Advertise in smart productivity tools, virtual assistants and automated customer service platforms.",
    brands: ["NordVPN", "1Password", "Typeform"]
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Engage travelers that are using AI for trip planning and experiences and place your ads in personalized itinerary recommendations, smart booking assistants and real-time travel companions.",
    brands: ["Expedia", "Radisson", "Vueling"]
  },
  {
    icon: Dumbbell,
    title: "Sports & fitness",
    description: "Reach active users seeking data-driven approaches to achieve their athletic and fitness goals through AI coaches, training assistants or nutritional online advisors.",
    brands: ["Garmin", "Rains", "Columbia"]
  }
];

const AdvertisersIndustries = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="label-mono mb-4 block">Who we work with</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            We can target any audience and context
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <industry.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">{industry.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{industry.description}</p>
              <div className="flex flex-wrap gap-2">
                {industry.brands.map((brand) => (
                  <span
                    key={brand}
                    className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button className="group font-mono uppercase tracking-wider text-sm">
            Contact us
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvertisersIndustries;