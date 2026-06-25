import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, FileCode, ChevronDown } from 'lucide-react';

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
        <span
          key={i}
          className="absolute rounded-full animate-pulse"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: palette[i % palette.length],
            animation: `float-${i} ${b.dur}s ease-in-out ${b.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        ${bubbles
          .map(
            (b, i) => `
          @keyframes float-${i} {
            0%, 100% { transform: translate(0, 0); opacity: 0.35; }
            50% { transform: translate(${i % 2 === 0 ? 5 : -5}px, -14px); opacity: 0.85; }
          }
        `
          )
          .join('\n')}
      `}</style>
    </div>
  );
}

// Data
const patents = [
  {
    id: 1,
    title: 'Transgenic Plants With Enhanced Traits',
    number: 'US 2019/0367935 A1',
    year: '2019',
    type: 'Patent Grant',
    assignee: 'Agricultural Biotechnology Foundations'
  }
];

const publications = [
  {
    id: 1,
    authors: "Alice Clara Augustine & L. D'Souza",
    title: "Somatic embryogenesis in Gnetum ula",
    publication:
      "In: Somatic embryogenesis in Woody Plants. Jain SM, Gupta PK, Newton RJ (Eds). Kluwer Academic Publishers, The Netherlands",
    year: "1998",
    type: "Book Chapter"
  },
  {
    id: 2,
    authors: "Alice Clara Augustine & L. D'Souza",
    title:
      "Somatic embryogenesis in Gnetum ula Brongn. (Gnetum edule) (Willd) Blume",
    publication: "Plant Cell Reports 16: 354-357",
    year: "1997",
    type: "Journal Article"
  },
  {
    id: 3,
    authors: "Alice Clara Augustine & L. D'Souza",
    title:
      "Regeneration of an anticarcinogenic herb, Curculigo orchioides (Gaertn.)",
    publication: "In Vitro Cellular and Developmental Biology – Plant 33(2)",
    year: "1997",
    type: "Journal Article"
  },
  {
    id: 4,
    authors: "Alice Clara Augustine & L. D'Souza",
    title: "Micropropagation of an Endangered Forest Tree – Zanthoxylum rhetsa",
    publication: "Phytomorphology Vol 47(3)",
    year: "1997",
    type: "Journal Article"
  },
  {
    id: 5,
    authors: "Alice Clara Augustine & L. D'Souza",
    title:
      "Conservation of Curculigo orchioides an endangered, anticarcinogenic herb",
    publication:
      "In: Recent Advances in Biotechnological Applications of Plant Tissue and Cell Culture. G. A. Ravishankar & L. V. Venkataraman (eds). Oxford & IBH Publishing Co. Pvt. Ltd. New Delhi, Calcutta 175-179.",
    year: "1997",
    type: "Book Chapter"
  },
  {
    id: 6,
    authors: "Alice Clara Augustine & L. D'Souza",
    title: "Somatic embryogenesis in Gnetum ula",
    publication:
      "National Symposium on Emerging Trends in Plant Tissue Culture and Molecular Biology XX meeting of PTCA (India), Osmania University Jan 29-31",
    year: "1997",
    type: "Conference Paper"
  },
  {
    id: 7,
    authors: "Alice Clara Augustine & L. D'Souza",
    title:
      "Correlation of rate of germination of seeds and callus induction in Gnetum ula",
    publication:
      "Proceedings of the National Symposium held at the Defence Agricultural Research Laboratory, Pithoragarh, UP (India)",
    year: "2000",
    type: "Conference Paper"
  },
  {
    id: 8,
    authors:
      "L. D'Souza, Smitha Hegde, Alice Clara Augustine, Rajendra K, Vinitha Cardoza & Kavitha Kulakarni",
    title: "Cashew is a useful but difficult nut to crack!",
    publication:
      "In: Recent Advances in Biotechnological Applications of Plant Tissue and Cell Culture. G. A. Ravishankar & L. V. Venkataraman (eds). Oxford & IBH Publishing Co. Pvt. Ltd. New Delhi, Calcutta 175-179.",
    year: "1997",
    type: "Book Chapter"
  },
  {
    id: 9,
    authors:
      "L. D'Souza, Icy D'Silva, S. Mallya, A.C. Augustine, K. Rajendra, K.R. Kulkarni & V. Cardoza",
    title: "Anacardium occidentale L. (Cashewnut)",
    publication:
      "In: Biotechnology in Agriculture in Forestry, Vol. 35 Trees IV. Ed Y.P.S. Bajaj, Springer-Verlag, Berlin, Heidelberg",
    year: "1996",
    type: "Book Chapter"
  },
  {
    id: 10,
    authors: "Smitha Hegde, L. D'Souza, Icy D'Silva & Alice C. Augustine",
    title:
      "Vitro Trees of Cashew (Anacardium occidentale L.) - A Preliminary Evaluation",
    publication:
      "In: Trends in Plant Tissue Culture and Biotechnology. Ed. L.K. Pareek, p.239-240",
    year: "1997",
    type: "Conference Paper"
  },
  {
    id: 11,
    authors:
      "L. D'Souza, K. Rajendra, Vinitha Cardoza, Alice Clara Augustine, Smitha Hegde & Icy D'Silva",
    title: "Micropropagation and conservation of medicinal plants",
    publication:
      "Role of Biotechnology in Medicinal and Aromatic Plants. Ukaaz Publications, Hyderabad",
    year: "2003",
    type: "Book Chapter"
  },
  {
    id: 12,
    authors:
      "L. D'Souza, Alice Clara Augustine, Smitha Hegde, Kavitha Kulakarni, Icy D'Silva",
    title: "Problems of micropropagation of Cashew",
    publication: "Abstracts Placrosym XI, Calicut 30th Nov-3rd Dec",
    year: "1994",
    type: "Conference Paper"
  },
  {
    id: 13,
    authors: "Augustine et al.",
    title:
      "Induction of embryos and plantlets from anthers of Curculigo orchioides Gaertn – an endangered medicinal herb",
    publication: "Indian Journal of Biotechnology 7:536-540",
    year: "2008",
    type: "Journal Article"
  }
];

