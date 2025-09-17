import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaHandshake, FaShieldAlt, FaLightbulb, FaRocket, FaUserCheck, FaCogs } from 'react-icons/fa';
import { FiTarget, FiEye, FiZap, FiCheckCircle } from 'react-icons/fi';

// Core content data
const aboutContent = {
  mission: {
    title: 'Mission Statement',
    heading: 'Our Mission',
    subtitle: 'Driving digital transformation and growth.',
    text: `At EasyVolts, our mission is to empower businesses and individuals with innovative technology solutions that drive growth, enhance security, and simplify digital transformation. We are committed to delivering high quality software, web, mobile, and cybersecurity services, while equipping the next generation with essential tech skills through training and mentorship.`
  },
  vision: {
    title: 'Vision Statement',
    heading: 'Our Vision',
    subtitle: 'A leader in technology and capacity-building.',
    text: `Our vision is to become a leading technology partner in Africa and beyond, recognized for excellence in innovation, reliability, and capacity-building shaping a future where technology is accessible, secure, and transformative for all.`
  }
};

const coreValues = [
  { title: 'Innovation', icon: <FaLightbulb />, description: 'We embrace creativity and continuous improvement to deliver forward-thinking solutions.' },
  { title: 'Excellence', icon: <FaRocket />, description: 'We uphold the highest standards of quality and professionalism in everything we do.' },
  { title: 'Integrity', icon: <FaUserCheck />, description: 'We build trust through honesty, transparency, and accountability.' },
  { title: 'Collaboration', icon: <FaHandshake />, description: 'We believe in teamwork and strong partnerships to achieve greater impact.' },
  { title: 'Customer Success', icon: <FiCheckCircle />, description: 'We put our clients at the center, ensuring their growth and satisfaction.' },
  { title: 'Security', icon: <FaShieldAlt />, description: 'We prioritize safe, secure, and reliable solutions in a fast-evolving digital world.' },
  { title: 'Empowerment', icon: <FaCogs />, description: 'We are committed to training and inspiring the next generation of tech leaders.' }
];

const whyChooseUs = [
  { title: 'Tailored Solutions', icon: <FiTarget />, description: 'We understand that no two businesses are the same. Our team designs and develops technology that aligns with your specific goals and challenges.' },
  { title: 'Innovation-Driven', icon: <FiZap />, description: 'We stay ahead of industry trends, turning fresh ideas into powerful, future-ready digital solutions.' },
  { title: 'Security-Focused', icon: <FaShieldAlt />, description: 'With cybersecurity integrated into every stage of development, we ensure your systems are reliable, protected, and built to last.' },
  { title: 'Comprehensive Expertise', icon: <FaLaptopCode />, description: 'From web and mobile applications to enterprise software and security solutions, everything you need is under one roof.' },
  { title: 'Trusted Partnership', icon: <FaHandshake />, description: 'We don’t just deliver projects; we build long-term relationships by guiding you from concept through deployment and beyond.' },
];

// Framer Motion variants for animations
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};



export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="bg-gray-50 text-gray-800 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundImage: "url('https://easyvolts.ng/img/2.jpg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // Parallax effect
      }}
      className="bg-gray-900 text-white py-24 pb-10 md:pt-40 md:pb-10 md:py-32 relative overflow-hidden pt-42"
    >
      {/* Background Overlays and Animated Blobs */}
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>

      {/* Animated Blobs for Visual Interest */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-1/2 right-0 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Staggered text animation container */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg"
            variants={fadeIn}
          >
            About EasyVolts
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl font-light max-w-2xl mx-auto mb-8 text-purple-400 drop-shadow-md"
            variants={fadeIn}
          >
            Lighting the Future with Smart Technology
          </motion.p>
        </motion.div>

        
        <motion.div
          className="mt-16 mb-8"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }} // Adjusted delay for staggering
        >
          <svg className="w-10 h-10 mx-auto text-white animate-bounce rotate-[180deg]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1z" clipRule="evenodd"></path>
            <path fillRule="evenodd" d="M10 3.586L6.707 6.879a1 1 0 001.414 1.414L10 6.414l1.879 1.879a1 1 0 001.414-1.414L10 3.586z" clipRule="evenodd"></path>
          </svg>
        </motion.div>
      </div>
    </section>

      {/* New Section for Provided Text */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <motion.div
              className="md:order-1"
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2940"
                alt="Our philosophy"
                className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Text Column */}
            <motion.div
              className="md:order-2"
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
              <p className="text-md text-gray-600 mb-8">
                At EasyVolts, we are driven by a commitment to <span className='font-bold text-primary'>innovation</span>, <span className='font-bold text-primary'>flexibility</span> , and <span className='font-bold text-primary'>sustainable growth</span>. As a technology consulting company, we provide businesses with solutions that are <span className='font-bold text-primary'>secure</span>, <span className='font-bold text-primary'>scalable</span>, and tailored to their needs.
                <br/><br/>
                Our <span className='font-bold text-primary'>hybrid work model</span> enables efficiency and adaptability, while our focus on <span className='font-bold text-primary'>mentorship, certifications</span>, and participation in global tech conferences ensures that our team remains at the forefront of industry trends.
                <br/><br/>
                We uphold strict <span className='font-bold text-primary'>cybersecurity standards</span> across all our services, reflecting our dedication to <span className='font-bold text-primary'>safety</span> and <span className='font-bold text-primary'>reliability</span> in a rapidly evolving digital world. Beyond technology, we value people — fostering <span className='font-bold text-primary'>teamwork, well-being</span> and professional development through a culture of <span className='font-bold text-primary'>collaboration</span> and <span className='font-bold text-primary'>continuous learning</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section (Tabbed) */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="md:order-1"
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`px-6 py-3 rounded-full text-md font-semibold transition-all duration-300 ${
                    activeTab === 'mission'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-transparent text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Mission Statement
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                    activeTab === 'vision'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-transparent text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Vision Statement
                </button>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{aboutContent[activeTab].heading}</h3>
                  <p className="text-lg text-purple-600 font-semibold mb-6">{aboutContent[activeTab].subtitle}</p>
                  <p className="text-gray-700 leading-relaxed">{aboutContent[activeTab].text}</p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
            <motion.div
              className="md:order-2"
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=2835&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mission & Vision"
                className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="max-w-3xl mx-auto mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide our work and define our identity.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-8 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-purple-600 text-5xl mb-4 mx-auto w-12 h-12 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="lg:order-2"
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
              <p className="text-lg text-gray-600 mb-8">
                At EasyVolts, we combine creativity, expertise, and innovation to deliver technology solutions that make a real impact on your business.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-white rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="text-purple-600 text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="lg:order-1"
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=2835&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Why choose us"
                className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}