const partners = [
  {
    name: "TechCorp",
    logo: "https://via.placeholder.com/120x40/0891b2/ffffff?text=TechCorp",
  },
  {
    name: "DesignStudio",
    logo: "https://via.placeholder.com/120x40/0891b2/ffffff?text=DesignStudio",
  },
  {
    name: "GrowthLab",
    logo: "https://via.placeholder.com/120x40/0891b2/ffffff?text=GrowthLab",
  },
  {
    name: "InnovateCo",
    logo: "https://via.placeholder.com/120x40/0891b2/ffffff?text=InnovateCo",
  },
  {
    name: "DataDrive",
    logo: "https://via.placeholder.com/120x40/0891b2/ffffff?text=DataDrive",
  },
  {
    name: "CloudFirst",
    logo: "https://via.placeholder.com/120x40/0891b2/ffffff?text=CloudFirst",
  },
];

const PartnersSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Trusted by Leading Companies
          </h2>
          <p className="text-muted-foreground">
            Join thousands of employers finding top talent on our platform
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
