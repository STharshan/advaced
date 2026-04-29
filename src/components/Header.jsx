import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

export default function HeroSection() {
    const [showComingSoon, setShowComingSoon] = useState(false);
    const navigate = useNavigate();

    const handleBodyshop = () => {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "instant" });
    };

    const closeModal = () => setShowComingSoon(false);

    // Lock body scroll while modal is open
    useEffect(() => {
        if (showComingSoon) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [showComingSoon]);

    return (
        <>
            <section className="relative h-screen w-full overflow-hidden text-white bg-black">
                {/* Background Video */}
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/bg.png"
                        className="h-full w-full object-cover"
                    >
                        <source src="/hero-banner-video.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/65" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-end">
                    <div className="mx-auto grid h-full w-full max-w-350 grid-cols-12 px-6 sm:px-8 lg:px-10">
                        {/* Left */}
                        <div className="col-span-12 flex flex-col justify-end pb-14 sm:pb-16 md:pb-20 lg:col-span-8 lg:pl-24 lg:pb-24">

                            <div className="mb-5 inline-flex flex-col items-start pl-[2px] mt-40 md:mt-0">
                                <div className="mb-[10px] h-[2px] w-[115px] md:w-[135px] ml-40 bg-linear-to-r from-[#7C2FC0] via-[#D4187A] to-[#FF6D00]" />
                                <p className="text-[13px] font-light uppercase tracking-[0.52em] text-white/95 sm:text-[14px]">
                                    Vehicle Repair Shop
                                </p>
                                <div className="mt-[10px] h-[2px] w-[158px] bg-linear-to-r from-[#7C2FC0] via-[#D4187A] to-[#FF6D00]" />
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold leading-tight uppercase">
                                ADVANCED <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7C2FC0] via-[#D4187A] to-[#FF6D00]">
                                    AUTOBODY SOLUTIONS.
                                </span>
                            </h1>

                            <div className="flex flex-wrap gap-3 mt-8">
                                <button
                                    onClick={handleBodyshop}
                                    className="rounded-full px-7 py-3.5 text-sm font-bold text-white bg-linear-to-r from-[#7C2FC0] to-[#D4187A] shadow-md shadow-[#7C2FC0]/40 hover:from-[#D4187A] hover:to-[#FF6D00] hover:shadow-[#D4187A]/40 hover:scale-105 transition-all duration-200"
                                >
                                    Bodyshop
                                </button>

                                <button
                                    onClick={() => setShowComingSoon(true)}
                                    className="rounded-full px-7 py-3.5 text-sm font-bold text-white border border-white/30 bg-transparent hover:bg-linear-to-r hover:from-[#7C2FC0] hover:to-[#D4187A] hover:border-transparent hover:shadow-md hover:shadow-[#7C2FC0]/40 hover:scale-105 transition-all duration-200"
                                >
                                    Mobile
                                </button>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="col-span-12 flex items-end justify-start pb-14 sm:pb-16 md:pb-20 lg:col-span-4 lg:justify-end lg:pb-24">
                            <p className="max-w-[350px] text-[18px] font-light leading-[1.55] text-white/82 md:text-[19px]">
                                Automotive repairs and detailing for fleets and retail work - use what's already on there and push automotive repairs more - body work repairs is what the mainly do
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/80 to-transparent" />
            </section>

            {/* Coming Soon Modal */}
            {showComingSoon && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile service coming soon"
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
                    onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
                >
                    <div className="bg-linear-to-br from-[#7C2FC0] via-[#D4187A] to-[#FF6D00] p-px rounded-2xl w-full max-w-sm">
                        <div className="relative bg-[#08060F] rounded-2xl px-8 py-12 flex flex-col items-center gap-5">

                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all"
                                aria-label="Close"
                            >
                                <X size={18} />
                            </button>

                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-[#7C2FC0]/20 rounded-full blur-2xl" />

                            <div className="flex items-center gap-2">
                                <div className="w-5 h-0.5 bg-linear-to-r from-[#7C2FC0] to-[#D4187A]" />
                                <span className="text-[10px] text-[#FF6D00] tracking-widest uppercase">Mobile Service</span>
                                <div className="w-5 h-0.5 bg-linear-to-r from-[#D4187A] to-[#FF6D00]" />
                            </div>

                            <h2 className="text-white text-3xl font-bold uppercase tracking-wide text-center">
                                Coming Soon
                            </h2>

                            <p className="text-[#B8C0CC] text-sm text-center leading-relaxed max-w-[240px]">
                                Our mobile repair service is on its way. We'll be bringing the workshop to your door very soon.
                            </p>

                            <button
                                onClick={closeModal}
                                className="mt-2 rounded-full px-8 py-3 text-sm font-bold text-white bg-linear-to-r from-[#7C2FC0] to-[#D4187A] hover:from-[#D4187A] hover:to-[#FF6D00] hover:scale-105 shadow-md shadow-[#7C2FC0]/40 transition-all duration-200"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
