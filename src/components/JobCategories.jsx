import {
  Code,
  Megaphone,
  Palette,
  DollarSign,
  Laptop,
  Users,
  Briefcase,
  Lightbulb,
} from "lucide-react";

const categories = [
  { icon: Code, name: "Technology & IT", count: "1,234 jobs" },
  { icon: Megaphone, name: "Marketing", count: "856 jobs" },
  { icon: Palette, name: "Design & Creative", count: "623 jobs" },
  { icon: DollarSign, name: "Finance & Accounting", count: "945 jobs" },
  { icon: Laptop, name: "Business & Consulting", count: "712 jobs" },
  { icon: Users, name: "Human Resources", count: "438 jobs" },
  { icon: Briefcase, name: "Sales", count: "891 jobs" },
  { icon: Lightbulb, name: "Innovation & R&D", count: "567 jobs" },
];

const JobCategories = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore opportunities across diverse industries and find your
            perfect match
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary hover:shadow-md transition-all duration-300 text-left"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
