'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MessageSquare, Calculator, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '@/data/heroSlides';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [preloadNext, setPreloadNext] = useState(false);
  const slideCount = HERO_SLIDES.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const t = setTimeout(() => {
      setPreloadNext(true);
    }, 3500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (isPaused || !isMounted) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, isMounted, slideCount]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section 
      className="relative w-full h-[100dvh] min-h-[620px] max-h-[1080px] bg-slate-950 text-white overflow-hidden flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="MSC Scaffolding Hero Showcase"
    >
      {/* Slide Images Canvas with Crossfade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          const isNext = (currentSlide + 1) % slideCount === index;
          if (!isMounted && index !== 0) return null;
          if (isMounted && !isActive && !(preloadNext && isNext)) return null;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={`${slide.title} — ${slide.highlightText}`}
                fill
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
              {/* Natural High-Contrast Balanced Gradient Protection - Reduced Opacity */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />
            </div>
          );
        })}
      </div>

      {/* Foreground Content - Full Viewport Flex Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between pt-24 sm:pt-24 lg:pt-28 pb-24 sm:pb-8">
        {/* Upper Hero Content: Pill Badge, High-Contrast Typography, Copy, Pill CTAs - Perfectly Centered */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 lg:space-y-5 my-auto py-4 sm:py-6">
          {/* Clean Eyebrow */}
          <div>
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold block">
              {HERO_SLIDES[currentSlide].badge}
            </span>
          </div>

          {/* Crisp High-Contrast Headline */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
              {HERO_SLIDES[currentSlide].title}
            </h1>
            <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-orange-500 tracking-tight">
              {HERO_SLIDES[currentSlide].highlightText}
            </div>
          </div>

          {/* Slide Description - 1 Short Line */}
          <p className="text-sm sm:text-base text-slate-100 font-normal max-w-xl leading-relaxed">
            {HERO_SLIDES[currentSlide].description}
          </p>

          {/* Single Clean Pill Action Button */}
          <div className="pt-2">
            <a
              href={HERO_SLIDES[currentSlide].primaryCtaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-orange-700 hover:bg-orange-600 active:scale-95 text-white font-bold text-xs sm:text-sm tracking-wide transition shadow-xl shadow-orange-950/50"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{HERO_SLIDES[currentSlide].primaryCtaText}</span>
            </a>
          </div>
        </div>

        {/* Lower Hero Block: 4-Metric Grid & Indicator Dots */}
        <div className="w-full pt-3 sm:pt-6 border-t border-white/10 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
            {/* 4-Metric Responsive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-8 lg:gap-12">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-3xl font-extrabold text-white">1.8</span>
                  <span className="text-xs font-bold text-orange-500">mm</span>
                </div>
                <div className="text-xs text-slate-200 mt-0.5 font-medium">Pipa Real SNI</div>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-3xl font-extrabold text-white">1.5</span>
                  <span className="text-xs font-bold text-emerald-400">Ton</span>
                </div>
                <div className="text-xs text-slate-200 mt-0.5 font-medium">SWL per Tiang</div>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-3xl font-extrabold text-white">2</span>
                  <span className="text-xs font-bold text-slate-300">Hub</span>
                </div>
                <div className="text-xs text-slate-200 mt-0.5 font-medium">Surabaya & Sidoarjo</div>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg sm:text-2xl font-extrabold text-white">EN 12811</span>
                </div>
                <div className="text-xs text-slate-200 mt-0.5 font-medium">Standar K3</div>
              </div>
            </div>

            {/* Indicator Pills with WCAG Accessible Touch Targets */}
            <div className="flex items-center gap-0.5 self-start sm:self-end pb-1 -mr-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className="p-2 sm:p-2.5 flex items-center justify-center min-w-[28px] min-h-[32px] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-full"
                  aria-label={`Pindah ke Slide ${idx + 1}`}
                >
                  <span
                    className={`h-1.5 transition-all rounded-full block ${
                      idx === currentSlide
                        ? 'w-8 bg-orange-500'
                        : 'w-2 bg-slate-600 hover:bg-slate-400'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chevron Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 backdrop-blur-sm transition hidden lg:block"
        aria-label="Slide Sebelumnya"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 backdrop-blur-sm transition hidden lg:block"
        aria-label="Slide Selanjutnya"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
}
