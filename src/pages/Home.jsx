import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import JobCategories from "../components/JobCategories";
import JobHighlightSection from "../components/JobHighlightSection";
import JobsSection from "../components/JobsSection";
import Navbar from "../components/Navbar";
import PartnersSection from "../components/PartnersSection";

const Home = () => {
  return (
    <div className="min-h-screen font-Outfit">
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <JobCategories />
        <JobsSection />
        <FeaturesSection />
        <JobHighlightSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
