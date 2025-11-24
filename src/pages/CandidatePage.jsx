import CandidateProfile from "../components/CandidateProfile";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CandidatePage = () => {
  return (
    <div className="min-h-screen font-Outfit">
      <Navbar />
      <main>
        <CandidateProfile />
      </main>
      <Footer />
    </div>
  );
};

export default CandidatePage;
