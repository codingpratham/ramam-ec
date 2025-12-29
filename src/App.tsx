/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";

// Layout
import Navbar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

// Sections
import HomeSection from "./components/sections/HomeSections";
import AboutSection from "./components/sections/AboutSections";
import ProjectsSection from "./components/sections/ProjectSections";
import ContactSection from "./components/sections/ContactSections";
import ProductsSection from "./components/sections/ProductsSections";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Refs for sections
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Data
  const projects = [
    {
      title: "Luxury Villa - Arera Colony",
      type: "Residential",
      description: "Complete villa electrical wiring and automation.",
      year: "2024",
    },
    {
      title: "Corporate Office - DB Mall Road",
      type: "Commercial",
      description: "Office electrical work with backup systems.",
      year: "2024",
    },
    {
      title: "Manufacting Unit - Mandideep",
      type: "Industrial",
      description: "3-phase wiring and industrial control setup.",
      year: "2023",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Ujjain",
      rating: 5,
      text: "Excellent and professional service. Highly recommended!",
    },
    {
      name: "Priya Verma",
      location: "Ujjain",
      rating: 5,
      text: "Quick response and quality work. Very satisfied!",
    },
    {
      name: "Amit Patel",
      location: "Ujjain",
      rating: 5,
      text: "They completed our office electrical setup on time.",
    },
  ];

  // Scroll handler
  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);

    const map: any = {
      home: homeRef,
      services: servicesRef,
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef,
      products: productsRef
    };

    map[section]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Form handlers
  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const WHATSAPP_NUMBER = "+919768477075";
    const { name, email, phone, service, message } = formData;

    const text = `
*New Inquiry from Website*
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message}
    `;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div ref={homeRef} id="home">
        <HomeSection scrollToSection={scrollToSection} />
      </div>

      <div ref={productsRef} id="products">
        <ProductsSection/>
      </div>

      <div ref={aboutRef} id="about">
        <AboutSection />
      </div>

      <div ref={projectsRef} id="projects">
        <ProjectsSection
          projects={projects}
          testimonials={testimonials}
        />
      </div>

      <div ref={contactRef} id="contact">
        <ContactSection
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
