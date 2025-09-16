import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // HiX is the 'close' icon


const menuLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' }
];

const mobileMenuVariants = {
  hidden: { x: '100%' },
  visible: { 
    x: '0%', 
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  },
  exit: {
    x: '100%',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
};

const menuLinkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-40">
      <nav className="glass bg-gradient-to-r from-gray-900/80 to-indigo-900/80 backdrop-blur-lg border-b border-white/10 p-3">
        <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-6">
          <div className='bg-white p-[.1rem] rounded-full'>
            <a href="#home" className="flex items-center">
            <img src="https://easyvolts.ng/img/logo-light.png" className='h-15 w-15' alt="logo" />
          </a>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            {menuLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-white hover:text-purple-400 transition-colors">
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition"
            >
              Get Started
            </a>
          </div>

          <div className="md:hidden flex items-center ">
            <button onClick={toggleMenu} className="text-white transition-transform duration-300 transform-gpu z-50">
               <HiMenuAlt3 size={32} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-screen w-full sm:w-80 bg-gray-900/90 backdrop-blur-md p-8 z-30 flex flex-col items-end pt-28"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button onClick={() => setIsMenuOpen(false)} className='absolute left-4 top-4'>
              <HiX size={32} className="text-white" />
            </button>
            {menuLinks.map((link, index) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                onClick={toggleMenu}
                className="text-white text-3xl font-bold mb-8 hover:text-purple-400 transition-colors"
                variants={menuLinkVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={toggleMenu}
              className="mt-8 px-8 py-4 rounded-full bg-purple-600 text-white font-bold shadow-lg hover:bg-purple-700 transition"
              variants={menuLinkVariants}
              initial="hidden"
              animate="visible"
              custom={menuLinks.length}
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}