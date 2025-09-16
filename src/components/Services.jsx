import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { AiOutlineCloud, AiOutlineMobile } from 'react-icons/ai';
import { FaShieldAlt } from 'react-icons/fa';

const cards = [
  {
    icon: <AiOutlineCloud size={28} />,
    title: 'Web Solutions',
    desc: 'Modern & clean design that scales — enterprise web apps built for performance and UX.'
  },
  {
    icon: <AiOutlineMobile size={28} />,
    title: 'Mobile Development',
    desc: 'Cross-platform mobile apps and responsive web experiences.'
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: 'Cybersecurity',
    desc: 'Threat analysis, secure architecture, and incident response to protect your digital assets.'
  }
];

export default function Services() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, -100]);
  const y2 = useTransform(scrollY, [0, 800], [0, 120]);

  return (
    <section id="services" className="relative py-32 px-2 bg-gray-50 overflow-hidden">
      {/* Background gradient blobs with parallax */}
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

      {/* Floating particles */}
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

      {/* Section heading */}
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
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {cards.map((c, idx) => (
          <motion.article
            key={idx}
            className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center cursor-pointer"
            whileHover={{ scale: 1.06, rotate: 1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            {/* Icon animation */}
            <motion.div
              className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-primary to-secondary text-white shadow-lg"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              {c.icon}
            </motion.div>

            <h3 className="text-2xl font-semibold text-dark mb-3">{c.title}</h3>
            <p className="text-dark/70 text-base leading-relaxed">{c.desc}</p>

             <motion.a
      href="#contact"
      className="mt-8 inline-block px-6 py-3 rounded-full border border-dark/10 text-dark font-medium relative overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Pseudo-element for the sliding background animation */}
      <span 
        className="absolute inset-0 bg-secondary transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
      ></span>
      
      {/* Text content, needs to be on top of the background and change color on hover */}
      <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
        Get a Quote
      </span>
    </motion.a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
