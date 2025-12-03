'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';

const rotatingWords = ['debt', 'stress', 'interest', 'worry'];

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
          YOUR PATH TO BECOMING
          <br />
          <span
            className={`gradient-text ${
              isAnimating ? 'animate-fade-out' : 'animate-fade-in'
            }`}
          >
            {rotatingWords[currentWordIndex].toUpperCase()}
          </span>
          -FREE
        </h1>

        {/* Phone Mockup with floating badge */}
        <div className="relative">
          <div className="phone-frame-half">
            <div className="phone-screen-half">
              <div className="phone-notch" />
              <Image
                src="/app-screenshot.jpeg"
                alt="Debt Free app screenshot"
                fill
                className="object-cover object-top pt-6"
                priority
              />
            </div>
          </div>

          {/* Floating notification badge */}
          <div className="floating-badge">
            <span>🎉</span>
            <span>
              Congrats! You just paid off <strong>half</strong> your loan
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-muted text-center text-base sm:text-lg max-w-md mt-4">
          Track your debts, optimize payments, and get AI-powered guidance to
          financial freedom.
        </p>

        {/* CTA Button */}
        <a href="https://apps.apple.com/app/id6755793398" className="btn-primary">
          Get Started
        </a>
      </div>
    </PageLayout>
  );
}
