import { Link } from "react-router-dom";

const CaseCard = ({ title, img, href }) => (
  <a href={href || "#"} className="group cursor-pointer">
    {/* Image */}
    <div className="relative overflow-hidden rounded-3xl aspect-16/10">
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#08060F]/90 via-[#08060F]/20 to-transparent" />
    </div>
  </a>
);

const RepairCases = ({ data }) => {
  const { heading, subheading, viewAllLabel, viewAllHref, items } = data;

  return (
    <section className="bg-[#08060F] py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            {heading}
          </h2>
          <p className="text-[#B8C0CC] max-w-xl mx-auto text-sm md:text-lg">
            {subheading}
          </p>
          <Link
            to="/#gallery"
            className="inline-block bg-[#7C2FC0] text-white px-8 py-3 rounded-full font-bold hover:bg-[#D4187A] transition-colors"
          >
            {viewAllLabel}
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <CaseCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepairCases;