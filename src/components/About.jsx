import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Data for each tab
const aboutContent = [
  {
    id: 'aboutUs',
    title: 'About Us',
    heading: 'Innovating for a Digital Tomorrow',
    subtitle: 'We Are A Creative Agency.',
    text: `At EasyVolts, we are dedicated to transforming ideas into innovative technology solutions. As a leader in web application development, software engineering, mobile app solutions, and cybersecurity, we empower businesses to thrive in the digital era. With a team of passionate experts and a commitment to excellence, we deliver scalable and secure solutions tailored to meet the unique needs of our clients.`,
    image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?fit=crop&w=1200&h=800&q=80', // Professional image
    stats: [ // Example stats, can be progress bars or simple numbers
      { label: 'Web Design', value: 94 },
      { label: 'App Development', value: 91 },
      { label: 'Cyber Security', value: 97 },
    ]
  },
  {
    id: 'ourMission',
    title: 'Our Mission',
    heading: 'Empowering Success Through Technology',
    subtitle: 'Driving innovation and delivering unparalleled value.',
    text: `Our mission is to empower businesses with transformative technology solutions that enhance efficiency, security, and growth. We strive to be the leading partner in digital transformation, providing innovative, reliable, and user-centric software and services. We are committed to fostering a culture of continuous learning and excellence, ensuring our team remains at the forefront of technological advancements. By understanding our clients' challenges and aspirations, we deliver strategic solutions that create lasting impact and sustainable competitive advantage.`,
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?fit=crop&w=1200&h=800&q=80', // Another professional image
    // You can add different types of content here, like bullet points or a video link
    values: [
      "Innovation: Constantly seeking new and better ways to solve problems.",
      "Integrity: Operating with transparency, honesty, and strong ethical principles.",
      "Excellence: Delivering high-quality solutions that exceed expectations.",
      "Collaboration: Working closely with clients to achieve shared goals."
    ]
  },
  {
    id: 'whyUs',
    title: 'Why Us?',
    heading: 'Your Trusted Partner in Digital Evolution',
    subtitle: 'Experience the EasyVolts difference.',
    text: `Choosing EasyVolts means partnering with a team that combines deep technical expertise with a genuine commitment to your success. We pride ourselves on our agile development methodologies, ensuring flexibility and rapid deployment without compromising quality. Our holistic approach means we consider every aspect of your project, from initial concept to long-term maintenance and support. With a proven track record of successful projects and delighted clients, we offer a seamless, collaborative experience that turns complex challenges into elegant solutions. Let us be the catalyst for your next digital breakthrough.`,
    image: 'https://easyvolts.ng/img/5.jpg', // Yet another professional image
    features: [
      "10+ Years of Industry Experience",
      "Dedicated Expert Team",
      "24/7 Premium Support",
      "Cutting-Edge Technology Stack",
      "Client-Centric Approach",
      "Proven Track Record"
    ]
  }
];

// Framer Motion variants for section title/text
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 10,
      staggerChildren: 0.1,
    },
  },
};

// Framer Motion variants for tab content animation
const contentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
      delay: 0.2, // Delay content animation slightly after tab selection
    },
  },
  exit: { opacity: 0, x: 50, transition: { duration: 0.2 } },
};

// Component for the progress bar
const ProgressBar = ({ label, value }) => (
  <motion.div 
    className="mb-4"
    initial={{ opacity: 0, width: "0%" }}
    animate={{ opacity: 1, width: `${value}%` }}
    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
  >
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <span className="text-sm font-medium text-gray-700">{value}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className="bg-purple-600 h-2 rounded-full" 
        style={{ width: `${value}%` }} // Set initial width for the bar
      ></div>
    </div>
  </motion.div>
);

export default function About() {
  const [activeTab, setActiveTab] = useState(aboutContent[0].id); // Set initial active tab

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50 relative w-full overflow-hidden overflow-x-hidden">
      {/* Background blobs for visual interest */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4"
            variants={textVariants}
          >
            Discover EasyVolts
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600"
            variants={textVariants}
          >
            We are a team of innovators dedicated to crafting exceptional digital experiences and robust technology solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Tabs Navigation and Content */}
          <div className="lg:order-1 order-2">
            {/* Tabs Navigation */}
            <div className="flex space-x-2 md:space-x-14 mb-8 bg-white p-2 rounded-full shadow-lg">
              {aboutContent.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`md:px-8 px-6 py-1 md:py-3 cursor-pointer rounded-full text-md font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-transparent text-gray-700 hover:bg-gray-100 hover:text-purple-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.title}
                </motion.button>
              ))}
            </div>

            {/* Tab Content Area */}
            <motion.div 
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 min-h-[400px] flex flex-col justify-between"
              key={activeTab} // Key changes to re-trigger animation on tab change
              initial="hidden"
              animate="visible"
              exit="exit" // For exit animations, you'd typically wrap this in <AnimatePresence>
              variants={contentVariants}
            >
              {aboutContent.map((tab) => activeTab === tab.id && (
                <div key={tab.id}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{tab.heading}</h3>
                  <p className="text-md text-purple-600 font-semibold mb-6">{tab.subtitle}</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-8">{tab.text}</p>
                  
                  {/* Dynamic content based on tab */}
                  {tab.stats && (
                    <div>
                      {tab.stats.map((stat, idx) => (
                        <ProgressBar key={idx} label={stat.label} value={stat.value} />
                      ))}
                    </div>
                  )}
                  {tab.values && (
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {tab.values.map((value, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="h-5 w-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          {value}
                        </li>
                      ))}
                    </ul>
                  )}
                  {tab.features && (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                      {tab.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Image with Parallax Effect */}
          <motion.div 
            className="lg:order-2 order-1 relative overflow-hidden rounded-3xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
          >
            {aboutContent.map((tab) => activeTab === tab.id && (
              <motion.img
                key={tab.id}
                src={tab.image}
                alt={tab.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            ))}
            {/* Optional: Add a subtle overlay to the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}