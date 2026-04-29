import { Search, ShieldCheck, Hammer, Sparkles } from "lucide-react";

const DentRemovalData = {
  // ─── HERO SECTION ────────────────────────────────────────
  hero: {
    backgroundImage:
      "a2.jpg",
    backLinkLabel: "Services",
    backLinkHref: "/services",
    title: "Paintless Dent Repair",
    subtitle:
      "Using top of the range paintless dent repair equipment, we restore any dent back to its original position. The finish is always immaculate, no filler, no repainting where it isn't needed.",
    ctaLabel: "Get a Free Quote",
    ctaHref: "https://www.whatsapp.com/",
  },

  // ─── BENEFITS SECTION ────────────────────────────────────
  benefits: {
    heading: "Precision restoration, ",
    headingHighlight: "no shortcuts",
    subheading: "Our specialist equipment allows us to work the metal back to its original form without compromising your vehicle's factory paint.",
    items: [
      {
        icon: Search,
        title: "Any Dent",
        desc: "Small dings to large panel dents all removed.",
      },
      {
        icon: ShieldCheck, // Updated to ShieldCheck for 'Paint Safe' context
        title: "Paint Safe",
        desc: "No repainting needed in most cases.",
      },
      {
        icon: Hammer, // Using Hammer for 'Metal restoration' context
        title: "No Filler",
        desc: "Metal restored to original position, not masked.",
      },
      {
        icon: Sparkles, // Using Sparkles for 'Immaculate finish' context
        title: "Immaculate Finish",
        desc: "Results you won't be able to tell were ever there.",
      },
    ],
  },

  // ─── WHAT'S INCLUDED SECTION ─────────────────────────────
  included: {
    heading: "Full Dent ",
    headingHighlight: "Removal Process",
    subheading: "Assessed, repaired, and finished using specialist tools for a perfect result every time.",
    items: [
      {
        title: "Dent Assessment",
        description:
          "Size, depth and location evaluated to select the right removal technique.",
        imgSrc: "/logo.png",
      },
      {
        title: "Paintless Dent Repair",
        description:
          "Specialist tools used to carefully manipulate the metal back to its original form.",
        imgSrc: "/logo.png",
      },
      {
        title: "Final Inspection",
        description:
          "Panel checked under controlled lighting to ensure a flawless, factory quality finish.",
        imgSrc: "/logo.png",
      },
    ],
  },

  // ─── PRICING SECTION ─────────────────────────────────────
  pricing: {
    subheading: "Clear, upfront costs for every diagnostic service.",
    plans: [
      {
        title: "Small",
        description: "",
        price: "60 > £100",
        duration: "",
        popular: false,
        features: [
          "Engine scan",
          "Suspension check",
          "Safety & mechanical review",
          "Basic fault code report",
        ],
      },
      {
        title: "Medium",
        description: " 100 > £200",
        price: "129",
        duration: "",
        popular: true,
        features: [
          "Everything in Basic",
          "Electrical deep scan",
          "ECU data logs",
          "Sensor calibration",
        ],
      },
      {
        title: "Large",
        description: "",
        price: "200 +",
        duration: "",
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
        img: "a6.webp",
      },
      {
        img: "a8.webp",
      },
    ],
  },

  // ─── BANNER SECTION ──────────────────────────────────────
  banner: {
    backgroundImage:
      "a13.webp",
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
        q: "How do you know if it can be fixed?",
        a: "Years of experience clear images and videos of the damage can usually tell if it can be repaired occasionally would need to see the vehicle in person."
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
        q: "Do you use aftermarket parts?",
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