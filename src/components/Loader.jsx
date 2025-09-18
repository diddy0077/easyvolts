import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed flex-col inset-0 z-50 flex items-center justify-center bg-gray-900">
      <motion.div
        className='bg-white rounded-full mb-4'
        animate={{ rotate: [0, 15, -15, 0] }} // Rotates from 0, to 15 degrees, to -15, and back
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img 
          src="https://easyvolts.ng/img/logo-light.png" 
          alt="EasyVolts Logo" 
          className="h-20 w-20" 
        />
      </motion.div>
    </div>
  );
}