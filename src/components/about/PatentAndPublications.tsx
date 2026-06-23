import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { BookOpen, FileCode } from 'lucide-react';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.05
    }
  }
};

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
    title: 'Somatic embryogenesis in Gnetum ula',
    publication: 'In: Somatic embryogenesis in Woody Plants. Jain SM, Gupta PK, Newton RJ (Eds). Kluwer Academic Publishers, The Netherlands',
    year: '1998',
    type: 'Book Chapter'
  },
  {
    id: 2,
    authors: "Alice Clara Augustine & L. D'Souza",
    title: 'Somatic embryogenesis in Gnetum ula Brongn. (Gnetum edule) (Willd) Blume',
    publication: 'Plant Cell Reports 16: 354-357',
    year: '1997',
    type: 'Journal Article'
  },
  {
    id: 3,
    authors: "Alice Clara Augustine & L. D'Souza",
    title: 'Regeneration of an anticarcinogenic herb, Curculigo orchioides (Gaertn.)',
    publication: 'In Vitro Cellular and Developmental Biology – Plant 33(2)',
    year: '1997',
    type: 'Journal Article'
  },
  {
    id: 4,
    authors: "Alice Clara Augustine & L. D'Souza",
    title: 'Micropropagation of an Endangered Forest Tree – Zanthoxylum rhetsa',
    publication: 'Phytomorphology Vol 47(3)',
    year: '1997',
    type: 'Journal Article'
  },
  {
    id: 5,
    authors: "Alice Clara Augustine & L. D'Souza",
    title: 'Conservation of Curculigo orchioides an endangered, anticarcinogenic herb',
    publication: 'In: Recent Advances in Biotechnological Applications of Plant Tissue and Cell Culture. G. A. Ravishankar & L. V. Venkataraman (eds). Oxford & IBH Publishing Co. Pvt. Ltd. New Delhi, Calcutta 175-179.',
    year: '1997',
    type: 'Book Chapter'
  }
];

export default function PatentsAndPublications() {
  const [activeTab, setActiveTab] = useState('publications');

  const currentData = activeTab === 'publications' ? publications : patents;

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans antialiased">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        
        {/* Minimal High-End Header */}
        {/* Section Header - Compact */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
     
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 leading-tight"
      >
        
        <span className="relative inline-block">
          <span className="absolute -inset-2 bg-gradient-to-r from-[#0c71c3] to-[#f57507] blur-3xl opacity-20 rounded-xl" />
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] via-[#0c71c3] to-[#f57507]">
            Patents & publications
          </span>
        </span>
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-500 max-w-2xl mx-auto mt-2 text-sm sm:text-base"
      >
        Referance Information
      </motion.p>
    </motion.div>

        {/* Layout Navigation Tabs */}
        <div className="flex gap-3 mb-16 border-b border-gray-100 pb-4">
          <button
            onClick={() => setActiveTab('publications')}
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
            onClick={() => setActiveTab('patents')}
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

        {/* Asymmetric Split Layout List Container */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          key={activeTab}
          className="space-y-16"
        >
          {currentData.map((item, index) => (
            <motion.div key={item.id} variants={fadeInUp} className="group">
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Left Branding & Citation Column */}
                <div className="md:col-span-5 space-y-4">
                  
                  {/* Distinct Initial Block Prefix Tagging */}
                  <div className="text-3xl font-black tracking-tight text-gray-900 select-none flex items-center gap-1.5">
                    <span className="bg-[#0066CC] text-white px-2 py-0.5 rounded-sm font-extrabold text-2xl">
                      {activeTab === 'publications' ? 'PUB' : 'PAT'}
                    </span>
                    <span className="text-gray-800 font-medium tracking-wide text-2xl">
                      {item.year}
                    </span>
                  </div>

                  {/* Metadata Hierarchy */}
                  <div className="pt-2">
                    <h2 className="text-sm font-bold text-[#0066CC] uppercase tracking-wider leading-tight">
                      {activeTab === 'publications' ? (item as any).type : 'Intellectual Property'}
                    </h2>
                    
                    <p className="text-gray-600 text-[13px] mt-3 font-semibold leading-relaxed">
                      {activeTab === 'publications' ? (item as any).authors : (item as any).number}
                    </p>
                    
                    <p className="text-gray-400 text-xs mt-1">
                      Ref Year: {item.year}
                    </p>
                  </div>
                </div>

                {/* Right Core Conceptual Prose Column */}
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
                      <span className="text-gray-400 font-normal">Assignee:</span> {(item as any).assignee}
                    </p>
                  )}
                  
                </div>

              </div>

              {/* Exact Figma Vibrant Thick Orange Row Separator */}
              {index < currentData.length - 1 && (
                <div className="mt-16 border-t-[1px] border-[#FF7A00] w-full opacity-100" />
              )}

            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}