
import {  CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10 text-center">
          About Ramam Electricals & Energy Consultants
        </h2>

        {/* Company Overview */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-10 leading-relaxed text-lg text-gray-700">
          <p className="mb-4">
            Ramam Electricals and Energy Consultants is a premier A-Class electrical contractor and
            energy solutions provider specializing in installation, maintenance, testing, and
            energy optimization services. We deliver reliable, safe, and efficient electrical
            systems for commercial, industrial, and renewable energy sectors.
          </p>

          <p>
            With a commitment to quality and innovation, we provide turnkey project execution,
            energy audits, preventive maintenance, and sustainable electrical solutions for a wide
            range of clients across India.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card
            title="Our Mission"
            text="To offer state-of-the-art electrical contracting and advanced energy solutions that minimize downtime, maximize safety, and promote sustainable energy use."
          />
          <Card
            title="Our Vision"
            text="To be India's leading electrical and energy consultancy providing innovative, energy-efficient, and reliable solutions with the highest safety standards."
          />
        </div>

        {/* Values */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Core Values</h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            {[
              "Integrity – We conduct business honestly and responsibly.",
              "Excellence – Delivering top-quality services and exceeding client expectations.",
              "Innovation – Embracing advanced technologies and smarter solutions.",
              "Sustainability – Promoting energy-efficient and eco-friendly practices.",
            ].map((item, i) => (
              <li key={i} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Government Registrations */}
        <div className="bg-blue-900 text-white p-8 rounded-xl shadow-lg mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Government Registrations</h3>

          <div className="space-y-3 text-blue-100 text-lg">
            <p>• Class ‘A’ Govt. Electrical Contractor (License No. 18/8673 ‘A’)</p>
            <p>• Registered Solar Vendor - M.P.P.K.V.V.Co. Ltd.</p>
            <p>• Registered Vendor - MPPWD (Reg. No. PWD240074998)</p>
          </div>
        </div>

        {/* Industries Served */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Industries We Serve</h3>

          <div className="grid md:grid-cols-3 gap-6 text-gray-700 text-lg">
            <Industry title="Commercial" />
            <Industry title="Industrial" />
            <Industry title="Renewable Energy Projects" />
          </div>

          <p className="text-gray-600 mt-4 text-center">
            Fully compliant with local & international electrical safety regulations.
          </p>
        </div>

        {/* Leadership */}
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Leadership Team</h3>

          <div className="space-y-6 text-lg text-gray-800">
            <p>
              <strong>Founder & CEO:</strong> Mr. Updesh Pandey  
              <br />
              Chartered Engineer (India), Govt. Electrical Supervisor  
              'A' Class Electrical Contractor  
              B.E. (Electrical) | M.Tech (Electronics & Communication)
            </p>

            <p>
              <strong>Business Development Associate:</strong> Mr. Swapnil Subhedar  
              B.E. (Electrical & Electronics Engineering)  
              MBA (Marketing & Sales)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

function Industry({ title }: { title: string }) {
  return (
    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center font-semibold">
      {title}
    </div>
  );
}
