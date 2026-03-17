// ============================================================
//  MOT SERVICE DATA
//  Duplicate this file (e.g. brakes.js, tyres.js) and change
//  the values to create a new service page instantly.
// ============================================================

import { Search, ShieldAlert, BadgeDollarSign, Car } from "lucide-react";

const motServiceData = {
  // ─── HERO SECTION ────────────────────────────────────────
  hero: {
    backgroundImage:
      "https://framerusercontent.com/images/LmQpQxrCvAgtMxoBkA6UJXf6QA.webp",
    backLinkLabel: "Services",
    backLinkHref: "/services",
    title: "Full Diagnosticssssssssss",
    subtitle:
      "Full system scan using advanced tools. Detects hidden issues early with clear recommendations.",
    ctaLabel: "ASK ON WHATSAPP",
    ctaHref: "https://www.whatsapp.com/",
  },

  // ─── BENEFITS SECTION ────────────────────────────────────
  benefits: {
    heading: "Essential for Your Vehicle",
    subheading: "Detect issues early and prevent expensive repairs.",
    items: [
      {
        icon: Search,
        title: "Find Issues Early",
        desc: "Catch issues early.",
      },
      {
        icon: ShieldAlert,
        title: "Damage Prevention",
        desc: "Avoid major repairs.",
      },
      {
        icon: BadgeDollarSign,
        title: "Cost Savings",
        desc: "Reduce repair costs long-term.",
      },
      {
        icon: Car,
        title: "Safer Driving",
        desc: "Smoother, safer performance.",
      },
    ],
  },

  // ─── WHAT'S INCLUDED SECTION ─────────────────────────────
  included: {
    heading: "What's Included",
    subheading: "Full diagnostic coverage for every essential system.",
    items: [
      {
        title: "Engine Scan",
        description:
          "Reads fault codes and analyzes overall system performance.",
        imgSrc:
          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
      },
      {
        title: "Electrical Check",
        description:
          "Detects sensor faults and module communication issues reliably.",
        imgSrc:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
      },
      {
        title: "Safety Review",
        description:
          "Evaluates brakes, suspension, and key mechanical parts thoroughly.",
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
        title: "Suspension Alignment Correction Case",
        desc: "Precise alignment and suspension calibration.",
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
        href: "/cases/suspension",
      },
      {
        title: "Full Engine Diagnostics Repair Case",
        desc: "Advanced engine diagnostics and repair.",
        img: "https://images.unsplash.com/photo-1484136540910-d66bb475348d?auto=format&fit=crop&q=80&w=800",
        href: "/cases/engine",
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
    heading: "Didn't find what you're",
    headingHighlight: "looking for?",
    subheading: "Send us your question and we'll respond shortly.",
    ctaLabel: "Ask on WhatsApp",
    ctaHref: "https://www.whatsapp.com/",
    itemsLeft: [
      "How do you diagnose the issue?",
      "Do I need to leave my car for the whole day?",
      "Will I get a warranty on the repair?",
    ],
    itemsRight: [
      "How much will the repair cost?",
      "Do you use original or aftermarket parts?",
      "Do you offer pick-up and drop-off services?",
    ],
  },
};

export default motServiceData;