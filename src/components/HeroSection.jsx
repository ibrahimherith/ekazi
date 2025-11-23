import { Search, MapPin } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

const HeroSection = () => {
  return (
    <section className="relative bg-white py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-Blue sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            A place where
            <span className="block text-Orange mt-2">employers</span>
            meets potential candidates
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Set your career in motion with eKazi.
          </p>

          {/* Search Bar */}
          <div className="bg-background rounded-2xl shadow-lg p-2 sm:p-3 flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-secondary/50 rounded-xl">
              <Search className="w-5 h-5 text-muted-foreground shrink-0" />
              <Input
                placeholder="Job title or keyword"
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
              />
            </div>

            <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-secondary/50 rounded-xl">
              <MapPin className="w-5 h-5 text-muted-foreground -shrink-0" />
              <Input
                placeholder="City or remote"
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
              />
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-xl"
            >
              Search Jobs
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Popular searches: Designer, Developer, Manager, Marketing
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
