/* eslint-disable @typescript-eslint/no-explicit-any */
import { Zap, Menu, X } from "lucide-react";

export default function Navbar({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }: any) {
  const sections = ["home", "services", "about", "projects", "contact"];

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <Zap className="w-10 h-10 text-yellow-400" />
            <div>
              <h1 className="text-2xl font-bold">Ramam Electrical</h1>
              <p className="text-xs text-blue-200">Powering Your World Safely</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-yellow-400 transition ${
                  activeSection === section ? "text-yellow-400 font-semibold" : ""
                }`}
              >
                {section}
              </button>
            ))}
          </nav>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-2 capitalize hover:bg-blue-800 rounded"
              >
                {section}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
