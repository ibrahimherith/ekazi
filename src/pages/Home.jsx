import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import JobCategories from "../components/JobCategories";
import Navbar from "../components/Navbar";
import PartnersSection from "../components/PartnersSection";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <JobCategories />
        <TestimonialsSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
