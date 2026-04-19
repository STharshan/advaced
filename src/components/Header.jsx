import React, { useEffect, useRef, useState } from "react";

export default function Header() {
    const textRef = useRef(null);
    const btnsRef = useRef(null);
    const rootRef = useRef(null);

    useEffect(() => {
        let ctx;
        let mounted = true;

        (async () => {
            // Dynamic import so it only runs in the browser
            const gsapModule = await import("gsap");
            const ScrollTriggerModule = await import("gsap/ScrollTrigger");

            const gsap = gsapModule.default || gsapModule; // handle default/named export
            const ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;
            gsap.registerPlugin(ScrollTrigger);

            if (!mounted) return;

            // gsap.context keeps things tidy on hot reload/unmount
            ctx = gsap.context(() => {
                if (textRef.current) {
                    gsap.from(textRef.current, {
                        y: 100,
                        opacity: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: textRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    });
                }

                if (btnsRef.current && btnsRef.current.children.length) {
                    gsap.from(Array.from(btnsRef.current.children), {
                        x: -120,
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out",
                        stagger: 0.25,
                        scrollTrigger: {
                            trigger: rootRef.current || btnsRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    });
                }
            }, rootRef);
        })();

        return () => {
            mounted = false;
            if (ctx) ctx.revert();
        };
    }, []);

    const [hov, setHov] = useState(false);

    return (
        <section
            id="/"
            ref={rootRef}
            className="relative w-full h-screen text-white overflow-hidden"
        >
            {/* Background Video */}
            <video
                autoPlay loop muted playsInline poster="/fall.png"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/bg.mp4" type="video/mp4" />
            </video>
            {/* Overlay (use bg-black/50 or bg-black bg-opacity-50) */}
            <div className="absolute inset-0 bg-black/50 z-10" />



            {/* Centered Text */}
            <div
                ref={textRef}
                className="relative z-20 flex flex-col justify-center h-full px-4 sm:px-8 md:px-16 lg:px-24 ml-12 mt-10"
            >
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    ADVANCED <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7C2FC0] via-[#D4187A] to-[#FF6D00]">AUTOBODY<br />
                        SOLUTIONS.</span>
                </h1>
                <a
                    href="#contact"
                    onMouseEnter={() => setHov(true)}
                    onMouseLeave={() => setHov(false)}
                    className={`mt-6 max-w-40 ml-2 text-white font-semibold px-6 py-3 sm:text-base tracking-wider inline-block text-center gap-2.5 uppercase text-sm no-underline transition-all duration-200 ${hov
                        ? "bg-linear-to-r from-[#D4187A] to-[#FF6D00] shadow-lg shadow-[#D4187A]/40 scale-105"
                        : "bg-linear-to-r from-[#7C2FC0] to-[#D4187A] shadow-md shadow-[#7C2FC0]/40 scale-100"
                        }`}
                >
                    contact us
                </a>
            </div>
        </section>
    );
}
