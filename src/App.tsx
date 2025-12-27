/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/immutability */
import { useRef, useState, useEffect } from "react";

// Layout
import Navbar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

// Sections
import HomeSection from "./components/sections/HomeSections";
import ServicesSection from "./components/sections/ServicesSections";
import AboutSection from "./components/sections/AboutSections";
import ProjectsSection from "./components/sections/ProjectSections";
import ContactSection from "./components/sections/ContactSections";

/* =========================
   Scroll Animation Hook
========================= */
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Section Refs (for navbar scroll)
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Animation Hooks
  const homeAnim = useScrollAnimation();
  const servicesAnim = useScrollAnimation();
  const aboutAnim = useScrollAnimation();
  const projectsAnim = useScrollAnimation();
  const contactAnim = useScrollAnimation();

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
    };

    map[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Form handlers
  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const WHATSAPP_NUMBER = "+917000188012";
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

      {/* HOME */}
      <div
        ref={(el) => {
          homeRef.current = el;
          homeAnim.ref.current = el;
        }}
        id="home"
        className={`transition-all duration-700 ease-out
        ${homeAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <HomeSection scrollToSection={scrollToSection} />
      </div>

      {/* SERVICES */}
      <div
        ref={(el) => {
          servicesRef.current = el;
          servicesAnim.ref.current = el;
        }}
        id="services"
        className={`transition-all duration-700 ease-out
        ${servicesAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <ServicesSection />
      </div>

      {/* ABOUT */}
      <div
        ref={(el) => {
          aboutRef.current = el;
          aboutAnim.ref.current = el;
        }}
        id="about"
        className={`transition-all duration-700 ease-out
        ${aboutAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <AboutSection />
      </div>

      {/* PROJECTS */}
      <div
        ref={(el) => {
          projectsRef.current = el;
          projectsAnim.ref.current = el;
        }}
        id="projects"
        className={`transition-all duration-700 ease-out
        ${projectsAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <ProjectsSection
          projects={projects}
          testimonials={testimonials}
        />
      </div>

      {/* CONTACT */}
      <div
        ref={(el) => {
          contactRef.current = el;
          contactAnim.ref.current = el;
        }}
        id="contact"
        className={`transition-all duration-700 ease-out
        ${contactAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
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
