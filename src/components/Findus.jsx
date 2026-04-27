import { useState } from "react";

const offices = [
  { 
    id: 0, city: "Salford", country: "Greater Manchester", lat: 53.4875, lng: -2.2901, 
    subs: ["Salford City Centre", "Eccles", "Swinton", "Worsley", "Walkden", "Irlam", "Pendleton", "Ordsall", "Little Hulton", "Boothstown"] 
  },
  { 
    id: 1, city: "Stockport", country: "Greater Manchester", lat: 53.4106, lng: -2.1575, 
    subs: ["Stockport Town Centre", "Cheadle", "Bramhall", "Hazel Grove", "Marple", "Romiley", "Edgeley", "Heaton Moor", "Gatley", "Bredbury"] 
  },
  { 
    id: 2, city: "Bolton", country: "Greater Manchester", lat: 53.5781, lng: -2.4282, 
    subs: ["Bolton Town Centre", "Horwich", "Farnworth", "Westhoughton", "Radcliffe", "Kearsley", "Leigh", "Atherton", "Tyldesley", "Little Lever"] 
  },
  { 
    id: 3, city: "Wigan", country: "Greater Manchester", lat: 53.5450, lng: -2.6325, 
    subs: ["Wigan Town Centre", "Leigh", "Atherton", "Hindley", "Ashton-in-Makerfield", "Skelmersdale", "Standish", "Golborne", "Abram", "Ince"] 
  },
  { 
    id: 4, city: "Rochdale", country: "Greater Manchester", lat: 53.6097, lng: -2.1561, 
    subs: ["Rochdale Town Centre", "Heywood", "Middleton", "Milnrow", "Littleborough", "Wardle", "Norden", "Bamford", "Castleton", "Whitworth"] 
  },
  { 
    id: 5, city: "Oldham", country: "Greater Manchester", lat: 53.5409, lng: -2.1114, 
    subs: ["Oldham Town Centre", "Saddleworth", "Royton", "Chadderton", "Failsworth", "Lees", "Shaw", "Crompton", "Springhead", "Uppermill"] 
  },
  { 
    id: 6, city: "Trafford", country: "Greater Manchester", lat: 53.4448, lng: -2.3484, 
    subs: ["Stretford", "Sale", "Altrincham", "Urmston", "Partington", "Bowdon", "Hale", "Timperley", "Flixton", "Davyhulme"] 
  },
  { 
    id: 7, city: "Cheshire", country: "North West", lat: 53.3000, lng: -2.5000, 
    subs: ["Chester", "Crewe", "Macclesfield", "Wilmslow", "Congleton", "Northwich", "Winsford", "Knutsford", "Nantwich", "Ellesmere Port"] 
  },
];

const LocationPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0116 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

function buildMapUrl({ lat, lng }) {
  const bbox = 0.05; 
  const left = (lng - bbox).toFixed(4);
  const right = (lng + bbox).toFixed(4);
  const bottom = (lat - bbox * 0.7).toFixed(4);
  const top = (lat + bbox * 0.7).toFixed(4);
  return (
    `https://www.openstreetmap.org/export/embed.html` +
    `?bbox=${left},${bottom},${right},${top}` +
    `&layer=mapnik` +
    `&marker=${lat},${lng}`
  );
}

