"use client";

import { useState, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import Logo from "@/components/Logo";

const rotatingWords = ["debt", "stress", "interest", "worry"];

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout fixed>
      <div className="flex-1 flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12">
        {/* Hero Headline - Top */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-center tracking-tight max-w-4xl">
          YOUR PATH TO BECOMING{" "}
          <span className="inline-block relative">
            {/* Invisible text to maintain width based on longest word */}
            <span className="invisible">INTEREST</span>
            {/* Actual rotating word positioned absolutely */}
            <span
              className={`gradient-text absolute left-0 right-0 text-center ${isAnimating ? "animate-fade-out" : "animate-fade-in"}`}
            >
              {rotatingWords[currentWordIndex].toUpperCase()}
            </span>
          </span>
          -FREE
        </h1>

        {/* Phone Mockup with floating badge */}
        <div className="relative">
          <div className="phone-frame-half">
            <div className="phone-screen-half">
              <div className="phone-notch" />
              {/* Placeholder for app screenshot */}
              <div className="w-full h-full flex items-center justify-center pt-8">
                <Logo size={50} />
              </div>
            </div>
          </div>

          {/* Floating notification badge */}
          <div className="floating-badge">
            <svg className="w-4 h-4 text-[#00C8B3]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>AI found <strong>3 ways</strong> to save on interest</span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-muted text-center text-base sm:text-lg max-w-md mt-4">
          Track your debts, optimize payments, and get AI-powered guidance to financial freedom.
        </p>

        {/* CTA Button */}
        <a href="#" className="btn-primary">
          Get Started
        </a>
      </div>
    </PageLayout>
  );
}
