import { useState, FormEvent, ChangeEvent } from "react";
import { Mail, Phone, MapPin, Check, ArrowRight, PhoneCall, HelpCircle } from "lucide-react";
import SEOMeta from "../components/SEOMeta";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Residential",
    location: "Chandigarh",
    budgetRange: "1Cr - 2.5Cr",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = "Provide a valid phone number (min 10 digits)";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Provide a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Please describe your site or requirements";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div id="contact-page" className="bg-stone-50 text-stone-900 min-h-screen pt-28 pb-20">
      <SEOMeta
        title="Contact Us & Book a Consultation | DEVRA Architects"
        description="Book an on-site consultation or studio meeting with Ar. Rajkumar Devra. Tell us about your plot location, budget range, and project type in Chandigarh, Mohali, or Punjab."
        keywords={[
          "hire architects in chandigarh",
          "architect studio contact number mohali",
          "devra architects address new chandigarh",
          "custom house construction consult tricity",
          "interior design quote punjab",
        ]}
        path="contact"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header section */}
        <div className="border-b border-stone-200 pb-10 mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-bold mb-3">
            DEVRA ARCHITECTS // INQUIRIES
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 font-medium tracking-tight">
            Start Your Project
          </h1>
          <p className="text-stone-600 text-xs md:text-sm mt-3 max-w-2xl font-light leading-relaxed">
            Tell us about your site, your lifestyle requirements, and the kind of space you want to build. Our team will review your message and reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Contact Details & Info (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 font-mono font-bold block">
                DIRECT CONTACTS
              </span>
              <h2 className="font-serif text-2xl text-stone-900 font-medium tracking-tight">
                DEVRA Studio Details
              </h2>
              <p className="text-stone-600 text-xs leading-relaxed font-light">
                For immediate inquiries, consultations, or physical site evaluations, please call or email our principal desk directly.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-5">
              <a
                href="mailto:info@devra.in"
                id="contact-email-link"
                className="flex items-start gap-4 p-4 border border-stone-200 bg-stone-100 hover:border-stone-400 transition-colors group cursor-pointer"
              >
                <Mail className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[9px] font-mono text-stone-400 uppercase tracking-widest">SEND EMAIL</p>
                  <p className="text-sm font-serif font-medium text-stone-900 group-hover:text-stone-600">info@devra.in</p>
                </div>
              </a>

              <a
                href="tel:+919779662286"
                id="contact-phone-link"
                className="flex items-start gap-4 p-4 border border-stone-200 bg-stone-100 hover:border-stone-400 transition-colors group cursor-pointer"
              >
                <Phone className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[9px] font-mono text-stone-400 uppercase tracking-widest">CALL PHONE DESK</p>
                  <p className="text-sm font-serif font-medium text-stone-900 group-hover:text-stone-600">+91 9779662286</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 border border-stone-200 bg-stone-100">
                <MapPin className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[9px] font-mono text-stone-400 uppercase tracking-widest">LOCATION OFFICE</p>
                  <p className="text-xs text-stone-800 font-medium">New Chandigarh & Sector 58, Mohali, Punjab</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Integration Button */}
            <div className="pt-4 border-t border-stone-200">
              <a
                href="https://wa.me/919779662286?text=Hello%20DEVRA%20Architects,%20I%20am%20interested%20in%20discussing%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                id="whatsapp-chat-button"
                className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-stone-50 text-xs uppercase tracking-widest font-semibold py-3.5 transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <p className="text-[9px] text-stone-400 text-center font-mono mt-1.5 uppercase tracking-wide">
                Highly recommended for mobile users
              </p>
            </div>
          </div>

          {/* Right Block: Interactive Form (Span 8) */}
          <div className="lg:col-span-8 bg-stone-100 p-8 md:p-12 border border-stone-200">
            {isSubmitted ? (
              /* Submission success block */
              <div id="contact-success-block" className="space-y-6 py-8 text-center max-w-xl mx-auto">
                <div className="w-12 h-12 bg-stone-900 text-stone-50 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl text-stone-900 font-medium">Inquiry Received</h3>
                  <p className="text-stone-600 text-xs leading-relaxed font-light">
                    Thank you, <strong>{formData.name}</strong>. Your architectural proposal has been successfully registered on our principal desk. Our coordination team is preparing initial site details and will reach out to you within 24 hours.
                  </p>
                </div>

                {/* Submitted summary info box */}
                <div className="bg-stone-50 p-6 border border-stone-200 text-left text-xs space-y-3 font-mono">
                  <h4 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold border-b border-stone-200 pb-1">
                    Submission Summary
                  </h4>
                  <div className="flex justify-between"><span className="text-stone-400">Project Type:</span> <span className="text-stone-800 font-semibold">{formData.projectType}</span></div>
                  <div className="flex justify-between"><span className="text-stone-400">Site Location:</span> <span className="text-stone-800 font-semibold">{formData.location}</span></div>
                  <div className="flex justify-between"><span className="text-stone-400">Budget Bracket:</span> <span className="text-stone-800 font-semibold">{formData.budgetRange}</span></div>
                  <div className="flex justify-between"><span className="text-stone-400">Direct Contact:</span> <span className="text-stone-800 font-semibold">{formData.phone}</span></div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        projectType: "Residential",
                        location: "Chandigarh",
                        budgetRange: "1Cr - 2.5Cr",
                        message: ""
                      });
                    }}
                    className="text-xs uppercase tracking-widest font-semibold border-b border-stone-900 text-stone-900 hover:text-stone-600 hover:border-stone-600 pb-1 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Active Contact Form */
              <form id="devra-contact-form" onSubmit={handleSubmit} className="space-y-6">
                
                <h3 className="text-xs uppercase tracking-widest text-stone-900 font-semibold font-mono pb-2 border-b border-stone-300">
                  Project Brief Inquiry Form
                </h3>

                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="form-name" className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block font-bold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-stone-50 border border-stone-200 text-xs py-3 px-4 rounded-none focus:outline-none focus:border-stone-400 transition-colors"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-600 text-[10px] font-mono mt-0.5">{errors.name}</p>}
                </div>

                {/* Two Column Grid: Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="form-phone" className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block font-bold">
                      Phone Number * (e.g. +91)
                    </label>
                    <input
                      type="tel"
                      id="form-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border border-stone-200 text-xs py-3 px-4 rounded-none focus:outline-none focus:border-stone-400 transition-colors"
                      placeholder="Enter phone number"
                    />
                    {errors.phone && <p className="text-red-600 text-[10px] font-mono mt-0.5">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="form-email" className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border border-stone-200 text-xs py-3 px-4 rounded-none focus:outline-none focus:border-stone-400 transition-colors"
                      placeholder="Enter email address"
                    />
                    {errors.email && <p className="text-red-600 text-[10px] font-mono mt-0.5">{errors.email}</p>}
                  </div>
                </div>

                {/* Three Column Grid: Project Type, Location, Budget */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Project Type */}
                  <div className="space-y-1">
                    <label htmlFor="form-projectType" className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block font-bold">
                      Project Scope
                    </label>
                    <select
                      id="form-projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border border-stone-200 text-xs py-3 px-3 rounded-none focus:outline-none focus:border-stone-400 transition-colors cursor-pointer"
                    >
                      <option value="Residential">Residential Architecture</option>
                      <option value="Interior Design">Luxury Interior Design</option>
                      <option value="Design-to-Build">Design to Build</option>
                      <option value="Housing">Housing Development</option>
                      <option value="Commercial">Commercial / Hospitality</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div className="space-y-1">
                    <label htmlFor="form-location" className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block font-bold">
                      Site Location
                    </label>
                    <select
                      id="form-location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border border-stone-200 text-xs py-3 px-3 rounded-none focus:outline-none focus:border-stone-400 transition-colors cursor-pointer"
                    >
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="New Chandigarh">New Chandigarh</option>
                      <option value="Mohali">Mohali</option>
                      <option value="Panchkula">Panchkula</option>
                      <option value="Punjab Region">Punjab Region</option>
                      <option value="Haryana Region">Haryana Region</option>
                      <option value="Delhi / NCR">Delhi / NCR</option>
                      <option value="Other">Other India</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="space-y-1">
                    <label htmlFor="form-budgetRange" className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block font-bold">
                      Planned Budget
                    </label>
                    <select
                      id="form-budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border border-stone-200 text-xs py-3 px-3 rounded-none focus:outline-none focus:border-stone-400 transition-colors cursor-pointer"
                    >
                      <option value="Under 50 Lakhs">Under 50 Lakhs</option>
                      <option value="50L - 1 Crore">50L - 1 Crore</option>
                      <option value="1Cr - 2.5 Crore">1Cr - 2.5 Crore</option>
                      <option value="2.5Cr - 5 Crore">2.5Cr - 5 Crore</option>
                      <option value="Above 5 Crores">Above 5 Crores</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="form-message" className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block font-bold">
                    Tell us about your project plot & vision *
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-stone-50 border border-stone-200 text-xs py-3 px-4 rounded-none focus:outline-none focus:border-stone-400 transition-colors resize-none"
                    placeholder="Provide details such as plot size, desired number of bedrooms, family configuration, or style preferences (e.g., Sansarg courtyard style)."
                  />
                  {errors.message && <p className="text-red-600 text-[10px] font-mono mt-0.5">{errors.message}</p>}
                </div>

                {/* Form CTA Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-submit-button"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-50 text-xs uppercase tracking-widest font-bold py-4 transition-all duration-300 cursor-pointer shadow-md rounded-none"
                  >
                    {isSubmitting ? "Submitting Proposal..." : "Submit Architectural Brief"}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
