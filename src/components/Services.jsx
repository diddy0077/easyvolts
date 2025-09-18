import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { AiOutlineCloud, AiOutlineMobile,AiOutlineLaptop  } from 'react-icons/ai';
import { FaShieldAlt,FaCloud  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ServicesSlider from './ServicesSlider';

const cards = [
  {
    icon: <AiOutlineCloud size={28} />,
    title: 'Web Solutions',
    desc: 'Modern & clean design that scales — enterprise web apps built for performance and UX.'
  },
  {
    icon: <AiOutlineMobile size={28} />,
    title: 'Mobile Development',
    desc: 'Build fast, secure, and user-friendly mobile apps that run seamlessly on iOS and Android.'
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: 'Cybersecurity',
    desc: 'Threat analysis, secure architecture, and incident response to protect your digital assets.'
  },
  {
    icon: <AiOutlineLaptop size={28} />,
    title: 'Technology Consulting',
    desc: 'We provide strategic guidance to optimize your technology and drive digital transformation.'
  },
  {
    icon: <FaCloud size={28} />,
    title: 'Cloud Services',
    desc: 'Transform your business the cloud. We provide expert solutions to unlock scalability.'
  }
];

export default function Services() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, -100]);
  const y2 = useTransform(scrollY, [0, 800], [0, 120]);

  return (
    <section id="services" className="relative py-32 px-2 bg-gray-50 overflow-hidden">
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full mix-blend-multiply filter blur-3xl"
        style={{ y: y1 }}
        animate={{ rotate: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-secondary/40 to-primary/40 rounded-full mix-blend-multiply filter blur-3xl"
        style={{ y: y2 }}
        animate={{ rotate: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'easeInOut' }}
      />

     
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8 + Math.random() * 5, ease: 'easeInOut', delay: Math.random() * 5 }}
        />
      ))}

    
      <motion.div
        className="container mx-auto px-6 text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Our Services</h2>
        <div className="mt-3 w-28 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary"></div>
        <p className="mt-6 text-dark/80 max-w-3xl mx-auto text-lg leading-relaxed">
          From product design and development to security & cloud — everything needed to ship impactful digital products efficiently and securely.
        </p>
      </motion.div>

      {/* Cards */}
      <ServicesSlider cards={cards} />
    </section>
  );
}
