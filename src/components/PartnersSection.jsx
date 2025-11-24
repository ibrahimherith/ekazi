const partners = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
  },
  {
    name: "Meta",
    logo: "https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png",
  },
];

const PartnersSection = () => {
  // Duplicate list for infinite scroll
  const scrollingLogos = [...partners, ...partners];

  return (
    <section className="py-12 sm:py-16 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-12 animate-scroll hover:[animation-play-state:paused]">
            {scrollingLogos.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-all grayscale hover:grayscale-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
