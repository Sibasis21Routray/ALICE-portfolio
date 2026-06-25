import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Trophy,
  Star,
  Zap,
  Medal,
  Sparkles,
  CheckCircle,
} from "lucide-react";

import {awardsData} from "../../lib/data"

function HeadingBubbles({ tone = 'blue' }: { tone?: 'blue' | 'orange' }) {
  // Ambient floating bubbles for section headings. Two tones so different
  // section headings can read as related without looking identical.
  const palette =
    tone === 'blue'
      ? ['rgba(12,113,195,0.32)', 'rgba(56,189,248,0.26)', 'rgba(12,113,195,0.16)']
      : ['rgba(245,117,7,0.32)', 'rgba(12,113,195,0.2)', 'rgba(245,117,7,0.16)'];

  const bubbles = [
    { size: 26, top: '8%',  left: '4%',  dur: 7.5, delay: 0 },
    { size: 19, top: '70%', left: '0%',  dur: 6,   delay: 0.5 },
    { size: 32, top: '55%', left: '10%', dur: 9,   delay: 1.1 },
    { size: 21, top: '15%', left: '88%', dur: 6.5, delay: 0.3 },
    { size: 28, top: '68%', left: '93%', dur: 8,   delay: 0.8 },
    { size: 18, top: '40%', left: '97%', dur: 5.5, delay: 1.4 },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-visible">
      {bubbles.map((b, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: palette[i % palette.length],
          }}
          animate={{
            y: [0, -14, 0],
            x: [0, i % 2 === 0 ? 5 : -5, 0],
            opacity: [0.35, 0.85, 0.35],
          }}
          transition={{
            duration: b.dur,
            delay: b.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Get unique companies for tabs
const brandTabs = [
  "All",
  ...Array.from(new Set(awardsData.map((a) => a.company))),
];

export default function Awards() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter awards based on active tab
  const filteredAwards =
    activeTab === "All"
      ? awardsData
      : awardsData.filter((a) => a.company === activeTab);

  // Get current award for main card
  const currentAward = filteredAwards[currentIndex] || filteredAwards[0];

  // Get next awards for deck (showing next 2 cards)
  const getNextAwards = () => {
    const nextAwards = [];
    for (let i = 1; i <= 2; i++) {
      const index = (currentIndex + i) % filteredAwards.length;
      nextAwards.push(filteredAwards[index]);
    }
    return nextAwards;
  };

  const nextAwards = getNextAwards();

  // Navigation handlers
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredAwards.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === filteredAwards.length - 1 ? 0 : prev + 1,
    );
  };

  // Reset index when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <div className="bg-white text-gray-900  font-sans antialiased overflow-x-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  ">
        {/* Page Header - Simple */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center mt-10 "
        >
          <div className="relative inline-block min-w-[280px] sm:min-w-[360px] px-6 z-0">
            <HeadingBubbles tone="blue" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 leading-tight"
            >
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] via-[#0c71c3] to-[#f57507]">
                Awards
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative z-10 text-gray-500 max-w-2xl mx-auto mt-2 text-sm sm:text-base"
          >
            My Awards & Recognition
          </motion.p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-8 pt-10">
          {brandTabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#0c71c3] text-white shadow-sm"
                    : "bg-[#F1F3F9] text-[#9AA5B1] hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Award Count */}
        <div className="text-center text-sm text-gray-400 mb-8">
          {filteredAwards.length} award{filteredAwards.length !== 1 ? "s" : ""}{" "}
          found
        </div>

        {/* Split Layout Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Block: Description */}
          <div className="lg:col-span-5 flex flex-col h-full py-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#0c71c3]/10 rounded-lg">
                  {currentAward && (
                    <currentAward.icon className="w-6 h-6 text-[#0c71c3]" />
                  )}
                </div>
                <span className="text-xs font-bold text-[#0c71c3] uppercase tracking-wider">
                  {currentAward?.company}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black leading-tight mb-3">
                {currentAward?.title}
                {currentAward?.subtitle && (
                  <>
                    <br />
                    <span className="text-[#0c71c3]">
                      {currentAward.subtitle}
                    </span>
                  </>
                )}
              </h2>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {currentAward?.year}
                </span>
                <span className="text-sm font-medium text-[#0c71c3] bg-[#0c71c3]/10 px-3 py-1 rounded-full">
                  {currentAward?.category}
                </span>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {currentAward?.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Main Card + Deck Cards + Arrows */}
          <div className="lg:col-span-7">
            <div className="flex flex-col items-center gap-6">
              {/* Cards Row */}
              <div className="flex items-center gap-6 overflow-visible pl-4 lg:pl-12 flex-wrap lg:flex-nowrap justify-center ">
                {/* Primary Featured Card */}
                {currentAward && (
                  <motion.div
                    key={currentAward.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-[280px] md:w-[320px] bg-white rounded-[24px] p-8 flex flex-col items-center justify-center text-center border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex-shrink-0"
                  >
                    {/* Hexagon Award Seal */}
                    <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                      <div className="absolute inset-0 bg-[#0c71c3] clip-hexagon scale-[0.98]" />
                      <div className="absolute inset-[3px] bg-white clip-hexagon flex flex-col items-center justify-center p-2">
                        <span className="text-[7px] font-bold text-gray-400 uppercase tracking-widest mb-1 text-center leading-tight">
                          {currentAward.category}
                        </span>
                        <div className="w-16 h-[1px] bg-gray-200 my-0.5" />
                        <span className="text-sm font-black text-[#0c71c3] tracking-tight text-center leading-tight px-1">
                          {currentAward.company
                            .split(" ")
                            .slice(0, 2)
                            .join(" ")}
                        </span>
                        <div className="w-16 h-[1px] bg-gray-200 my-0.5" />
                        <span className="text-[8px] font-bold text-gray-500 uppercase tracking-wider mt-1">
                          {currentAward.year}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-black mb-1 leading-tight">
                      {currentAward.title}
                    </h3>
                    {currentAward.subtitle && (
                      <p className="text-xs text-gray-500 leading-tight">
                        {currentAward.subtitle}
                      </p>
                    )}
                  </motion.div>
                )}

                {/* Deck Cards - Showing Next 2 Awards */}
                {filteredAwards.length > 1 && (
                  <div className="flex gap-3 items-center">
                    {nextAwards.map((award, idx) => (
                      <motion.div
                        key={award.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 0.6, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="w-[140px] md:w-[160px] bg-white rounded-[16px] p-4 flex flex-col items-center text-center border border-gray-100 shadow-sm flex-shrink-0 pointer-events-none"
                      >
                        {/* Small Hexagon Seal */}
                        <div className="relative w-14 h-14 flex items-center justify-center mb-3">
                          <div className="absolute inset-0 bg-[#0c71c3] clip-hexagon opacity-70" />
                          <div className="absolute inset-[2px] bg-white clip-hexagon flex flex-col items-center justify-center">
                            <span className="text-[5px] font-bold text-[#0c71c3] text-center leading-tight px-1">
                              {award.company.split(" ").slice(0, 2).join(" ")}
                            </span>
                            <span className="text-[5px] text-gray-400">
                              {award.year}
                            </span>
                          </div>
                        </div>
                        <h4 className="text-[10px] font-bold text-black leading-tight mb-0.5">
                          {award.title}
                        </h4>
                        {award.subtitle && (
                          <p className="text-[8px] text-gray-400 leading-tight">
                            {award.subtitle}
                          </p>
                        )}
                        <span className="text-[8px] text-[#0c71c3] font-medium mt-1">
                          Next
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Carousel Navigation - Below Deck Cards */}
              {filteredAwards.length > 1 && (
                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-full border border-gray-200 hover:border-[#0c71c3] hover:bg-[#0c71c3]/5 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 text-gray-500 hover:text-[#0c71c3]" />
                  </button>
                  <div className="flex items-center gap-1.5">
                    {filteredAwards.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentIndex
                            ? "w-6 bg-[#0c71c3]"
                            : "w-1.5 bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full border border-gray-200 hover:border-[#0c71c3] hover:bg-[#0c71c3]/5 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-gray-500 hover:text-[#0c71c3]" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Global CSS Injector for the Hexagon Badge Geometry */}
      <style>{`
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </div>
  );
}