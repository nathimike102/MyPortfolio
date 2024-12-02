import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="tech-pattern" />
      <div className="matrix-bg" />
      <div className="circuit-pattern" />
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10" />
      </motion.div>
    </div>
  );
};

export default Background;