export default function Findus() {
  const [activeTab, setActiveTab] = useState(0);
  const active = offices[activeTab];

  return (
    <section className="w-full min-h-screen overflow-hidden" style={{ background: "#08060F" }}>
      <div className="flex flex-col lg:flex-row w-full min-h-screen">

        {/* ── LEFT PANEL ── */}
        <div className="flex flex-col w-full lg:w-[45%] px-6 sm:px-10 md:px-14 py-12 md:py-16 lg:min-h-screen">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full" style={{ background: "#FF6D00" }} />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "#FF6D00" }}>Coverage</span>
          </div>

          <h2 className="font-bold leading-[1.06] mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", color: "#FFFFFF", letterSpacing: "-0.02em" }}>
            Proudly Serving<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7C2FC0] via-[#D4187A] to-[#FF6D00]" style={{  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Greater Manchester
            </span>
          </h2>

          <p className="text-sm leading-relaxed mb-10 max-w-sm" style={{ color: "#B8C0CC" }}>
            Based in Manchester, we provide professional autobody repair services across the surrounding areas.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            {offices.map((office) => {
              const isActive = activeTab === office.id;
              return (
                <button
                  key={office.id}
                  onClick={() => setActiveTab(office.id)}
                  className="flex flex-col items-start gap-1 px-4 py-3 rounded-xl text-left transition-all duration-300 border"
                  style={{
                    background: isActive ? "linear-gradient(135deg, rgba(255,109,0,0.18) 0%, rgba(212,24,122,0.18) 100%)" : "rgba(255,255,255,0.04)",
                    borderColor: isActive ? "rgba(255,109,0,0.55)" : "rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <span style={{ color: isActive ? "#FF6D00" : "#B8C0CC" }}><LocationPinIcon /></span>
                    <span className="text-sm font-semibold" style={{ color: isActive ? "#FFFFFF" : "#B8C0CC" }}>{office.city}</span>
                  </div>
                  <span className="text-[11px] pl-4.5" style={{ color: isActive ? "rgba(255,184,0,0.8)" : "rgba(184,192,204,0.55)" }}>
                    {office.country}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center gap-2.5 px-4 py-2.5 rounded-xl self-start" style={{ background: "rgba(255,109,0,0.1)", border: "1px solid rgba(255,109,0,0.25)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#FF6D00" }} />
            <span className="text-xs font-medium" style={{ color: "#FF6D00" }}>Viewing: {active.city}</span>
          </div>
        </div>

        {/* ── RIGHT PANEL: MAP ── */}
        <div className="flex flex-col w-full lg:w-[55%] min-h-[70vw] sm:min-h-120 lg:min-h-screen">
          <div className="flex flex-wrap items-center gap-2 px-4 py-3 shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            {offices.map((office) => (
              <button
                key={office.id}
                onClick={() => setActiveTab(office.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                style={{
                  background: activeTab === office.id ? "rgba(255,109,0,0.15)" : "transparent",
                  color: activeTab === office.id ? "#FF6D00" : "rgba(184,192,204,0.6)",
                }}
              >
                {office.city}
              </button>
            ))}
          </div>

          <div className="relative flex-1 overflow-hidden rounded-tl-2xl lg:rounded-tl-3xl">
            <iframe
              key={activeTab}
              src={buildMapUrl(active)}
              title={`Map of ${active.city}`}
              width="100%" height="100%"
              className="absolute inset-0 border-0"
              style={{ filter: "invert(0.9) hue-rotate(195deg) saturate(0.9) brightness(0.92)", zIndex: 1 }}
              loading="lazy"
            />

            {/* SUB-CITY OVERLAY (The actual Pins) */}
            <div className="absolute inset-0 pointer-events-none z-10">
              {active.subs.map((sub, i) => (
                <div 
                  key={i} 
                  className="absolute"
                  style={{
                    top: `${30 + (i % 4) * 12}%`,
                    left: `${25 + (i * 7) % 50}%`,
                  }}
                >
                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm border border-white/10 px-2 py-1 rounded-md">
                    <span className="text-[#FF6D00]"><LocationPinIcon /></span>
                    <span className="text-[10px] text-white font-medium whitespace-nowrap">{sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-end justify-between pointer-events-none z-20" style={{ background: "linear-gradient(to top, rgba(8,6,15,0.95), transparent)" }}>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#FF6D00" }}>Currently viewing</p>
                <h3 className="font-bold text-white text-2xl">{active.city}</h3>
                <p className="text-xs text-gray-400">{active.country}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}