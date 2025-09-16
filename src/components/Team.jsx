import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import jack from '../assets/jack.jpg'
import me from '../assets/me.jpg'
import alex from '../assets/alex.webp'

// Add more data to each team member object
const members = [
  { 
    name: 'David Jack', 
    role: 'Java Developer', 
    img: jack, 
    bio: 'A visionary leader with over 15 years of experience in full-stack development and cloud architecture. He drives our technical innovation.',
    social: {
      linkedin: 'https://linkedin.com/in/davidjack',
      twitter: 'https://twitter.com/davidjack',
      github: 'https://github.com/davidjack'
    }
  },
  { 
    name: 'Daniel Udeh', 
    role: 'Frontend Developer', 
    img: me, 
    bio: 'An expert in frontend frameworks and user experience design. Her code is as beautiful as her interfaces are intuitive.',
    social: {
      linkedin: 'https://linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe',
      github: 'https://github.com/janedoe'
    }
  },
  { 
    name: 'Alex Smith', 
    role: 'Security Lead', 
    img: alex, 
    bio: 'Our cybersecurity guru, specializing in threat analysis and secure system architecture. He keeps our products and data safe.',
    social: {
      linkedin: 'https://linkedin.com/in/alexsmith',
      twitter: 'https://twitter.com/alexsmith',
      github: 'https://github.com/alexsmith'
    }
  }
];

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
};

const Card = ({ member, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 10, stiffness: 100, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // New transforms for the 3D tilt effect
  const rotateX = useTransform(springY, [-100, 100], [5, -5]);
  const rotateY = useTransform(springX, [-100, 100], [-5, 5]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="bg-white rounded-3xl shadow-2xl p-8 text-center border border-gray-100 transform transition-transform duration-300 relative group"
      // Apply the new 3D transforms here
      style={{ rotateX, rotateY }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={cardVariants}
      transition={{ delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-purple-400 ring-offset-4 ring-offset-white transition-all duration-300 group-hover:ring-green-400">
        <img src={member.img} alt={member.name} className="w-full h-full object-cover hover:grayscale-0 transition-all duration-500" />
      </div>
      <h4 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h4>
      <p className="text-md text-purple-600 font-semibold mb-4">{member.role}</p>
      <p className="text-gray-500 leading-relaxed text-sm mb-6">{member.bio}</p>
      
      <div className="flex justify-center space-x-4">
        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
          <FaLinkedinIn size={20} />
        </a>
        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">
          <FaTwitter size={20} />
        </a>
        <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition-colors duration-300">
          <FaGithub size={20} />
        </a>
      </div>
    </motion.div>
  );
};

// SVG curve component
const WavyBackground = () => (
  <svg
    className="absolute inset-0 z-0 opacity-80"
    preserveAspectRatio="none"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gradient-wave" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#a78bfa" }} />
        <stop offset="50%" style={{ stopColor: "#34d399" }} />
        <stop offset="100%" style={{ stopColor: "#f472b6" }} />
      </linearGradient>
    </defs>
    <path
      fill="url(#gradient-wave)"
      fillOpacity="0.5"
      d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,234.7C1120,245,1280,235,1360,229.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
    ></path>
  </svg>
);

export default function Team() {
  return (
    <div id="team" className="py-24 bg-gray-50 overflow-hidden relative">
      <WavyBackground />

      <div className="container mx-auto px-6 text-center relative z-10 mb-16">
        <motion.div
          className="uppercase tracking-widest text-sm text-gray-500 mb-2 font-semibold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          Meet the Brains Behind the Vision
        </motion.div>
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          Our Dedicated Team
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          We are a group of passionate and skilled professionals committed to delivering excellence.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {members.map((m, i) => (
          <Card key={i} member={m} index={i} />
        ))}
      </div>
    </div>
  );
}