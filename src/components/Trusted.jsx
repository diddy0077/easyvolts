import React from 'react';
import { motion } from 'framer-motion';
import brand1 from '../assets/brand1.jpg'
import brand2 from '../assets/brand2.jpg'
import brand3 from '../assets/brand3.jpg'
import brand4 from '../assets/brand4.png'


const logos = [
  brand1,
  brand2,
  brand3,
  brand4,
];

const allLogos = [...logos, ...logos, ...logos];

const marqueeVariants = {
  animate: {
    x: ['-33.3%', '0%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 40,
        ease: 'linear',
      },
    },
  },
};

const marqueeVariantsReverse = {
  animate: {
    x: ['0%', '-33.3%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 40,
        ease: 'linear',
      },
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const LogoCard = ({ src }) => (
  <div className="flex-shrink-0 w-32 md:w-40 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
    <img 
      src={src} 
      alt="Partner Logo" 
      className="w-1/2 object-contain  hover:grayscale-0 transition-all duration-500 ease-in-out" 
    />
  </div>
);

export default function Trusted() {
  return (
    <div className="bg-gray-50 py-24 overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-white" style={{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        WebkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
      }}>
        <motion.div
          className="w-96 h-96 absolute rounded-full bg-blue-300/30 blur-[100px] -top-20 -left-20"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="w-96 h-96 absolute rounded-full bg-purple-300/30 blur-[100px] bottom-20 -right-20"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 mb-16">
        <motion.div
          className="uppercase tracking-widest text-sm text-gray-500 mb-2 font-semibold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          Trusted by Leaders
        </motion.div>
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          Partnerships That Drive <span className='text-primary'>Success</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          We build lasting relationships with innovative companies worldwide, from rising startups to global corporations.
        </motion.p>
        <motion.a 
          href="#contact" 
          className="mt-8 inline-flex bg-secondary items-center justify-center px-8 py-4 text-white bg-gray-900 rounded-full font-bold shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Get Started
        </motion.a>
      </div>

      <div className="relative z-10 w-full inline-flex flex-nowrap overflow-hidden">
        <motion.div
          className="flex items-center justify-center md:justify-start gap-12"
          variants={marqueeVariants}
          animate="animate"
        >
          {allLogos.map((src, i) => (
            <LogoCard key={i} src={src} />
          ))}
        </motion.div>
        <motion.div
          className="flex items-center justify-center md:justify-start gap-12"
          variants={marqueeVariants}
          animate="animate"
        >
          {allLogos.map((src, i) => (
            <LogoCard key={i + logos.length} src={src} />
          ))}
        </motion.div>
      </div>
      
      <div className="relative z-10 w-full inline-flex flex-nowrap overflow-hidden mt-12">
        <motion.div
          className="flex items-center justify-center md:justify-start gap-12"
          variants={marqueeVariantsReverse}
          animate="animate"
        >
          {allLogos.map((src, i) => (
            <LogoCard key={i} src={src} />
          ))}
        </motion.div>
        <motion.div
          className="flex items-center justify-center md:justify-start gap-12"
          variants={marqueeVariantsReverse}
          animate="animate"
        >
          {allLogos.map((src, i) => (
            <LogoCard key={i + logos.length} src={src} />
          ))}
        </motion.div>
      </div>

    </div>
  );
}