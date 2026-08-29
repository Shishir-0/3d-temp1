import React, { useState } from "react";

interface ContactSectionProps {
  studioName?: string;
  headline?: string;
  email?: string;
  phone?: string;
  address?: string;
  instagram?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  studioName = "STUDIO NAME",
  headline = "START A PROJECT",
  email = "inquiries@yourstudio.com",
  phone = "+1 (555) 019-2834",
  address = "Studio Address / City, Country",
  instagram = "@yourstudio.arch",
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Residential Architecture",
    budget: "$500k - $1M",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-stone-200/50 dark:border-stone-800/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* STUDIO METADATA */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-[10px] font-mono tracking-[0.28em] text-stone-400 dark:text-stone-500 uppercase">
              COMMISSIONS / CONTACT
            </span>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight mt-2">
              {headline}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed">
            We collaborate with private clients, developers, and institutions committed to architectural intention and spatial craft.
          </p>

          <div className="space-y-6 pt-6 border-t border-stone-200/50 dark:border-stone-800/50 text-xs font-mono">
            <div>
              <span className="block text-[9px] opacity-40 uppercase tracking-widest">INQUIRIES</span>
              <a href={`mailto:${email}`} className="font-semibold underline hover:opacity-75">
                {email}
              </a>
            </div>

            <div>
              <span className="block text-[9px] opacity-40 uppercase tracking-widest">TELEPHONE</span>
              <a href={`tel:${phone}`} className="font-semibold hover:opacity-75">
                {phone}
              </a>
            </div>

            <div>
              <span className="block text-[9px] opacity-40 uppercase tracking-widest">STUDIO LOCATION</span>
              <span className="text-stone-700 dark:text-stone-300">{address}</span>
            </div>

            <div>
              <span className="block text-[9px] opacity-40 uppercase tracking-widest">SOCIAL PERSPECTIVE</span>
              <span className="text-stone-700 dark:text-stone-300">{instagram}</span>
            </div>
          </div>
        </div>

        {/* ARCHITECTURAL INQUIRY FORM */}
        <div className="lg:col-span-7 bg-stone-50/90 dark:bg-stone-900/40 p-8 sm:p-12 rounded-xs border border-stone-200/50 dark:border-stone-800/50 shadow-sm">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <span className="text-2xl font-mono">✓</span>
              <h3 className="text-2xl font-light tracking-tight">Inquiry Received</h3>
              <p className="text-xs text-stone-500 font-light max-w-sm mx-auto">
                Thank you for reaching out to {studioName}. Our design team will review your project requirements within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 opacity-60">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Client Name"
                    className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-2.5 text-xs focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 opacity-60">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="client@example.com"
                    className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-2.5 text-xs focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 opacity-60">
                    PROJECT DISCIPLINE
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-2.5 text-xs focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 transition-colors"
                  >
                    <option value="Residential Architecture">Residential Architecture</option>
                    <option value="Interior Architecture">Interior Architecture</option>
                    <option value="Hospitality & Cultural">Hospitality & Cultural</option>
                    <option value="3D Spatial Visualization">3D Spatial Visualization</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 opacity-60">
                    ESTIMATED BUDGET
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-2.5 text-xs focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 transition-colors"
                  >
                    <option value="$250k - $500k">$250,000 - $500,000</option>
                    <option value="$500k - $1M">$500,000 - $1,000,000</option>
                    <option value="$1M+">$1,000,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 opacity-60">
                  PROJECT VISION
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe location, spatial objectives, and approximate timeline..."
                  className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-2.5 text-xs focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-stone-950 text-white dark:bg-stone-100 dark:text-stone-950 font-semibold text-xs tracking-[0.2em] uppercase rounded-xs hover:opacity-90 transition-opacity cursor-pointer shadow-md"
              >
                Send Commission Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
