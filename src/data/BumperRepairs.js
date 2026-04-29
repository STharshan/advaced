import { Search, Sparkles, ShieldPlus, Coins } from "lucide-react";

const DentRemovalData = {
    // ─── HERO SECTION ────────────────────────────────────────
    hero: {
        backgroundImage:
            "a222.jpg",
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
        heading: "Your bumper does ",
        headingHighlight: "more than you think",
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
        heading: "Full Bumper ",
        headingHighlight: "Restoration Process",
        subheading: "From structural repair through to a flawless painted finish.",
        items: [
            {
                title: "Damage Inspection",
                description:
                    "Full assessment of cracks, splits, scrapes and structural deformation.",
                imgSrc:
                    "/logo.png",
            },
            {
                title: "Repair & Reshape",
                description:
                    "Bumper reformed, filled and sanded back to its original profile.",
                imgSrc:
                    "/logo.png",
            },
            {
                title: "Paint & Blend",
                description:
                    "Colour-matched finish applied and blended seamlessly into the surrounding panels.",
                imgSrc:
                    "/logo.png",
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
                img: "/a3.webp",
            },
            {
                img: "/a4.webp",
            },
        ],
    },

    // ─── BANNER SECTION ──────────────────────────────────────
    banner: {
        backgroundImage:
            "/a5.webp",
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
                a: "Not necessarily! Most jobs are completed the same day, though depending on the service and condition of your vehicle, some work may carry over into the next day. We'll always keep you updated on timings when you book."
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
                a: "We always aim to use genuine parts to ensure the highest quality finish. However, to help keep costs down for our customers, we can also source non-genuine or quality second-hand parts — the choice is always yours."
            },
            {
                q: "Do you offer pick-up and drop-off services?",
                a: "We don't currently offer a collection service, but we're conveniently located and happy to advise on the best time to bring your vehicle in."
            }
        ]
    },
};

export default DentRemovalData;