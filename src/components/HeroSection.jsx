import { Search, MapPin, CheckCircle } from "lucide-react";
import { Button } from "./ui/Button";
import { statistics } from "../data/job-categories";

export default function HeroSection() {
  return (
    <section className="bg-white py-20 pb-10 sm:py-28 sm:pb-14 lg:py-32 lg:pb-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero content */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-Blue sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 ">
            A place where
            <span className="block text-Orange mt-2">employers</span>
            meet potential candidates
          </h1>

          <p className="text-lg sm:text-xl text-Orange mb-10">
            Set your career in motion with eKazi.
          </p>

          {/* Search Bar */}
          <div className="w-full mx-auto max-w-3xl bg-Blue backdrop-blur-md rounded-full flex items-center gap-4 p-1.5 border-none">
            <input
              type="text"
              placeholder="What are you looking for ..."
              className="w-full bg-transparent outline-none text-white placeholder-white/70 px-4"
            />

            <Button className="bg-Orange text-white font-medium px-6 py-2 rounded-full border-none hover:bg-orange-600">
              <Search size={18} />
              Search
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="max-w-4xl mx-auto pt-20 sm:pt-28 lg:pt-32 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {statistics.map((job, index) => {
            const Icon = job.icon;

            return (
              <div key={index} className="flex flex-col items-center">
                <Icon className="text-Orange" size={38} />
                <h3 className="text-Blue text-lg font-semibold mt-3">
                  {job.title}
                </h3>
                <p className="text-gray-700 mt-1">{job.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
