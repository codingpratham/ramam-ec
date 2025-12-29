/* eslint-disable @typescript-eslint/no-explicit-any */
import { Zap, Menu, X } from "lucide-react";

export default function Navbar({
  activeSection,
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}: any) {
  const sections = ["home", "products", "about", "projects", "contact"];

  return (
    <header className="bg-gradient-to-r from-blue-950 via-emerald-900 to-blue-950
    text-white sticky top-0 z-50 shadow-lg transition-all">
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Zap className="w-10 h-10 text-emerald-400" />
            <div>
              <h1 className="text-2xl font-bold">
                Ramam Electrical & Energy
              </h1>
              <p className="text-xs text-emerald-200">
                Powering a Sustainable Future
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition relative
                hover:text-emerald-400
                ${
                  activeSection === section
                    ? "text-emerald-400 font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-emerald-400"
                    : ""
                }`}
              >
                {section}
              </button>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-2 capitalize
                text-emerald-200 hover:bg-emerald-900 rounded transition"
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
