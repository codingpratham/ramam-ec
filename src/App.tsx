
import { useState } from "react";

// Layout
import Navbar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

// Sections
import HomeSection from "./components/sections/HomeSections";
import ServicesSection from "./components/sections/ServicesSections";
import AboutSection from "./components/sections/AboutSections";
import ProjectsSection from "./components/sections/ProjectSections";
import ContactSection from "./components/sections/ContactSections";


export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Projects Data
  const projects = [
    {
      title: "Luxury Villa - Arera Colony",
      type: "Residential",
      description: "Complete villa electrical wiring and automation.",
      year: "2024"
    },
    {
      title: "Corporate Office - DB Mall Road",
      type: "Commercial",
      description: "Office electrical work with backup systems.",
      year: "2024"
    },
    {
      title: "Manufacturing Unit - Mandideep",
      type: "Industrial",
      description: "3-phase wiring and industrial control setup.",
      year: "2023"
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Ujjain",
      rating: 5,
      text: "Excellent and professional service. Highly recommended!"
    },
    {
      name: "Priya Verma",
      location: "Ujjain",
      rating: 5,
      text: "Quick response and quality work. Very satisfied!"
    },
    {
      name: "Amit Patel",
      location: "Ujjain",
      rating: 5,
      text: "They completed our office electrical setup on time."
    }
  ];

  // Form handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
    }
    alert("Thank you! We will contact you soon.");
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  // Section Navigation
  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {activeSection === "home" && (
        <HomeSection scrollToSection={scrollToSection} />
      )}

      {activeSection === "services" && (
        <ServicesSection />
      )}

      {activeSection === "about" && <AboutSection />}

      {activeSection === "projects" && (
        <ProjectsSection
          projects={projects}
          testimonials={testimonials}
        />
      )}

      {activeSection === "contact" && (
        <ContactSection
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      )}

      <Footer scrollToSection={scrollToSection} />

    </div>
  );
}
