import { useState } from "react";

const offices = [
  { id: 0, city: "San Francisco", country: "USA" },
  { id: 1, city: "Warsaw", country: "Poland" },
  { id: 2, city: "Copenhagen", country: "Denmark" },
];


const mapPositions = ["30% 40%", "60% 50%", "50% 30%"];

const mapSrc =
  "https://cdn.prod.website-files.com/68c9c39b88fdc718ad27d553/68cebb106bbba6272cf7e106_Map.webp";

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13.832 16.568C14.0385 16.6628 14.2712 16.6845 14.4917 16.6294C14.7122 16.5744 14.9073 16.4458 15.045 16.265L15.4 15.8C15.5863 15.5516 15.8279 15.35 16.1056 15.2111C16.3833 15.0723 16.6895 15 17 15H20C20.5304 15 21.0391 15.2107 21.4142 15.5858C21.7893 15.9609 22 16.4696 22 17V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22C15.2261 22 10.6477 20.1036 7.27208 16.7279C3.89642 13.3523 2 8.7739 2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2L7 2C7.53043 2 8.03914 2.21071 8.41421 2.58579C8.78928 2.96086 9 3.46957 9 4V7C9 7.31049 8.92771 7.61672 8.78885 7.89443C8.65 8.17214 8.44839 8.41371 8.2 8.6L7.732 8.951C7.54842 9.09118 7.41902 9.29058 7.36579 9.51535C7.31256 9.74011 7.33878 9.97637 7.44 10.184C8.80668 12.9599 11.0544 15.2048 13.832 16.568Z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 7L13.009 12.727C12.7039 12.9042 12.3573 12.9976 12.0045 12.9976C11.6517 12.9976 11.3051 12.9042 11 12.727L2 7M4 4L20 4C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18L2 6C2 4.89543 2.89543 4 4 4Z" />
  </svg>
);

export default function Findus() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className="bg-[#111111] w-full min-h-screen font-sans overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="flex flex-col lg:flex-row w-full min-h-screen">

        {/* ───── LEFT PANEL ───── */}
        <div className="flex flex-col w-full lg:w-[45%] px-8 md:px-12 py-10 min-h-screen">

          {/* Top: label + heading + desc */}
          <div className="flex flex-col gap-5 pt-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e03a2f]" />
              <span className="text-[#e03a2f] text-[11px] uppercase tracking-[0.18em] font-semibold">
                offices
              </span>
            </div>

            <h2
              className="text-white font-bold leading-[1.08] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Explore Our Office<br />Locations
            </h2>

            <p className="text-[#777] text-sm leading-relaxed max-w-85">
              For specific inquiries, please reach out to our contact
              representatives at each of our headquarters locations.
            </p>
          </div>

          {/* Spacer pushes cards to bottom */}
          <div className="flex-1" />

          {/* Bottom: Contact Cards */}
        
        </div>

        {/* ───── RIGHT PANEL: MAP ───── */}
        <div className="flex flex-col w-full lg:w-[55%] min-h-[50vh] lg:min-h-screen">

          {/* Tab bar — top of right panel */}
          <div className="flex items-center gap-2 px-4 py-3">
            {offices.map((office) => (
              <button
                key={office.id}
                onClick={() => setActiveTab(office.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap border ${
                  activeTab === office.id
                    ? "bg-[#1e1e1e] border-[#383838] text-white"
                    : "border-transparent text-[#555] hover:text-[#999]"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-200 ${
                    activeTab === office.id ? "bg-[#e03a2f]" : "bg-[#383838]"
                  }`}
                />
                {office.city}, {office.country}
              </button>
            ))}
          </div>

          {/* Map — fills remaining height, rounded top-left corner */}
          <div className="relative flex-1 overflow-hidden rounded-tl-2xl">
            <img
              src={mapSrc}
              alt={`${offices[activeTab].city} map`}
              className="w-full h-full object-cover transition-all duration-700"
              style={{
                objectPosition: mapPositions[activeTab],
                filter: "brightness(0.5) contrast(1.15) grayscale(0.15)",
                minHeight: "400px",
              }}
            />
            {/* Bottom gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(17,17,17,0.55) 0%, transparent 40%)",
              }}
            />
            {/* Left edge blend */}
            <div
              className="absolute inset-y-0 left-0 w-10 pointer-events-none hidden lg:block"
              style={{
                background:
                  "linear-gradient(to right, rgba(17,17,17,0.35), transparent)",
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}