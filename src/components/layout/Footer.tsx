import { Zap } from "lucide-react";

export default function Footer({ scrollToSection } : { scrollToSection: (section: string) => void }) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-8 h-8 text-yellow-400" />
              <span className="text-xl font-bold">Ramam Electrical</span>
            </div>
            <p className="text-gray-400">Professional electrical services you can trust.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-yellow-400">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-yellow-400">Services</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-yellow-400">About</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="hover:text-yellow-400">Projects</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Residential Wiring</li>
              <li>Commercial Solutions</li>
              <li>Industrial Services</li>
              <li>Emergency Repairs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+91 9827309042</li>
              <li>ramamelectricals@gmail.com</li>
              <li>Ujjain, MP 456010</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ramam Electrical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
