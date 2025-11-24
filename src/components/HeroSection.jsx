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
          <div className="w-full mx-auto max-w-3xl bg-Blue backdrop-blur-md rounded-full flex items-center gap-4 p-1.5 border-none">
            <input
              type="text"
              placeholder="What are you looking for ..."
              className="w-full bg-transparent outline-none text-white placeholder-white/70 px-4"
            />

            <button className="bg-Orange text-white font-medium cursor-pointer px-6 py-2 rounded-full flex items-center gap-2 border-none hover:bg-orange-600 transition">
              <Search size={18} /> Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
