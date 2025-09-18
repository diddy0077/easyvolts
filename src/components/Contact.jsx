import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'; // Professional icons
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'; // Social media icons

const contactInfo = [
  { icon: <FiMail size={20} className="text-white" />, text: 'info@easyvolts.ng', link: 'info@easyvolts.ng', label: 'Email' },
  { icon: <FiPhone size={20} className="text-white" />, text: '(234) EASY-VOLTS', link: 'tel:+234easyvolts', label: 'Phone' },
  { icon: <FiMapPin size={20} className="text-white" />, text: 'Sky mall Ikeja Lagos', link: '#', label: 'Address' },
];

const socialLinks = [
  { icon: <FaLinkedin size={18} />, link: 'https://www.linkedin.com/company/104146204/admin/dashboard/', color: 'text-blue-400 hover:text-blue-200' },
  { icon: <FaTwitter size={18} />, link: 'https://twitter.com/yourcompany', color: 'text-sky-400 hover:text-sky-200' },
  { icon: <FaGithub size={18} />, link: 'https://github.com/yourcompany', color: 'text-gray-400 hover:text-gray-200' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://easyvolts-server.onrender.com/submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
      .then((res) => {
        if (!res.ok) {
        throw new Error('Error submitting form')
      }
      })
      .then((data) => {
        console.log(data)
        console.log('Form submitted successfully!')
      })
      .catch((error) => {
      console.log('Error submitting form', error)
    })
    setTimeout(() => setSent(true), 800);
  }

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 100% 100%, #a78bfa, transparent 50%), radial-gradient(circle at 0% 0%, #34d399, transparent 50%)',
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            variants={itemVariants}
          >
            Get In <span className='text-primary'>Touch</span>
          </motion.h2>
          <motion.p 
            className="mt-4 text-md font-medium text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            We'd love to hear from you! Whether you have a project idea, a question, or just want to say hello, our team is ready to help.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="glass bg-gradient-to-r from-gray-900/80 to-indigo-900/80 backdrop-blur-lg text-white rounded-3xl p-12 shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>
            <ul className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.li key={index} className="flex items-center gap-4" variants={itemVariants}>
                  <div className="p-2.5 bg-indigo-500 rounded-full">
                    {info.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-purple-300">{info.label}</span>
                    <a href={info.link} className="text-lg text-white hover:underline transition-colors">{info.text}</a>
                  </div>
                </motion.li>
              ))}
            </ul>
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className={`p-2.5 rounded-full bg-white/10 ${social.color} transition-colors`}>
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-12 shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            {!sent ? (
              <form onSubmit={handleSubmit} className="grid gap-6">
                <motion.h3 className="text-2xl font-bold text-gray-900 mb-2" variants={itemVariants}>
                  Send Us a Message
                </motion.h3>
                <motion.input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-600 transition duration-300"
                  variants={itemVariants}
                />
                <motion.input
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email Address"
                  className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-600 transition duration-300"
                  variants={itemVariants}
                />
                <motion.textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about the project"
                  className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-600 transition duration-300"
                  variants={itemVariants}
                ></motion.textarea>

                <motion.button 
                  type="submit" 
                  className="w-full px-8 py-4 rounded-xl bg-purple-600 text-white font-bold shadow-lg hover:bg-purple-700 transition-colors cursor-pointer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Send Message
                </motion.button>
              </form>
            ) : (
              <motion.div
                className="p-8 rounded-2xl bg-green-100 text-green-700 text-center shadow-md font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                ✅ Thanks! Your message has been received. We’ll reply soon.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}