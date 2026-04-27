import { ShieldCheck, Coins, Target, Zap } from "lucide-react";

const InsuranceRepairsData  = {
    // ─── HERO SECTION ────────────────────────────────────────
    hero: {
        backgroundImage:
            "a111.jpg",
        backLinkLabel: "Services",
        backLinkHref: "/services",
        title: "Insurance Repairs",
        subtitle:
            "Had an accident? We handle the entire repair process efficiently, restoring your vehicle to its pre-accident condition while working seamlessly with your insurance provider.",
        ctaLabel: "Get a Free Quote",
        ctaHref: "https://www.whatsapp.com/",
    },

    // ─── BENEFITS SECTION ────────────────────────────────────
    benefits: {
        heading: "We take the stress out of ",
        headingHighlight: "accident repairs",
        subheading: "From minor damage to major repairs, we ensure your vehicle is repaired safely, professionally, and in line with insurance standards.",
        items: [
            {
                icon: Target,
                title: "All Repair Types",
                desc: "From small dents and scratches to major accident damage.",
            },
            {
                icon: ShieldCheck,
                title: "Approved Standards",
                desc: "Repairs carried out to meet insurance and manufacturer guidelines.",
            },
            {
                icon: Zap,
                title: "Hassle-Free Process",
                desc: "We liaise directly with your insurer to simplify the process for you.",
            },
            {
                icon: Coins,
                title: "Quality Guaranteed",
                desc: "High-quality parts and finishes for long-lasting results.",
            },
        ],
    },

    // ─── WHAT'S INCLUDED SECTION ─────────────────────────────
    included: {
        heading: "Complete Insurance",
        headingHighlight: " Repair Process",
        subheading: "From claim assistance to final handover.",
        items: [
            {
                title: "Damage Assessment",
                description:
                    "Thorough inspection and documentation of all visible and hidden damage for insurance approval.",
                imgSrc:
                    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
            },
            {
                title: "Repair Authorisation",
                description:
                    "We coordinate with your insurance company to get approvals and begin work quickly.",
                imgSrc:
                    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
            },
            {
                title: "Repair & Refinish",
                description:
                    "Expert repairs completed with precision, followed by a flawless, colour-matched finish.",
                imgSrc:
                    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=800",
            },
        ],
    },

    // ─── PRICING SECTION (Kept structure, updated context) ─────
    pricing: {
        subheading: "Insurance work is usually covered by your provider, but we provide transparent estimates for excess or private work.",
        plans: [
            {
                title: "Minor Bodywork",
                description: "Cosmetic & light damage.",
                price: "POA",
                duration: "| Varies",
                popular: false,
                features: [
                    "Small Paintless Dent Repair",
                    "Scuff & Smart repair",
                    "Panel alignment",
                    "Insurance documentation",
                ],
            },
            {
                title: "Standard Claim",
                description: "Common accident repairs.",
                price: "EXCESS",
                duration: "| TBD",
                popular: true,
                features: [
                    "Direct insurer liaison",
                    "OEM parts replacement",
                    "Full panel respray",
                    "Safety system checks",
                ],
            },
            {
                title: "Major Repair",
                description: "Structural & heavy damage.",
                price: "POA",
                duration: "| Varies",
                popular: false,
                features: [
                    "Chassis alignment",
                    "Structural component repair",
                    "Full vehicle inspection",
                    "Lifetime finish warranty",
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
                    "The insurance process was so easy. They handled everything with my provider and the car looks perfect.",
            },
            {
                name: "David R.",
                role: "BMW M4 Owner",
                image: "/logo.png",
                review:
                    "Professional accident repair. You can't even tell where the damage was. Highly recommended.",
            },
            {
                name: "Sarah K.",
                role: "Audi A5 Owner",
                image: "/logo.png",
                review:
                    "Fast, reliable, and extremely professional. They took the stress out of a very bad week.",
            },
        ],
    },

    // ─── REPAIR CASES SECTION ────────────────────────────────
    repairCases: {
        subheading:
            "Real results from recent insurance claims and accident restorations.",
        viewAllLabel: "View All Cases",
        viewAllHref: "/cases",
        items: [
            {
                img: "a18.webp",
            },
            {
                img: "a19.webp",
            },
        ],
    },

    // ─── BANNER SECTION ──────────────────────────────────────
    banner: {
        backgroundImage:
            "a20.webp",
        heading: "Start Your Insurance\nClaim Today",
        subheading: "Expert repairs with seamless insurance coordination.",
        ctaLabel: "Ask on WhatsApp",
        ctaHref: "https://www.whatsapp.com/",
    },

    // ─── FAQ SECTION ─────────────────────────────────────────
    faq: {
        heading: "Questions about ",
        headingHighlight: "insurance claims?",
        subheading: "We deal with major insurers every day and can help guide you through the process.",
        ctaLabel: "Ask on WhatsApp",
        ctaHref: "https://www.whatsapp.com/",
        itemsLeft: [
            {
                q: "Do you provide a courtesy car?",
                a: "For non-fault accidents, we do provide a courtesy car to keep you on the road while your vehicle is being repaired. For fault claims, we don't currently offer a free courtesy car, however in some cases we can arrange a paid hire vehicle. Get in touch and we'll do our best to help."
            },
            {
                q: "Will my car be written off?",
                a: "In some cases, an insurer may decide to write a vehicle off. However, if you'd prefer to keep your car, we will work directly with the insurer on your behalf to find the best possible solution to get your vehicle back on the road."
            },
            {
                q: "Do I have to use my insurer's recommended repairer?",
                a: "No. You have the legal right to choose where your vehicle is repaired. We provide professional, insurance-approved standard work."
            },
            {
                q: "How long will the insurance approval take?",
                a: "Usually between 24-72 hours once we have submitted the digital assessment and photos to your insurer."
            },
        ],
        itemsRight: [
            {
                q: "Will you provide a courtesy car?",
                a: "Depending on your policy and our availability, we can often arrange a courtesy vehicle to keep you on the road."
            },
            {
                q: "What do I need to provide to start a claim?",
                a: "Simply bring your vehicle in with your claim reference number and insurer details; we'll handle the rest."
            },
            {
                q: "Do you use genuine manufacturer parts?",
                a: "Yes, we prioritize OEM (Original Equipment Manufacturer) parts to ensure your vehicle warranty and safety standards remain intact."
            },
            {
                q: "Is my repair guaranteed?",
                a: "Absolutely. All our insurance repairs come with a comprehensive warranty on both parts and workmanship."
            }
        ]
    },
};

export default InsuranceRepairsData ;