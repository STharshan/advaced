import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    note: '',
    agreed: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#08060F] overflow-hidden flex items-center py-20 px-6 md:px-12 lg:px-24 font-['Rajdhani']">
      
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30"
          poster="https://cdn.prod.website-files.com/68c9c39b88fdc718ad27d553%2F68ce967f3bccb8150a61f857_ContactA-poster-00001.jpg"
        >
          <source src="https://cdn.prod.website-files.com/68c9c39b88fdc718ad27d553%2F68ce967f3bccb8150a61f857_ContactA-transcode.mp4" type="video/mp4" />
        </video>
        {/* Dark Midnight linear Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-[#08060F] via-[#08060F]/80 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-[#08060F] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-360 mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">
          
          {/* Left Side Content */}
          <div className="flex flex-col justify-between h-full py-4">
            <div className="max-w-xl">
              <h1 className="text-[4rem] md:text-[5.5rem] lg:text-[7rem] font-['Bebas_Neue'] text-white leading-[0.9] tracking-normal mb-6">
                Let’s build <br />
                <span className="text-[#7C2FC0] italic font-['Exo_2'] text-[3rem] md:text-[4.5rem] lg:text-[5.5rem]">clarity together</span>
              </h1>
              <p className="text-[#B8C0CC] text-lg md:text-xl font-medium max-w-md">
                Every great project starts with a conversation.
              </p>
            </div>

            <div className="mt-20 lg:mt-40">
              <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed max-w-lg mb-8 italic font-['Exo_2']">
                “Complex problems don’t need more noise — they need structure, clarity, and execution.”
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#7C2FC0]">
                  <img 
                    src="https://cdn.prod.website-files.com/68c9c39b88fdc718ad27d553/68cea86ede2f761450236439_Author%20Contact.webp" 
                    alt="Jessy Mercedes" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-bold text-base tracking-wide">Jessy Mercedes</div>
                  <div className="text-[#D4187A] text-sm font-['Share_Tech_Mono'] uppercase tracking-wider">— Founder, Modulabs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-[#08060F]/60 backdrop-blur-xl border border-white/10 rounded-4xl p-8 md:p-12 w-full lg:max-w-140 ml-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#FFB800] mb-2 uppercase tracking-tight">Send us a message</h3>
              <p className="text-[#B8C0CC] text-sm font-medium">
                Choose the type of inquiry and tell us more about what you need.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#D4187A] font-['Share_Tech_Mono']">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#7C2FC0] focus:ring-1 focus:ring-[#7C2FC0] transition-all font-semibold"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#D4187A] font-['Share_Tech_Mono']">Email Address</label>
                <input 
                  type="email" 
                  placeholder="jon@doe.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#7C2FC0] focus:ring-1 focus:ring-[#7C2FC0] transition-all font-semibold"
                  required
                />
              </div>

              {/* Preferred Time / Service */}
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#D4187A] font-['Share_Tech_Mono']">Preferred Time</label>
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-[#7C2FC0] focus:ring-1 focus:ring-[#7C2FC0] transition-all font-semibold cursor-pointer">
                    <option value="" className="bg-[#08060F]">Type of service</option>
                    <option value="10am" className="bg-[#08060F]">10am - 12am</option>
                    <option value="12pm" className="bg-[#08060F]">12am - 1am</option>
                    <option value="2pm" className="bg-[#08060F]">12am - 2am</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#FF6D00]" size={20} />
                </div>
              </div>

              {/* Optional Note */}
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#D4187A] font-['Share_Tech_Mono']">Optional Note</label>
                <textarea 
                  rows="3" 
                  placeholder="Tell us about your project" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#7C2FC0] focus:ring-1 focus:ring-[#7C2FC0] transition-all resize-none font-semibold"
                ></textarea>
              </div>

              {/* Terms Checkbox */}
              <label className="flex items-start gap-4 cursor-pointer group pt-2">
                <div className="relative mt-1">
                  <input type="checkbox" className="peer hidden" required />
                  <div className="w-6 h-6 border-2 border-white/20 rounded-lg bg-white/5 peer-checked:bg-[#FF6D00] peer-checked:border-[#FF6D00] transition-all flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#08060F] rounded-full opacity-0 peer-checked:opacity-100" />
                  </div>
                </div>
                <span className="text-[14px] text-[#B8C0CC] leading-tight font-medium">
                  By sending this form, I agree to the <a href="#" className="text-white underline underline-offset-4 hover:text-[#FFB800] transition-colors">Terms of Service</a> and <a href="#" className="text-white underline underline-offset-4 hover:text-[#FFB800] transition-colors">Privacy Policy</a>.
                </span>
              </label>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="group w-full relative flex items-center justify-center gap-3 bg-[#FF6D00] text-[#08060F] py-5 rounded-2xl font-bold text-base uppercase tracking-[0.15em] overflow-hidden hover:bg-[#FFB800] hover:scale-[1.01] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(255,109,0,0.3)]"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#08060F] animate-pulse" />
                <span>Send request</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;