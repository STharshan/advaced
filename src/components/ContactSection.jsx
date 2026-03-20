import React, { useState, useRef } from 'react';
import { ChevronDown, Upload, X, ImagePlus } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    note: ''
  });

  const [images, setImages] = useState([]); // array of { file, preview }
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files
      .filter(f => f.type.startsWith('image/'))
      .slice(0, 4 - images.length) // max 4 images total
      .map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
    setImages(prev => [...prev, ...newImages].slice(0, 4));
    // reset input so same file can be re-added if removed
    e.target.value = '';
  };

  const removeImage = (index) => {
    setImages(prev => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phoneNumber = "447440366913";

    // Build WhatsApp text message
    const message =
      `*New Quote Request: Advanced Autobody*%0A%0A` +
      `Name: ${encodeURIComponent(formData.name)}%0A` +
      `Phone: ${encodeURIComponent(formData.phone)}%0A` +
      `Email: ${encodeURIComponent(formData.email)}%0A` +
      `Repair Type: ${encodeURIComponent(formData.service)}%0A` +
      `Notes: ${encodeURIComponent(formData.note)}%0A%0A` +
      (images.length > 0
        ? `_${images.length} photo(s) attached please check images below._`
        : ``);

    // Open WhatsApp chat with the pre-filled message first
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');

    if (images.length > 0) {
      images.forEach((img) => {
        window.open(img.preview, '_blank');
      });
    }

    // Reset
    setFormData({ name: '', phone: '', email: '', service: '', note: '' });
    setImages([]);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-[#08060F] overflow-hidden flex items-center py-20 px-6 md:px-12 lg:px-24 font-['Rajdhani']"
    >

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay loop muted playsInline
          className="w-full h-full object-cover opacity-30"
          poster="https://cdn.prod.website-files.com/68c9c39b88fdc718ad27d553%2F68ce967f3bccb8150a61f857_ContactA-poster-00001.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/68c9c39b88fdc718ad27d553%2F68ce967f3bccb8150a61f857_ContactA-transcode.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-linear-to-r from-[#08060F] via-[#08060F]/80 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-[#08060F] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">

          {/* Left */}
          <div className="flex flex-col justify-between h-full py-4">
            <div className="max-w-xl">
              <h1 className="text-[4rem] md:text-[5.5rem] lg:text-[7rem] font-['Bebas_Neue'] text-white leading-[0.9] tracking-normal mb-6">
                <span className="text-[#7C2FC0] italic font-['Exo_2'] text-[3rem] md:text-[4.5rem] lg:text-[5.5rem]">
                  Get In Touch
                </span>
              </h1>
              <p className="text-[#B8C0CC] text-lg md:text-xl font-medium max-w-md">
                Every Great Repair Starts With a Conversation
              </p>
            </div>

            <div className="mt-20 lg:mt-40">
              <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed max-w-lg mb-8 italic font-['Exo_2']">
                "We don't just fix cars, we give people their pride back."
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-white font-bold text-base tracking-wide">Advanced Autobody Solutions</div>
                  <div className="text-[#D4187A] text-sm font-['Share_Tech_Mono'] uppercase tracking-wider">Manchester</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-[#08060F]/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 w-full lg:max-w-140 ml-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#FFB800] mb-2 uppercase tracking-tight">
                Request Your Free Quote
              </h3>
              <p className="text-[#B8C0CC] text-sm font-medium">
                Tell us about your vehicle and the damage, and we'll get back to you with a fast, no-obligation quote.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#D4187A] font-['Share_Tech_Mono']">Full Name</label>
                  <input
                    type="text" name="name" value={formData.name}
                    onChange={handleChange} placeholder="John Doe" required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7C2FC0] transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#D4187A] font-['Share_Tech_Mono']">Phone Number</label>
                  <input
                    type="tel" name="phone" value={formData.phone}
                    onChange={handleChange} placeholder="07123 456789" required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7C2FC0] transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#D4187A] font-['Share_Tech_Mono']">Email Address</label>
                <input
                  type="email" name="email" value={formData.email}
                  onChange={handleChange} placeholder="your@email.com" required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7C2FC0] transition-all"
                />
              </div>

              {/* Repair Type */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#D4187A] font-['Share_Tech_Mono']">Type of Repair</label>
                <div className="relative">
                  <select
                    name="service" value={formData.service}
                    onChange={handleChange} required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-[#7C2FC0] transition-all cursor-pointer"
                  >
                    <option value="" className="bg-[#08060F]">Select damage type</option>
                    <option value="Scratch" className="bg-[#08060F]">Scratch Repair</option>
                    <option value="Bumper" className="bg-[#08060F]">Bumper Scuff</option>
                    <option value="Dent" className="bg-[#08060F]">Dent Removal</option>
                    <option value="Other" className="bg-[#08060F]">Other / Multiple</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FF6D00] pointer-events-none" size={18} />
                </div>
              </div>

              {/* ── IMAGE UPLOAD ── */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#D4187A] font-['Share_Tech_Mono']">
                  Upload Photos <span className="text-white/30 normal-case tracking-normal font-normal">(up to 4)</span>
                </label>

                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageChange}
                />

                {/* Drop zone only show if under 4 images */}
                {images.length < 4 && (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="w-full bg-white/5 border border-dashed border-white/20 rounded-xl px-4 py-4 flex items-center justify-center gap-3 text-white/50 text-sm hover:border-[#7C2FC0] hover:text-white/80 hover:bg-white/8 transition-all group"
                  >
                    <ImagePlus size={20} className="text-[#FF6D00] group-hover:scale-110 transition-transform" />
                    <span>
                      {images.length === 0
                        ? 'Click to add photos of the damage'
                        : `Add more photos (${images.length}/4)`}
                    </span>
                  </button>
                )}

                {/* Image previews */}
                {images.length > 0 && (
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {images.map((img, i) => (
                      <div key={i} className="relative group rounded-xl overflow-hidden aspect-square border border-white/10">
                        <img
                          src={img.preview}
                          alt={`Upload ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {/* Remove button */}
                        <button
                          type="button"
                          onClick={() => removeImage(i)}
                          className="absolute top-1 right-1 bg-black/70 hover:bg-[#D4187A] text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-all"
                          aria-label="Remove image"
                        >
                          <X size={12} />
                        </button>
                        {/* Index badge */}
                        <div className="absolute bottom-1 left-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded-md font-['Share_Tech_Mono']">
                          {i + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Helper note */}
                <p className="text-[11px] text-white/30 font-['Rajdhani']">
                  Photos will open alongside WhatsApp so you can attach them in the chat.
                </p>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#D4187A] font-['Share_Tech_Mono']">Additional Notes</label>
                <textarea
                  name="note" value={formData.note}
                  onChange={handleChange} rows="2"
                  placeholder="Tell us more..." required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7C2FC0] transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 bg-[#FF6D00] text-[#08060F] py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#FFB800] transition-all shadow-lg"
              >
                <div className="w-2 h-2 rounded-full bg-[#08060F] animate-pulse" />
                <span>Send My Free Quote Request</span>
              </button>

              <p className="text-[11px] text-[#B8C0CC]/60 text-center">
                By submitting this form, you agree to us processing your details to respond to your enquiry.
                Your information is handled securely and in line with our Privacy Policy.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;