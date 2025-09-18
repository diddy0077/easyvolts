import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { NavLink, Link, useLocation } from 'react-router-dom';

const menuLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
  { name: 'About', href: '/about-us' }
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

const handleScroll = (e, href, toggleMenu) => {
  if (href.startsWith('#')) {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (toggleMenu) {
        toggleMenu();
      }
    }
  }
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const filteredMenuLinks = menuLinks.filter(link => {
    if (location.pathname === '/') {
      return true;
    }
    return link.name !== 'Services' && link.name !== 'Contact';
  });

  return (
    <header className="fixed w-full z-40">
      <nav className="glass bg-gradient-to-r from-gray-900/80 to-indigo-900/80 backdrop-blur-lg border-b border-white/10 p-3">
        <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-6">
          <div className='bg-white rounded-full'>
            <Link to='/' className="flex items-center">
              <img src="https://easyvolts.ng/img/logo-light.png" className='h-13 w-13' alt="logo" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            {filteredMenuLinks.map((link) => (
              link.href.startsWith('/') ? (
                <NavLink 
                  key={link.name} 
                  to={link.href} 
                  end={link.href === '/'}
                  className={({ isActive }) => 
                    `${isActive 
                      ? 'bg-purple-600 px-4 py-2 rounded-full text-white' 
                      : 'text-white'
                    } hover:text-purple-400 font-semibold transition-colors`
                  }
                >
                  {link.name}
                </NavLink>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href, null)}
                  className="text-white font-semibold hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
            <Link
              to='/get-started'
              className="ml-4 px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center">
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
            {filteredMenuLinks.map((link, index) => (
              link.href.startsWith('/') ? (
                <NavLink
                  key={link.name} 
                  to={link.href}
                  end={link.href === '/'}
                  onClick={toggleMenu}
                  className={({ isActive }) => 
                    `${isActive 
                      ? 'text-purple-400 font-extrabold' 
                      : 'text-white'
                    } text-3xl font-bold mb-8 hover:text-purple-400 transition-colors`
                  }
                  variants={menuLinkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  {link.name}
                </NavLink>
              ) : (
                <a
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href, toggleMenu)}
                  className="text-white text-3xl font-bold mb-8 hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
            <Link
              to='/get-started'
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 px-8 py-4 rounded-full bg-purple-600 text-white font-bold shadow-lg hover:bg-purple-700 transition"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}