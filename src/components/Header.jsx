import { ChevronLeft } from "lucide-react";

export default function HeroSection() {

    return (
        <section className="relative h-screen w-full overflow-hidden text-white bg-black">
            {/* Background Video */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source src="/bg.mp4" type="video/mp4" />
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

                        {/* Small label + line - UPDATED COLOR CODE */}
                        <div className="mb-5 inline-flex flex-col items-start pl-[2px] mt-40 md:mt-0">
                            {/* Top Line with Multi-color linear */}
                            <div className="mb-[10px] h-[2px] w-[115px] md:w-[135px] ml-40 bg-linear-to-r from-[#7C2FC0] via-[#D4187A] to-[#FF6D00]" />

                            <p className="text-[13px] font-light uppercase tracking-[0.52em] text-white/95 sm:text-[14px]">
                                Vehicle Repair Shop
                            </p>

                            {/* Bottom Line with Multi-color linear */}
                            <div className="mt-[10px] h-[2px] w-[158px] bg-linear-to-r from-[#7C2FC0] via-[#D4187A] to-[#FF6D00]" />
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight uppercase">
                            ADVANCED <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7C2FC0] via-[#D4187A] to-[#FF6D00]">
                                AUTOBODY SOLUTIONS.
                            </span>
                        </h1>
                    </div>

                    {/* Right */}
                    <div className="col-span-12 flex items-end justify-start pb-14 sm:pb-16 md:pb-20 lg:col-span-4 lg:justify-end lg:pb-24">
                        <p className="max-w-[350px] text-[18px] font-light leading-[1.85] text-white/82 md:text-[19px] lg:text-[20px]">
                            At Advanced Autobody Solutions, we deliver reliable, efficient detailing for personal
                            cars and fleets, restoring showroom shine, extending vehicle life,
                            and protecting your investment.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/80 to-transparent" />
        </section>
    );
}