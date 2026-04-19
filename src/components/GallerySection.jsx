import { useState, useEffect, useRef } from 'react';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollContainerRef = useRef(null);

  const projects = [
    { id: "1", image: "a1.jpg" },
    { id: "2", image: "a2.jpg" },
    { id: "3", image: "a3.jpg" },
    { id: "4", image: "a4.jpg" },
    { id: "5", image: "a6.jpg" },
    { id: "6", image: "a7.jpg" },
  ];

  const scrollToCard = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const cardElements = container.querySelectorAll('.project-card');
    const targetCard = cardElements[index];

    if (targetCard) {
      const cardWidth = targetCard.offsetWidth;
      const scrollPosition = targetCard.offsetLeft - (containerWidth / 2) + (cardWidth / 2);

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }

    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerWidth = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      const centerPosition = scrollLeft + containerWidth / 2;

      const cardElements = container.querySelectorAll('.project-card');
      let closestIndex = 0;
      let minDistance = Infinity;

      cardElements.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(centerPosition - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener('scroll', handleScroll);
    setTimeout(() => scrollToCard(1), 200);

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrev = () => activeIndex > 0 && scrollToCard(activeIndex - 1);
  const handleNext = () => activeIndex < projects.length - 1 && scrollToCard(activeIndex + 1);

  return (
    <div id='gallery' className="scroll-m-20 min-h-screen bg-[#08060F] text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden ">
      <div className="max-w-7xl mx-auto p-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Sunset Orange Accent Line */}
              <div className="w-12 h-1 bg-[#FF6D00]"></div>
              <p className="text-sm text-[#B8C0CC]  uppercase tracking-[0.3em]">Portfolio</p>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl  leading-[0.9] tracking-tight">
              Discover Our<br />
              <span className="text-[#7C2FC0]">Completed Projects</span>
            </h1>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="bg-white/5 hover:bg-[#7C2FC0] border border-white/10 disabled:opacity-20 disabled:cursor-not-allowed p-4 rounded-xl transition-all duration-300 group"
            >
              <ChevronsLeft className="w-6 h-6 text-[#FF6D00] group-hover:text-white" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === projects.length - 1}
              className="bg-white/5 hover:bg-[#7C2FC0] border border-white/10 disabled:opacity-20 disabled:cursor-not-allowed p-4 rounded-xl transition-all duration-300 group"
            >
              <ChevronsRight className="w-6 h-6 text-[#FF6D00] group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Projects Carousel */}
        <div className="relative py-6" style={{ perspective: '2000px' }}>
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-8 overflow-x-auto overflow-visible scrollbar-hide scroll-smooth pb-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory' }}
          >
            <div className="shrink-0" style={{ width: 'calc(50vw - 160px)' }}></div>

            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card shrink-0 w-70 py-15 sm:w-88 md:w-113 transition-all duration-700 ease-out cursor-pointer"
                style={{
                  transform: index === activeIndex
                    ? 'scale(1.05) translateZ(100px) translateY(-20px)'
                    : 'scale(0.9) translateZ(0px) translateY(0px)',
                  opacity: index === activeIndex ? 1 : 0.4,
                  zIndex: index === activeIndex ? 50 : 10,
                  scrollSnapAlign: 'center',
                }}
                onClick={() => scrollToCard(index)}
              >
                <div
                  className={`relative rounded-3xl overflow-hidden h-60 md:h-100 md:w-150 transition-all duration-500 ${
                    index === activeIndex
                    ? 'ring-2 ring-[#FF6D00] shadow-[0_0_50px_rgba(124,47,192,0.3)]'
                    : 'ring-1 ring-white/10'
                  }`}
                >
                  <img
                    src={project.image}
                    loading="lazy"
                    alt="Work Gallery"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}

            <div className="shrink-0" style={{ width: 'calc(50vw - 160px)' }}></div>
          </div>

          {/* Pagination Dots using Sunset Orange and Deep Purple */}
          <div className="flex justify-center gap-3 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === activeIndex
                  ? 'bg-[#FF6D00] w-12 shadow-[0_0_10px_#FF6D00]'
                  : 'bg-[#7C2FC0]/30 w-2 hover:bg-[#7C2FC0]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default GallerySection;