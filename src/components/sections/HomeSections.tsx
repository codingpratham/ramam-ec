import { ArrowRight, Shield, Clock, Award } from "lucide-react";

export default function HomeSection({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) {
  return (
    <section
      className="relative text-white py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509391366360-2e959784a276')",
      }}
    >
      {/* Dark + Solar Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-emerald-900/85 to-blue-950/90"></div>

      <div className="relative container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Smart Solar & Electrical Solutions in Ujjain
        </h2>

        <p className="text-xl md:text-2xl mb-10 text-emerald-100">
          Sustainable solar power & certified electrical services for homes,
          businesses & industries
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap justify-center gap-5 mb-14">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-emerald-400 text-blue-950 px-8 py-4 rounded-lg font-bold text-lg
            hover:bg-emerald-300 transition-all duration-300 flex items-center space-x-2 shadow-lg"
          >
            <span>Get Free Solar Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="bg-transparent border-2 border-emerald-300 px-8 py-4 rounded-lg
            font-bold text-lg hover:bg-emerald-300 hover:text-blue-950
            transition-all duration-300"
          >
            Our Services
          </button>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
            <Shield className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
            <h3 className="text-xl font-bold mb-2">Licensed & Solar Certified</h3>
            <p className="text-emerald-100">
              Government approved solar & electrical experts
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
            <Clock className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
            <h3 className="text-xl font-bold mb-2">Fast Installation</h3>
            <p className="text-emerald-100">
              Quick solar setup & 24/7 electrical support
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
            <Award className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
            <h3 className="text-xl font-bold mb-2">15+ Years Experience</h3>
            <p className="text-emerald-100">
              Trusted energy solutions across Ujjain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
