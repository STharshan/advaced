import { ShieldCheck, Coins, Target, Zap } from "lucide-react";

const ScratchRepairData = {
    // ─── HERO SECTION ────────────────────────────────────────
    hero: {
        backgroundImage:
            "a32.webp",
        backLinkLabel: "Services",
        backLinkHref: "/services",
        title: "Smart repair",
        subtitle:
            "Whether they're light surface marks from everyday wear or deep key scratches, we can repair any scratch on your vehicle and restore it to its original finish.",
        ctaLabel: "Get a Free Quote",
        ctaHref: "https://www.whatsapp.com/",
    },

    // ─── BENEFITS SECTION ────────────────────────────────────
    benefits: {
        heading: "Don't let scratches ",
        headingHighlight: "define your vehicle",
        subheading: "Even minor scratches can expose bare metal, leading to rust and further damage over time.",
        items: [
            {
                icon: Target,
                title: "Any Depth",
                desc: "Surface scuffs to deep key scratches repaired.",
            },
            {
                icon: ShieldCheck,
                title: "Colour Matched",
                desc: "Perfect paint match every time.",
            },
            {
                icon: Zap,
                title: "Rust Prevention",
                desc: "Seals exposed metal before damage spreads.",
            },
            {
                icon: Coins,
                title: "Resale Value",
                desc: "Clean finish protects what your car is worth.",
            },
        ],
    },

    // ─── WHAT'S INCLUDED SECTION ─────────────────────────────
    included: {
        heading: "Full scratch",
        headingHighlight: " Repair Coverage",
        subheading: "Every repair is assessed, prepared and finished to a professional standard.",
        items: [
            {
                title: "Damage Assessment",
                description:
                    "Scratch depth and paint layer inspection to determine the right repair method.",
                imgSrc:
                    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
            },
            {
                title: "Surface Preparation",
                description:
                    "Area cleaned, sanded and primed to ensure a seamless, lasting repair.",
                imgSrc:
                    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
            },
            {
                title: "Paint & Finish",
                description:
                    "Colour-matched paint applied and blended for an invisible, factory quality result.",
                imgSrc:
                    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=800",
            },
        ],
    },
    // ─── PRICING SECTION ─────────────────────────────────────
    pricing: {
        subheading: "Clear, upfront costs for every diagnostic service.",
        plans: [
            {
                title: "Basic",
                description: "Essential system check.",
                price: "68",
                duration: "| ~30 min",
                popular: false,
                features: [
                    "Engine scan",
                    "Suspension check",
                    "Safety & mechanical review",
                    "Basic fault code report",
                ],
            },
            {
                title: "Full Diagnostic",
                description: "Advanced full-system scan.",
                price: "129",
                duration: "| ~1 hr",
                popular: true,
                features: [
                    "Everything in Basic",
                    "Electrical deep scan",
                    "ECU data logs",
                    "Sensor calibration",
                ],
            },
            {
                title: "Complete Diagnostic",
                description: "Full inspection & performance testing.",
                price: "189",
                duration: "| ~2 hr",
                popular: false,
                features: [
                    "Everything in Full",
                    "Mechanical inspection",
                    "Performance test",
                    "Preventive maintenance report",
                ],
            },
        ],
    },

    // ─── TESTIMONIALS SECTION ────────────────────────────────
    testimonials: {
        items: [
            {
                name: "Michael T.",
                role: "Tesla Model 3 Owner",
                image: "/logo.png",
                review:
                    "Professional, quick, and detail-focused. Best service experience I've had so far.",
            },
            {
                name: "David R.",
                role: "BMW M4 Owner",
                image: "/logo.png",
                review:
                    "Very thorough diagnostics and clear explanations. Highly recommend this service.",
            },
            {
                name: "Sarah K.",
                role: "Audi A5 Owner",
                image: "/logo.png",
                review:
                    "Fast, reliable, and extremely professional. My car feels brand new again.",
            },
        ],
    },

    // ─── REPAIR CASES SECTION ────────────────────────────────
    repairCases: {
        subheading:
            "Real results from our recent diagnostics, engine work, and performance upgrades.",
        viewAllLabel: "View All Cases",
        viewAllHref: "/cases",
        items: [
            {
                img: "a28.webp",
            },
            {
                img: "a27.webp",
            },
        ],
    },

    // ─── BANNER SECTION ──────────────────────────────────────
    banner: {
        backgroundImage:
            "a26.webp",
        heading: "Get Your Free\nRepair Quote",
        subheading: "Quick, transparent pricing with no obligation.",
        ctaLabel: "Ask on WhatsApp",
        ctaHref: "https://www.whatsapp.com/",
    },

    // ─── FAQ SECTION ─────────────────────────────────────────
    faq: {
        heading: "Got a question we ",
        headingHighlight: "haven't answered?",
        subheading: "Send it over and we'll respond as soon as possible.",
        ctaLabel: "Ask on WhatsApp",
        ctaHref: "https://www.whatsapp.com/",
        itemsLeft: [
            {
                q: "What is a Smart Repair? ",
                a: "A Smart Repair is a localized repair technique that focuses on keeping as much of your vehicle's original finish intact as possible. Standing for Small to Medium Area Repair Technology, it involves precision blending and painting to body lines, making it the perfect solution for minor dents, scratches, and scuffs without the need for a full panel repair."
            },
            {
                q: "How do you diagnose the issue?",
                a: "We assess the damage in person before any work begins, checking depth, size, and the best repair method to get the right result."
            },
            {
                q: "Do I need to leave my car for the whole day?",
                a: "Not always. Most repairs can be completed within a few hours. We'll give you a clear time estimate when you book."
            },
            {
                q: "Will I get a warranty on the repair?",
                a: "Yes, all our repairs come with a workmanship guarantee. If something isn't right, we'll put it right."
            }
        ],
        itemsRight: [
            {
                q: "How much will the repair cost?",
                a: "Every job is different, so we provide a personalised quote after assessing the damage. Get in touch for a free estimate."
            },
            {
                q: "Do you use original or aftermarket parts?",
                a: "We use quality materials and manufacturer-matched paints to ensure the repair is seamless and long-lasting."
            },
            {
                q: "Do you offer pick-up and drop-off services?",
                a: "We don't currently offer a collection service, but we're conveniently located and happy to advise on the best time to bring your vehicle in."
            }
        ]
    },
};

export default ScratchRepairData;