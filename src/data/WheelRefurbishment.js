import { ShieldCheck, Coins, Target, Zap } from "lucide-react";

const WheelRefurbishmentData = {
    // ─── HERO SECTION ────────────────────────────────────────
    hero: {
        backgroundImage:
            "a8.jpg",
        backLinkLabel: "Services",
        backLinkHref: "/services",
        title: "Wheel Refurbishment",
        subtitle:
            "Scuffed, scratched, or corroded wheels? We restore your alloys back to a flawless, like-new condition with precision and care—no matter the level of damage.",
        ctaLabel: "Get a Free Quote",
        ctaHref: "https://www.whatsapp.com/",
    },

    // ─── BENEFITS SECTION ────────────────────────────────────
    benefits: {
        heading: "Your wheels deserve ",
        headingHighlight: "more attention than you think",
        subheading: "Damaged wheels don’t just affect the look of your vehicle—they can impact performance, safety, and long-term durability.",
        items: [
            {
                icon: Target,
                title: "Any Damage",
                desc: "Kerb damage, scratches, corrosion, and paint wear all professionally repaired.",
            },
            {
                icon: ShieldCheck,
                title: "Like New Finish",
                desc: "Restored to original colour, shine, and factory-quality finish.",
            },
            {
                icon: Zap,
                title: "Structural Integrity",
                desc: "Refurbishment includes coatings that help protect against future damage.",
            },
            {
                icon: Coins,
                title: "Cost Effective",
                desc: "Refurbish instead of replacing and save significantly on new wheels.",
            },
        ],
    },

    // ─── WHAT'S INCLUDED SECTION ─────────────────────────────
    included: {
        heading: "Complete Wheel",
        headingHighlight: " Refurbishment Process",
        subheading: "From initial inspection to a smooth, high-quality finish.",
        items: [
            {
                title: "Damage Inspection",
                description:
                    "Detailed evaluation of wheel damage including scratches, corrosion, and structural issues.",
                imgSrc: "/logo.png",   },
            {
                title: "Repair & Reshape",
                description:
                    "Wheels are cleaned, stripped, repaired, and smoothed to restore the original shape.",
                imgSrc: "/logo.png", },
            {
                title: "Paint & Blend",
                description:
                    "Colour-matched paint or powder coating applied, followed by a protective layer for long-lasting results.",
                imgSrc: "/logo.png",    },
        ],
    },

    // ─── PRICING SECTION ─────────────────────────────────────
    pricing: {
        subheading: "Professional wheel restoration tailored to your specific alloy type.",
        plans: [
            {
                title: "Standard Alloy",
                description: "Single wheel refurb.",
                price: "80",
                duration: "| ~1 day",
                popular: false,
                features: [
                    "Kerb damage repair",
                    "Full color match",
                    "Protective clear coat",
                    "Tyre balancing check",
                ],
            },
            {
                title: "Diamond Cut",
                description: "Precision CNC finish.",
                price: "100",
                duration: "| ~2 days",
                popular: true,
                features: [
                    "Lathe-cut precision",
                    "Corrosion removal",
                    "Premium lacquer seal",
                    "Factory-spec finish",
                ],
            },
            {
                title: "Full Set Refresh - Painted",
                description: "Complete 4-wheel overhaul.",
                price: "300",
                duration: "| ~2-3 days",
                popular: false,
                features: [
                    "All 4 wheels restored",
                    "Custom color options",
                    "Deep chemical clean",
                    "New valves included",
                ],
            },
            {
                title: "Full Set Refresh - Diamond Cut",
                description: "Complete 4-wheel precision finish.",
                price: "360",
                duration: "| ~3 days",
                popular: false,
                features: [
                    "All 4 wheels lathe-cut",
                    "Corrosion removal",
                    "Premium lacquer seal",
                    "Factory-spec finish",
                ],
            },
            {
                title: "Caliper Paint",
                description: "Bold brake caliper finish.",
                price: "200",
                duration: "| (or £100 when paired with a full set refurb or colour change)",
                popular: false,
                features: [
                    "Professional caliper paint",
                    "Heat-resistant finish",
                    "Custom colour options",
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
                    "Saved me hundreds compared to buying a new alloy. The kerb rash is completely gone.",
            },
            {
                name: "David R.",
                role: "BMW M4 Owner",
                image: "/logo.png",
                review:
                    "The diamond cut finish is better than the original factory look. Stunning work.",
            },
            {
                name: "Sarah K.",
                role: "Audi A5 Owner",
                image: "/logo.png",
                review:
                    "Professional service from start to finish. My car looks much younger with fresh wheels.",
            },
        ],
    },

    // ─── REPAIR CASES SECTION ────────────────────────────────
    repairCases: {
        subheading:
            "Before and after results of our recent alloy wheel transformations.",
        viewAllLabel: "View All Cases",
        viewAllHref: "/cases",
        items: [
            {
                img: "a9.png",
            },
            {
                img: "a10.jpg",
            },
        ],
    },

    // ─── BANNER SECTION ──────────────────────────────────────
    banner: {
        backgroundImage:
            "a30.jpg",
        heading: "Restore Your Wheels\nTo Factory Fresh",
        subheading: "Quick, professional refurbishment starting from £85.",
        ctaLabel: "Ask on WhatsApp",
        ctaHref: "https://www.whatsapp.com/",
    },

    // ─── FAQ SECTION ─────────────────────────────────────────
    faq: {
        heading: "Common wheel ",
        headingHighlight: "questions answered",
        subheading: "Everything you need to know about our refurbishment process.",
        ctaLabel: "Ask on WhatsApp",
        ctaHref: "https://www.whatsapp.com/",
        itemsLeft: [
            {
                q: "How long does wheel refurbishment take?",
                a: "Standard alloys usually take one working day, while Diamond Cut wheels take 2-3 days due to the precision CNC machining required."
            },
            {
                q: "Can you fix cracked or buckled wheels?",
                a: "We assess structural damage individually. While we can fix minor buckles, safety is our priority and some severe cracks may require replacement."
            },
            {
                q: "Will the paint match my other wheels?",
                a: "Yes, we use manufacturer paint codes to ensure an exact match with your remaining wheels."
            }
        ],
        itemsRight: [
            {
                q: "What is a Diamond Cut finish?",
                a: "It's a premium finish where the wheel is placed on a lathe and part of the alloy is machined off to leave a shiny, metal-effect surface."
            },
            {
                q: "Do I need to remove the tyres first?",
                a: "No, we have full tyre removal and refitting facilities on-site. The price usually includes refitting and balancing."
            },
            {
                q: "How long will the finish last?",
                a: "Our powder coatings and lacquers are designed to be as durable as factory finishes, lasting for years with proper cleaning."
            }
        ]
    },
};

export default WheelRefurbishmentData;