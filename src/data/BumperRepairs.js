import { Search, ShieldCheck, Wrench, Paintbrush, Sparkles, ShieldPlus, Coins, Activity } from "lucide-react";

const DentRemovalData = {
    // ─── HERO SECTION ────────────────────────────────────────
    hero: {
        backgroundImage:
            "https://framerusercontent.com/images/LmQpQxrCvAgtMxoBkA6UJXf6QA.webp",
        backLinkLabel: "Services",
        backLinkHref: "/services",
        title: "Bumper Repairs",
        subtitle:
            "Broken, scraped, or dented bumper? We can bring any bumper back looking new again, no matter the extent of the damage.",
        ctaLabel: "Get a Free Quote",
        ctaHref: "https://www.whatsapp.com/",
    },

    // ─── BENEFITS SECTION ────────────────────────────────────
    benefits: {
        heading: "Your bumper does more than you think",
        subheading: "A damaged bumper affects both your vehicle's appearance and its ability to absorb impact in future incidents.",
        items: [
            {
                icon: Search,
                title: "Any Damage",
                desc: "Scrapes, cracks, splits and dents all repaired.",
            },
            {
                icon: Sparkles,
                title: "Like New Finish",
                desc: "Restored to original colour and condition.",
            },
            {
                icon: ShieldPlus,
                title: "Structural Integrity",
                desc: "Repair restores protection, not just looks.",
            },
            {
                icon: Coins,
                title: "Cost Effective",
                desc: "Repair rather than replace and save money.",
            },
        ],
    },

    // ─── WHAT'S INCLUDED SECTION ─────────────────────────────
    included: {
        heading: "Full Bumper Restoration Process",
        subheading: "From structural repair through to a flawless painted finish.",
        items: [
            {
                title: "Damage Inspection",
                description:
                    "Full assessment of cracks, splits, scrapes and structural deformation.",
                imgSrc:
                    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
            },
            {
                title: "Repair & Reshape",
                description:
                    "Bumper reformed, filled and sanded back to its original profile.",
                imgSrc:
                    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
            },
            {
                title: "Paint & Blend",
                description:
                    "Colour-matched finish applied and blended seamlessly into the surrounding panels.",
                imgSrc:
                    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=800",
            },
        ],
    },
    // ─── PRICING SECTION ─────────────────────────────────────
    pricing: {
        heading: "Transparent Pricing",
        subheading: "Clear, upfront costs for every diagnostic service.",
        plans: [
            {
                title: "Basic",
                description: "Essential system check.",
                price: "68",
                duration: "~30 min",
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
                duration: "~1 hr",
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
                duration: "~2 hr",
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
                image: "/user1.jpg",
                review:
                    "Professional, quick, and detail-focused. Best service experience I've had so far.",
            },
            {
                name: "David R.",
                role: "BMW M4 Owner",
                image: "/user2.jpg",
                review:
                    "Very thorough diagnostics and clear explanations. Highly recommend this service.",
            },
            {
                name: "Sarah K.",
                role: "Audi A5 Owner",
                image: "/user3.jpg",
                review:
                    "Fast, reliable, and extremely professional. My car feels brand new again.",
            },
        ],
    },

    // ─── REPAIR CASES SECTION ────────────────────────────────
    repairCases: {
        heading: "Selected Repair Cases",
        subheading:
            "Real results from our recent diagnostics, engine work, and performance upgrades.",
        viewAllLabel: "View All Cases",
        viewAllHref: "/cases",
        items: [
            {
                img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
            },
            {
                img: "https://images.unsplash.com/photo-1484136540910-d66bb475348d?auto=format&fit=crop&q=80&w=800",
            },
        ],
    },

    // ─── BANNER SECTION ──────────────────────────────────────
    banner: {
        backgroundImage:
            "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop",
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

export default DentRemovalData;