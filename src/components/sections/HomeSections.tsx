
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

export default function HomeSection({ scrollToSection }: { scrollToSection: (section: string) => void }) {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">Expert Electrical Solutions in Ujjain</h2>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Licensed electricians providing residential, commercial & industrial services
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition flex items-center space-x-2"
          >
            <span>Get Free Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition"
          >
            Our Services
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <Shield className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
            <p className="text-blue-100">Certified professionals with full coverage</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">24/7 Emergency Service</h3>
            <p className="text-blue-100">Always ready for urgent issues</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <Award className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">15+ Years Experience</h3>
            <p className="text-blue-100">Trusted across Ujjain</p>
          </div>
        </div>
      </div>
    </section>
  );
}
