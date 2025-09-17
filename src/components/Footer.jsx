import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

const navLinks = [
  { title: 'Company', links: ['About Us', 'Services', 'Our Team', 'Blog'] },
  { title: 'Support', links: ['Contact', 'FAQ', 'Privacy Policy', 'Terms of Service'] },
];

const socialLinks = [
  { icon: <FaTwitter />, href: 'https://twitter.com/easyvolts' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/company/104146204/admin/dashboard/' },
  { icon: <FaFacebook />, href: 'https://facebook.com/easyvolts' },
  { icon: <FaGithub />, href: 'https://github.com/easyvolts' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/easyvolts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative mt-20">
      {/* SVG for the sharp edge arrow effect */}
      <svg 
        className="absolute top-0 w-full h-24 text-gray-900 transform -translate-y-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none" 
        fill="currentColor"
      >
        <polygon points="0,100 100,100 50,0"></polygon>
      </svg>
      
      <div className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info - Full-width on mobile, larger on tablet/desktop */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className='bg-white rounded-full mb-4'>
              <a href="/" className="mb-4">
              <img 
                src="https://easyvolts.ng/img/logo-light.png" 
                alt="EasyVolts Logo" 
                className="h-12 w-12" 
              />
            </a>
            </div>
            <p className="max-w-md text-sm leading-relaxed mb-1">
              Powering secure technology solutions for businesses worldwide. We are dedicated to delivering excellence and innovation in every project.
            </p>
            <p className='max-w-md text-sm leading-relaxed mb-4'><span className='text-md'>Motto:</span> Lighting the Future with Smart Technology.</p>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  aria-label={social.href.includes('twitter') ? 'Twitter' : social.href.includes('linkedin') ? 'LinkedIn' : social.href.includes('facebook') ? 'Facebook' : social.href.includes('github') ? 'GitHub' : 'Instagram'}
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
  
         
          <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-2 gap-12">
            
            {navLinks.map((section, index) => (
              <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className="text-sm hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
  
            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <FiMail className="text-xl text-gray-400" />
                  <a href="mailto:contact@easyvolts.com" className="text-sm hover:text-white transition-colors">
                    info@easyvolts.ng
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <FiPhone className="text-xl text-gray-400" />
                  <a href="tel:+1234567890" className="text-sm hover:text-white transition-colors">
                    +2348083443574
                  </a>
                </li>
                <li className="text-sm text-gray-400 mt-2">
                  Sky mall Ikeja Lagos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      <div className="mt-12 container mx-auto px-6 text-center border-t border-gray-700 py-8">
        <p className="text-sm text-gray-500 uppercase font-semibold">
          © {new Date().getFullYear()} Easy Volt Consultants Firm. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}