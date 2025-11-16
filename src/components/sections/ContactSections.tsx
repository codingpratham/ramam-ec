/* eslint-disable @typescript-eslint/no-explicit-any */
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection({
  formData,
  handleInputChange,
  handleSubmit,
}:{
  formData: { name: string; email: string; phone: string; service: string; message: string },
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void,
}) {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h2>

        <p className="text-xl text-gray-600 text-center mb-12">
          Get expert electrical & energy consultancy from certified professionals.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Name" name="name" value={formData.name} onChange={handleInputChange} />
              <Input label="Email" type="email" name="email" value={formData.email} onChange={handleInputChange} />
              <Input label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />

              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select Service</option>
                <option value="Installation">Electrical Installation</option>
                <option value="Audit">Energy Audit</option>
                <option value="Maintenance">Preventive Maintenance</option>
                <option value="Renewable">Renewable Energy Setup</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="Describe your requirements..."
              />

              <button className="w-full bg-blue-900 text-white py-3 rounded-lg text-lg font-bold hover:bg-blue-800">
                Submit
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <InfoCard
              icon={<Phone className="w-6 h-6 text-blue-600" />}
              title="Phone Numbers"
              lines={["9827309042", "9768477075"]}
            />

            <InfoCard
              icon={<Mail className="w-6 h-6 text-blue-600" />}
              title="Email Address"
              lines={["ramamelectricals@gmail.com"]}
            />

            <InfoCard
              icon={<MapPin className="w-6 h-6 text-blue-600" />}
              title="Office Address"
              lines={[
                "B 31/8 Basant Vihar",
                "Indore Road, Ujjain, Madhya Pradesh",
              ]}
            />

            <InfoCard
              icon={<Clock className="w-6 h-6 text-blue-600" />}
              title="Working Hours"
              lines={[
                "Mon–Sat: 8:00 AM – 8:00 PM",
                "Sunday: 9:00 AM – 5:00 PM",
              ]}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function Input({ label, ...props }:{ label: string; [key: string]: any }) {
  return (
    <div>
      <label className="block mb-2 font-semibold text-gray-700">{label}</label>
      <input {...props} className="w-full px-4 py-3 border rounded-lg" placeholder={label} />
    </div>
  );
}

function InfoCard({ icon, title, lines }:{
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg flex space-x-4">
      {icon}
      <div>
        <p className="font-semibold text-gray-800">{title}</p>
        {lines.map((l, i) => (
          <p key={i} className="text-gray-600">{l}</p>
        ))}
      </div>
    </div>
  );
}
