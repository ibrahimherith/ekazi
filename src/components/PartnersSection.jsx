import { logos } from "../data/logos";

const PartnersSection = () => {
  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="overflow-hidden relative">
          <div className="flex gap-12 animate-slide hover:[animation-play-state:paused]">
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Logo"
                className="h-16 w-auto object-contain transition"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          width: fit-content;
          animation: slide 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PartnersSection;
