import { Zap, Shield, Search, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Easy Apply",
    description:
      "Apply to multiple jobs with just one click. Save time with our streamlined application process.",
  },
  {
    icon: Shield,
    title: "Verified Employers",
    description:
      "All companies are verified and vetted. Apply with confidence to legitimate opportunities.",
  },
  {
    icon: Search,
    title: "Smart Matching",
    description:
      "Our AI-powered algorithm matches you with the most relevant job opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Access resources, tips, and tools to accelerate your professional development.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose JobConnect?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to find your perfect job and advance your career
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
