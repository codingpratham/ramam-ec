import { BatteryCharging, Sun, Zap, Cpu, Lightbulb, Car } from "lucide-react";

// Product Images
import dc1 from "../../../public/dc-combiner-box-1.jpeg";
import dc2 from "../../../public/dc-combiner-box-2.jpeg";
import ac1 from "../../../public/ac-combiner-box.jpeg";
import spd1 from "../../../public/dc-spd-box.jpeg";
import kit from "../../../public/solar-protection-kit.jpeg";

export default function ProductsSection() {

  const categories = [
    {
      category: "Solar Panels",
      icon: <Sun className="w-10 h-10 text-emerald-500" />,
      items: [
        "Mono PERC Solar Panels",
        "Polycrystalline Panels",
        "High-Efficiency Rooftop Panels",
        "Utility Scale Solar Modules",
      ],
    },
    {
      category: "Solar Inverters",
      icon: <Cpu className="w-10 h-10 text-emerald-500" />,
      items: [
        "On-Grid Solar Inverters",
        "Off-Grid Inverters",
        "Hybrid Inverters",
        "String & Central Inverters",
      ],
    },
    {
      category: "Energy Storage (Batteries)",
      icon: <BatteryCharging className="w-10 h-10 text-emerald-500" />,
      items: [
        "Lithium-Ion Batteries",
        "Tubular Lead Acid Batteries",
        "Solar Battery Banks",
        "Energy Storage Systems (ESS)",
      ],
    },
    {
      category: "Electrical Panels & Systems",
      icon: <Zap className="w-10 h-10 text-emerald-500" />,
      items: [
        "LT & HT Panels",
        "Solar AC/DC Combiner Boxes",
        "Power Distribution Boards",
        "Protection & Control Panels",
      ],
    },
    {
      category: "LED & Smart Lighting",
      icon: <Lightbulb className="w-10 h-10 text-emerald-500" />,
      items: [
        "Industrial LED Lighting",
        "Street & Outdoor Lighting",
        "Smart Lighting Solutions",
        "Energy Efficient Fixtures",
      ],
    },
    {
      category: "EV Charging Solutions",
      icon: <Car className="w-10 h-10 text-emerald-500" />,
      items: [
        "AC EV Chargers",
        "DC Fast Chargers",
        "Commercial EV Charging Stations",
        "Solar Integrated EV Chargers",
      ],
    },
  ];


  const featuredProducts = [
    {
      title: "Solar DC Combiner Box",
      image: dc1,
      description:
        "Pre-wired DC combiner box with DC SPD, DC MCB/Fuse suitable for rooftop and utility solar PV plants.",
      specs: [
        "Up to 1000V DC",
        "DC SPD Type 2",
        "IP65 Enclosure",
        "MC4 Compatible",
      ],
    },
    {
      title: "Solar DC Protection Box",
      image: dc2,
      description:
        "DC protection box with surge protection and fuse disconnector for solar string safety.",
      specs: [
        "DC SPD – Type 2",
        "32A / 1000V DC Fuse",
        "UV Resistant Enclosure",
      ],
    },
    {
      title: "Solar AC Combiner Box",
      image: ac1,
      description:
        "AC combiner box with MCB and AC SPD for inverter output protection.",
      specs: [
        "AC SPD Type 2",
        "C Curve MCB",
        "Single / Three Phase",
      ],
    },
    {
      title: "DC Surge Protection Device Box",
      image: spd1,
      description:
        "Dedicated DC SPD enclosure protecting solar panels and inverter from lightning surges.",
      specs: [
        "IEC 61643 Certified",
        "Visual Status Indicator",
        "Replaceable Cartridge",
      ],
    },
    {
      title: "Solar Electrical Protection Kit",
      image: kit,
      description:
        "Complete solar electrical protection solution including AC + DC protection.",
      specs: [
        "DC SPD + DC MCB",
        "AC SPD + AC MCB",
        "Ready-to-install",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-emerald-50 to-emerald-50">
      <div className="container mx-auto px-4 max-w-7xl">

        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Our Products
          </h2>
          <p className="text-xl text-emerald-900/80 mt-4">
            Certified electrical & renewable energy products for residential,
            commercial & industrial projects.
          </p>
        </div>

     
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl
              hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                {cat.icon}
                <h3 className="text-2xl font-bold text-blue-900">
                  {cat.category}
                </h3>
              </div>

              <ul className="space-y-3 text-gray-700 text-lg">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-emerald-500 mr-2">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-center text-blue-900 mb-14">
          Featured Solar Protection Products
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl overflow-hidden
              hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h4 className="text-xl font-bold text-blue-900 mb-2">
                  {p.title}
                </h4>

                <p className="text-gray-700 mb-4">
                  {p.description}
                </p>

                <ul className="space-y-1 text-gray-600 text-sm">
                  {p.specs.map((s, idx) => (
                    <li key={idx}>✔ {s}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <p className="text-center mt-20 text-gray-700 text-lg">
          All products comply with IEC & MNRE solar standards.
          Bulk supply, EPC & turnkey project support available.
        </p>

      </div>
    </section>
  );
}
