import { CheckCircle } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Electrical Installations",
      description:
        "Design, installation & commissioning of commercial and industrial electrical systems built to latest BIS & IEC standards.",
      features: [
        "Commercial building wiring",
        "Industrial electrical systems",
        "Power distribution panels",
        "Turnkey electrical project execution",
      ],
    },
    {
      title: "Energy Consultancy & Audits",
      description:
        "Comprehensive energy audits & optimization strategies to reduce consumption, improve efficiency & lower operating costs.",
      features: [
        "Energy efficiency assessment",
        "Renewable energy feasibility",
        "Load analysis & optimization",
        "Energy-saving equipment recommendation",
      ],
    },
    {
      title: "Preventive Maintenance & Testing",
      description:
        "Scheduled electrical maintenance, safety testing & inspections ensuring long-term reliability and safety.",
      features: [
        "Thermography testing",
        "Earth resistance testing",
        "Preventive repair & servicing",
        "Shutdown maintenance",
      ],
    },
    {
      title: "Emergency Electrical Services (24/7)",
      description:
        "Rapid response for electrical failures, system breakdowns & urgent power issues requiring immediate attention.",
      features: [
        "Emergency troubleshooting",
        "Fault restoration",
        "Fuse & breaker issues",
        "Risk mitigation",
      ],
    },
    {
      title: "Electrical System Upgrades",
      description:
        "Modernizing outdated systems with energy-efficient, high-performance electrical technology.",
      features: [
        "Panel upgrades",
        "Wiring system replacement",
        "Power system enhancement",
        "Smart electrical integration",
      ],
    },
    {
      title: "Lighting Solutions",
      description:
        "Design and installation of LED lighting, smart lighting & industrial outdoor lighting systems.",
      features: [
        "LED retrofitting",
        "Smart lighting",
        "Street lighting",
        "Commercial lighting design",
      ],
    },
    {
      title: "Renewable Energy Solutions",
      description:
        "Solar, wind & hybrid system integration for sustainable and cost-effective power generation.",
      features: [
        "Solar PV installation",
        "Hybrid power setup",
        "Grid-tied & off-grid solutions",
        "Energy storage integration",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-emerald-50 to-emerald-50">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-14">
          Our Core Services
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl
              transition-transform duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-700 mb-5 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 text-gray-700">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
