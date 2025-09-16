import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FiZap, FiClipboard, FiCode, FiCheckCircle } from 'react-icons/fi';
import { useEffect, useRef } from 'react';

const processSteps = [
  {
    icon: <FiZap size={30} />,
    title: 'Ideas',
    description: 'Innovation starts with a spark! At EasyVolts, we transform visionary concepts into actionable plans. Our creative brainstorming sessions, market research, and client collaboration ensure that every idea is bold, practical, and tailored to industry needs.',
    progress: 100
  },
  {
    icon: <FiClipboard size={30} />,
    title: 'Planning',
    description: 'Success is built on a solid foundation. Our expert team maps out the strategy, milestones, and technical architecture to bring ideas to life. We follow Agile principles, ensuring flexibility, efficiency, and seamless execution while keeping our clients in the loop at every step.',
    progress: 75
  },
  {
    icon: <FiCode size={30} />,
    title: 'Development',
    description: 'Where ideas take shape! Leveraging cutting-edge technologies, frameworks, and best practices, our developers craft scalable and high-performance solutions. From software applications to complex systems, we prioritize clean code, security, and user experience.',
    progress: 50
  },
  {
    icon: <FiCheckCircle size={30} />,
    title: 'Testing & Deployment',
    description: 'Quality is non-negotiable. Our rigorous manual and automated testing ensures flawless performance, security, and functionality. Every product undergoes multiple layers of testing before deployment, guaranteeing reliability and a seamless user experience.',
    progress: 25
  }
];

// Framer Motion variants for text elements
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

// Framer Motion variants for process cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: 0.1
    },
  },
  hover: {
    y: -10,
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3 }
  }
};

const iconVariants = {
  hover: {
    rotate: [0, 10, -10, 0],
    scale: 1.1,
    transition: { duration: 0.5, repeat: Infinity, repeatType: 'reverse' }
  }
};


// Main Component
export default function OurProcess() {
  const ProgressBar = ({ progress }) => {
    const barControls = useAnimation();
    const barRef = useRef(null);
    const inView = useInView(barRef, { once: true, amount: 0.5 });

    useEffect(() => {
      if (inView) {
        barControls.start({
          width: `${progress}%`,
          transition: { duration: 1.5, ease: "easeInOut" }
        });
      }
    }, [inView, barControls, progress]);

    return (
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mb-4">
        <motion.div
          ref={barRef}
          className="h-full bg-purple-500 rounded-full"
          initial={{ width: '0%' }}
          animate={barControls}
        />
      </div>
    );
  };


  return (
    <section id="process" className="py-24 bg-gray-100 relative">
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 10% 20%, #a78bfa, transparent 50%), radial-gradient(circle at 90% 80%, #34d399, transparent 50%)',
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            Our Process
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            We follow a streamlined, client-centric approach to bring your ideas to life, from initial concept to successful deployment.
          </motion.p>
        </div>

        {/* --- Desktop Layout (Horizontal Timeline) --- */}
        <div className="hidden lg:block">
          <div className="relative flex justify-center items-center h-48 mb-8">
            <div className="absolute w-full max-w-6xl h-0.5 bg-gray-300 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
            
            <div className="absolute flex justify-between w-full max-w-6xl top-1/2 -translate-y-1/2">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center group relative z-20"
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={iconVariants}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-indigo-400 flex items-center justify-center text-indigo-600 shadow-md group-hover:border-purple-600 group-hover:text-purple-700 transition-all duration-300">
                    {step.icon}
                  </div>
                  {index < processSteps.length - 1 && (
                    <span className="absolute w-48 h-px border-t border-dashed border-gray-400 left-full top-1/2 transform -translate-y-1/2 translate-x-4">
                      <svg className="absolute top-1/2 -translate-y-1/2 -right-1 h-3 w-3 text-gray-400 transform rotate-45" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6 10L10 6L14 10H6Z" transform="rotate(90 10 10)"/>
                      </svg>
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-102 transition-transform duration-300 group"
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                transition={{ delay: index * 0.2 }}
              >
                <ProgressBar progress={step.progress} />
                <div className="text-4xl font-extrabold text-gray-200 mb-4 text-left group-hover:text-indigo-400 transition-colors">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Mobile Layout (Vertical Timeline) --- */}
        <div className="lg:hidden">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              transition={{ delay: index * 0.2 }}
            >
              {/* Vertical chain line and dot */}
              <div className="absolute top-0 left-6 -translate-x-1/2 h-full w-px bg-gray-300"></div>
              <div className="absolute top-0 left-6 -translate-x-1/2 -mt-1 w-3 h-3 rounded-full bg-gray-400"></div>
              
              {/* Icon */}
              <motion.div
                className="absolute top-0 left-6 -translate-x-1/2 -mt-9 w-12 h-12 rounded-full border-2 border-indigo-400 flex items-center justify-center text-indigo-600 shadow-md bg-white z-10"
                whileHover="hover"
                variants={iconVariants}
              >
                {step.icon}
              </motion.div>
              
              {/* Content Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 ml-16">
                <ProgressBar progress={step.progress} />
                <div className="text-4xl font-extrabold text-gray-200 mb-2">0{index + 1}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}