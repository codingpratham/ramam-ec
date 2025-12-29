import { Zap } from "lucide-react";

export default function Footer({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-emerald-950 to-blue-950 text-white py-14">
      <div className="container mx-auto px-4">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="w-9 h-9 text-emerald-400" />
              <span className="text-xl font-bold">
                Ramam Electrical & Energy
              </span>
            </div>
            <p className="text-emerald-200">
              Reliable electrical & solar energy solutions you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-emerald-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-emerald-200">
              {["home", "services", "about", "projects", "contact"].map(
                (link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link)}
                      className="hover:text-emerald-400 transition"
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-emerald-300">
              Services
            </h4>
            <ul className="space-y-2 text-emerald-200">
              <li>Electrical Installations</li>
              <li>Energy Audits</li>
              <li>Solar Power Systems</li>
              <li>Emergency Repairs</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-emerald-300">
              Contact
            </h4>
            <ul className="space-y-2 text-emerald-200">
              <li>+91 9827309042</li>
              <li>ramamelectricals@gmail.com</li>
              <li>Ujjain, Madhya Pradesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-emerald-900 pt-6 text-center text-emerald-300">
          <p>© 2025 Ramam Electrical & Energy Consultants. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
