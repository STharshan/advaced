import { useEffect, useRef, useState } from "react";
import { Music, Crown, CalendarCheck, GlassWater, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    rotation: "rotate-0",
    title: "Live Music Experience",
    desc: "Get lost in the rhythm as our DJs and performers deliver high-energy sets that keep the crowd moving all night long. Each beat, light, and visual is crafted to create an electrifying and unforgettable atmosphere.",
    borderFrom: "from-[#7C2FC0]", // Deep Purple
    borderTo: "to-[#D4187A]",   // Hot Magenta
    icon: Music,
    linearId: "grad1",
    colors: ["#7C2FC0", "#D4187A"]
  },
  {
    id: 2,
    rotation: "rotate-1",
    title: "VIP Lounge Access",
    desc: "Relax in style with exclusive seating, personalized service, and premium amenities. Every detail is thoughtfully designed to make your night luxurious, comfortable, and absolutely unforgettable from start to finish.",
    borderFrom: "from-[#D4187A]", // Hot Magenta
    borderTo: "to-[#FF6D00]",   // Sunset Orange
    icon: Crown,
    linearId: "grad2",
    colors: ["#D4187A", "#FF6D00"]
  },
  {
    id: 3,
    rotation: "rotate-3",
    title: "Private Event Hosting",
    desc: "Celebrate birthdays, corporate gatherings, or special occasions in spaces perfectly tailored just for you. Our expert team handles every single detail to ensure your private event is flawless and unforgettable.",
    borderFrom: "from-[#FF6D00]", // Sunset Orange
    borderTo: "to-[#FFB800]",   // Chrome Gold
    icon: CalendarCheck,
    linearId: "grad3",
    colors: ["#FF6D00", "#FFB800"]
  },
  {
    id: 4,
    rotation: "rotate-6",
    title: "Signature Cocktails & Bar",
    desc: "Savor expertly crafted cocktails that excite your senses and perfectly complement the vibrant club energy. Each drink is thoughtfully designed to enhance your night and leave a lasting, unforgettable impression.",
    borderFrom: "from-[#FFB800]", // Chrome Gold
    borderTo: "to-[#FF6D00]",   // Sunset Orange
    icon: GlassWater,
    linearId: "grad4",
    colors: ["#FFB800", "#FF6D00"]
  },
];

function ServiceCard({ service, translateY, zIndex, opacity, isMobile }) {
  const IconComponent = service.icon;

  return (
    <div
      className={`absolute w-full ${service.rotation}`}
      style={{ 
        maxWidth: isMobile ? "100%" : 420, 
        zIndex, 
        transform: `translateY(${translateY}%)`, 
        opacity, 
        willChange: "transform, opacity" 
      }}
    >
      <div className={`bg-linear-to-br ${service.borderFrom} ${service.borderTo} rounded-xl p-px`}>
        <div className="bg-[#08060F] rounded-xl p-7 flex flex-col gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#7C2FC0]/10 rounded-full blur-2xl" />
          
          <div className="relative w-12 h-12 flex items-center justify-center bg-[#08060F] rounded-xl">
            <svg width="0" height="0">
              <linearlinear id={service.linearId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={service.colors[0]} />
                <stop offset="100%" stopColor={service.colors[1]} />
              </linearlinear>
            </svg>
            <IconComponent 
              size={28} 
              stroke={`url(#${service.linearId})`} 
              strokeWidth={1.5}
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <div className={`w-5 h-0.5 bg-linear-to-r ${service.borderFrom} ${service.borderTo}`} />
              <span className="font-['Share_Tech_Mono'] text-[10px] text-[#FF6D00] tracking-widest uppercase">Service</span>
            </div>
            <h3 className="text-white text-xl font-['Bebas_Neue'] uppercase tracking-wide leading-tight m-0">
              {service.title}
            </h3>
            <p className="text-[#B8C0CC] font-['Rajdhani'] text-sm leading-relaxed m-0">
              {service.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookNowBtn() {
  const [hov, setHov] = useState(false);
  return (
    <a
      href="#contact"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-white font-bold italic text-sm no-underline transition-all duration-200 ${
        hov
          ? "bg-linear-to-r from-[#D4187A] to-[#FF6D00] shadow-lg shadow-[#D4187A]/40 scale-105"
          : "bg-linear-to-r from-[#7C2FC0] to-[#D4187A] shadow-md shadow-[#7C2FC0]/40 scale-100"
      }`}
    >
      Book Now
      <ArrowRight size={18} strokeWidth={2.5} />
    </a>
  );
}

export default function ServicesSection() {
  const outerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const p = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  const TOTAL_EXITS = services.length - 1;
  const phaseSize = 1 / TOTAL_EXITS;

  const getCardState = (i) => {
    if (i === services.length - 1) return { translateY: 0, opacity: 1, zIndex: 1 };
    const local = Math.min(Math.max((progress - i * phaseSize) / phaseSize, 0), 1);
    return {
      translateY: local * -200,
      opacity: local > 0.75 ? 1 - (local - 0.75) / 0.25 : 1,
      zIndex: services.length - i,
    };
  };

  const activeIndex = Math.round(progress * (services.length - 1));
  const dotAccents = ["bg-[#7C2FC0]", "bg-[#D4187A]", "bg-[#FF6D00]", "bg-[#FFB800]"];

  return (
    <section ref={outerRef} className="relative bg-[#08060F]" style={{ height: "300vh" }}>

      {/* Ambient glows */}
      <div className="sticky top-0 min-h-screen pointer-events-none">
        <div className="absolute top-1/4 left-[5%] w-[30vw] h-[30vw] rounded-full bg-[#7C2FC0]/10 blur-[80px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-[#D4187A]/10 blur-[80px]" />
      </div>

      <div className="sticky top-0 min-h-screen -mt-[100vh] pb-20 flex items-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-[clamp(24px,5vw,80px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-[clamp(40px,6vw,120px)] items-center">

            <div className="flex flex-col gap-5 pt-20 md:gap-6">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-0.5 bg-[#FF6D00]" />
                <span className="font-['Share_Tech_Mono'] text-[10px] text-[#FF6D00] tracking-[0.26em] uppercase">
                  What we provide
                </span>
              </div>

              <h2 className="text-white font-['Bebas_Neue'] uppercase tracking-wide leading-none m-0 text-[clamp(2.2rem,3.8vw,3.5rem)]">
                Our Exclusive<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7C2FC0] to-[#D4187A] font-['Exo_2'] italic">
                  Services
                </span>
              </h2>

              <p className="font-['Rajdhani'] font-medium text-[#B8C0CC] text-sm md:text-base leading-[1.85] max-w-md m-0">
                At Advanced Autobody Solutions, we go beyond music and lights. We create experiences that
                bring people together, offering premium services to make every night
                unforgettable.
              </p>

              <div className="flex items-center gap-2">
                {services.map((_, i) => (
                  <div
                    key={i}
                    className={`h-0.5 rounded-full transition-all duration-300 ${
                      activeIndex === i ? `${dotAccents[i]} w-9` : "bg-[#7C2FC0]/20 w-2"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-1">
                <BookNowBtn />
              </div>
            </div>

            <div
              className="relative flex justify-center items-center overflow-visible"
              style={{ height: isMobile ? 300 : 360 }}
            >
              {services.map((service, i) => {
                const { translateY, opacity, zIndex } = getCardState(i);
                return (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    translateY={translateY}
                    zIndex={zIndex}
                    opacity={opacity}
                    isMobile={isMobile}
                  />
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}