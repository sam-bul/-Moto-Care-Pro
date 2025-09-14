export function BrandsSection() {
  const brands = [
    { name: "Hero", logo: "/hero-motocorp-logo.jpg" },
    { name: "Honda", logo: "/honda-motorcycle-logo.jpg" },
    { name: "Yamaha", logo: "/yamaha-motorcycle-logo.jpg" },
    { name: "Royal Enfield", logo: "/royal-enfield-logo.jpg" },
    { name: "Bajaj", logo: "/bajaj-motorcycle-logo.jpg" },
    { name: "Suzuki", logo: "/suzuki-motorcycle-logo.jpg" },
    { name: "KTM", logo: "/ktm-motorcycle-logo.jpg" },
    { name: "TVS", logo: "/tvs-motorcycle-logo.jpg" },
  ]

  return (
    <section id="brands" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">We Work With All Brands</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Expert service for all major motorcycle brands. No matter what you ride, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-card rounded-lg hover:shadow-md transition-shadow"
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

      
      </div>
    </section>
  )
}
