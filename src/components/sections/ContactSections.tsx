/* eslint-disable @typescript-eslint/no-explicit-any */
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection({
  formData,
  handleInputChange,
  handleSubmit,
}: {
  formData: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-emerald-50 to-emerald-50">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-900">
          Contact Us
        </h2>

        <p className="text-xl text-emerald-900/80 text-center mb-14">
          Get expert electrical & renewable energy consultancy from certified professionals.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input label="Name" name="name" value={formData.name} onChange={handleInputChange} />
              <Input label="Email" type="email" name="email" value={formData.email} onChange={handleInputChange} />
              <Input label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />

              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <option value="">Select Service</option>
                <option value="Installation">Electrical Installation</option>
                <option value="Audit">Energy Audit</option>
                <option value="Maintenance">Preventive Maintenance</option>
                <option value="Renewable">Renewable Energy / Solar Setup</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border rounded-lg
                focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Describe your requirements..."
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-400
                text-blue-950 py-3 rounded-lg text-lg font-bold
                hover:from-emerald-400 hover:to-emerald-300 transition-all"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <InfoCard
              icon={<Phone className="w-6 h-6 text-emerald-600" />}
              title="Phone Numbers"
              lines={["9827309042", "9768477075"]}
            />

            <InfoCard
              icon={<Mail className="w-6 h-6 text-emerald-600" />}
              title="Email Address"
              lines={["ramamelectricals@gmail.com"]}
            />

            <InfoCard
              icon={<MapPin className="w-6 h-6 text-emerald-600" />}
              title="Office Address"
              lines={[
                "B 31/8 Basant Vihar",
                "Indore Road, Ujjain, Madhya Pradesh",
              ]}
            />

            <InfoCard
              icon={<Clock className="w-6 h-6 text-emerald-600" />}
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

/* ================= Components ================= */

function Input({ label, ...props }: { label: string; [key: string]: any }) {
  return (
    <div>
      <label className="block mb-2 font-semibold text-gray-700">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-3 border rounded-lg
        focus:outline-none focus:ring-2 focus:ring-emerald-400"
        placeholder={label}
      />
    </div>
  );
}

function InfoCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl flex space-x-4">
      {icon}
      <div>
        <p className="font-semibold text-blue-900">{title}</p>
        {lines.map((l, i) => (
          <p key={i} className="text-gray-700">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}
