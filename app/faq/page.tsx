"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "How do I get started with Debt Free?",
    a: "Download the app, create a free account, and add your debts. The app will guide you through setting up your first payoff plan in minutes.",
  },
  {
    q: "Is Debt Free really free?",
    a: "Yes! Core features including debt tracking and payoff strategies are free. Premium subscription available for advanced features.",
  },
  {
    q: "What's the difference between Avalanche and Snowball methods?",
    a: "Avalanche prioritizes highest interest rates first (saves most money). Snowball prioritizes smallest balances first (quick wins for motivation).",
  },
  {
    q: "What can the AI advisor help with?",
    a: "Answer debt questions, provide emotional support, offer personalized recommendations, and help you understand financial concepts.",
  },
  {
    q: "Is my financial data secure?",
    a: "Yes, we use bank-level encryption. We don't store bank credentials, and all data is encrypted in transit and at rest.",
  },
  {
    q: "Can I delete my account and data?",
    a: "Yes, delete your account anytime from app settings. All personal data is permanently removed from our servers.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-glow overflow-hidden">
      <button
        className="w-full p-6 text-left flex items-center justify-between gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <svg
          className={`w-5 h-5 shrink-0 text-[#00C8B3] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-[#8a8a9a] leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="relative pt-32">
      <section className="relative section overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] glow-orb glow-orb-primary opacity-30" />

        <div className="section-inner">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-[#8a8a9a] text-lg">
                Everything you need to know about Debt Free.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.q} answer={faq.a} />
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-[#8a8a9a] mb-4">Still have questions?</p>
              <Link href="/download" className="btn-primary text-base px-8 py-4">
                Download & Ask AI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
