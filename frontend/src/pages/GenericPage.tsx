import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function GenericPage() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  const title = pathParts.length > 0 ? pathParts[pathParts.length - 1].replace(/-/g, ' ') : 'Page';

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 capitalize mb-4">{title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          This is a placeholder page for {location.pathname}. Content coming soon!
        </p>
      </motion.div>
    </div>
  );
}
