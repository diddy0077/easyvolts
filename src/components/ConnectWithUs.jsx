import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const ConnectWithUs = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 glass bg-gradient-to-r from-gray-900/80 to-indigo-900/80 backdrop-blur-lg border-b border-white/10 p-3 text-white text-center mt-16">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Start Your Project?
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-80"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We're here to help you turn your ideas into reality. Let's connect and discuss your vision.
        </motion.p>

        <Link
           to='/get-started'
          className="inline-block px-8 py-4 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)' }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default ConnectWithUs;