const PAGE_SIZE = 5;

// Hook: returns true once the element has entered the viewport
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el); // animate only once
        }
      },
      { threshold: 0.12, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

// Single animated entry wrapper
function AnimatedEntry({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(48px)',
        transition: `opacity 0.55s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms, transform 0.55s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function PatentsAndPublications() {
  const [activeTab, setActiveTab] = useState('publications');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const currentData = activeTab === 'publications' ? publications : patents;

  // Only paginate the Publications tab; Patents shows everything (it's a short list)
  const displayedData =
    activeTab === 'publications'
      ? currentData.slice(0, visibleCount)
      : currentData;

  const hasMore =
    activeTab === 'publications' && visibleCount < currentData.length;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setVisibleCount(PAGE_SIZE); // reset pagination when switching tabs
  };

  const handleReadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, currentData.length));
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans antialiased">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">

        {/* Header */}
        <AnimatedEntry>
          <div className="relative text-center mb-12">
            <div className="relative inline-block min-w-[280px] sm:min-w-[360px] px-6 z-0">
              <HeadingBubbles tone="blue" />
              <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 leading-tight">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] via-[#0c71c3] to-[#f57507]">
                  Patents & publications
                </span>
              </h2>
            </div>
            <p className="relative z-10 text-gray-500 max-w-2xl mx-auto mt-2 text-sm sm:text-base">
              Reference Information
            </p>
          </div>
        </AnimatedEntry>

        {/* Tabs */}
        <AnimatedEntry delay={80}>
          <div className="flex gap-3 mb-16 border-b border-gray-100 pb-4">
            <button
              onClick={() => handleTabChange('publications')}
              className={`flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-md transition-all ${
                activeTab === 'publications'
                  ? 'bg-[#0066CC] text-white shadow-sm'
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Publications ({publications.length})
            </button>
            <button
              onClick={() => handleTabChange('patents')}
              className={`flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-md transition-all ${
                activeTab === 'patents'
                  ? 'bg-[#0066CC] text-white shadow-sm'
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }`}
            >
              <FileCode className="w-4 h-4" />
              Patents ({patents.length})
            </button>
          </div>
        </AnimatedEntry>

        {/* List */}
        <div className="space-y-16" key={activeTab}>
          {displayedData.map((item, index) => (
            <AnimatedEntry key={`${activeTab}-${item.id}`} delay={index * 60}>
              <div className="group">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                  {/* Left column */}
                  <div className="md:col-span-5 space-y-4">
                    <div className="text-3xl font-black tracking-tight text-gray-900 select-none flex items-center gap-1.5">
                      <span className="bg-[#0066CC] text-white px-2 py-0.5 rounded-sm font-extrabold text-2xl">
                        {activeTab === 'publications' ? 'PUB' : 'PAT'}
                      </span>
                      <span className="text-gray-800 font-medium tracking-wide text-2xl">
                        {item.year}
                      </span>
                    </div>

                    <div className="pt-2">
                      <h2 className="text-sm font-bold text-[#0066CC] uppercase tracking-wider leading-tight">
                        {activeTab === 'publications'
                          ? (item as any).type
                          : 'Intellectual Property'}
                      </h2>
                      <p className="text-gray-600 text-[13px] mt-3 font-semibold leading-relaxed">
                        {activeTab === 'publications'
                          ? (item as any).authors
                          : (item as any).number}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        Ref Year: {item.year}
                      </p>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="md:col-span-7 space-y-4 text-gray-800 text-sm md:text-[15px] leading-relaxed font-normal pt-1">
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight leading-snug">
                      "{item.title}"
                    </h3>

                    {(item as any).publication && (
                      <p className="text-gray-500 italic font-normal text-sm md:text-[14px]">
                        {(item as any).publication}
                      </p>
                    )}

                    {(item as any).assignee && (
                      <p className="text-gray-500 text-sm font-medium">
                        <span className="text-gray-400 font-normal">Assignee:</span>{' '}
                        {(item as any).assignee}
                      </p>
                    )}
                  </div>
                </div>

                {/* Separator */}
                {index < displayedData.length - 1 && (
                  <div className="mt-16 border-t-[1px] border-[#FF7A00] w-full opacity-100" />
                )}
              </div>
            </AnimatedEntry>
          ))}
        </div>

        {/* Read More button */}
        {hasMore && (
          <AnimatedEntry delay={120}>
            <div className="flex justify-center mt-16">
              <button
                onClick={handleReadMore}
                className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#0066CC] bg-[#0066CC]/5 hover:bg-[#0066CC]/10 border border-[#0066CC]/20 rounded-full transition-all duration-200"
              >
                Read more
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </AnimatedEntry>
        )}
      </div>
    </div>
  );
}