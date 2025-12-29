import { Zap, Star } from "lucide-react";

export default function ProjectsSection({
  projects,
  testimonials,
}: {
  projects: {
    title: string;
    type: string;
    description: string;
    year: string;
  }[];
  testimonials: {
    name: string;
    location: string;
    rating: number;
    text: string;
  }[];
}) {
  const clients = [
    "Hero Future Energies",
    "MIT Group of Institutes – Ujjain",
    "Angeel Oak Chemtech Pvt. Ltd.",
    "Fena Pvt. Ltd.",
    "DCM Nouvelle Speciality Chemicals Ltd.",
    "Wonder Cement – Badnawar",
    "D R Solar & Consultant",
    "Sudhakar PVC Pvt. Ltd.",
    "Aakash Educational Services Ltd.",
    "Great Galleon Ltd.",
    "Shriji Polymers",
    "L&T Dewas",
    "Caparo Engineering India Ltd – Pithampur",
    "Satguru Industries – Pithampur",
    "Agrawal Flour Mill – Khandwa",
    "Chotu Maharaj Cine Cafe – Jhabua",
    "UltraTech Cement – Neemuch",
    "M S Solvex – Neemuch",
    "Divya Jyoti – Dhar",
    "Para Enterprises – Jaora",
    "Vena Energy",
    "Juwi India Renewable Energies Pvt. Ltd.",
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-emerald-50 to-emerald-50">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Recent Projects
          </h2>
          <p className="text-xl text-emerald-900/80 mt-4">
            A glimpse of our successful electrical & renewable energy installations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur rounded-2xl shadow-xl
              overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-900 via-emerald-700 to-blue-900
              flex items-center justify-center">
                <Zap className="w-20 h-20 text-emerald-300 opacity-70" />
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800
                text-sm rounded-full font-semibold">
                  {p.type}
                </span>

                <h3 className="text-xl font-bold text-blue-900 mt-3">
                  {p.title}
                </h3>

                <p className="text-gray-700 mt-2 leading-relaxed">
                  {p.description}
                </p>

                <p className="text-sm text-gray-500 mt-3">
                  Year: {p.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clients */}
        <div className="bg-gradient-to-br from-blue-950 to-emerald-900
        text-white p-10 rounded-2xl shadow-xl mb-20">
          <h3 className="text-3xl font-bold text-center mb-8">
            Our Major Clients
          </h3>

          <div className="grid md:grid-cols-2 gap-3 text-emerald-100 text-lg">
            {clients.map((c, i) => (
              <p key={i}>• {c}</p>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white/90 backdrop-blur p-10 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-10">
            What Our Clients Say
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-lg border
                border-emerald-100"
              >
                <div className="flex mb-3">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-600 italic mb-4">
                  “{t.text}”
                </p>

                <p className="font-bold text-blue-900">
                  {t.name}
                </p>
                <p className="text-sm text-gray-500">
                  {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
