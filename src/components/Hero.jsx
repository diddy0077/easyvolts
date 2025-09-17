import React from "react"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[url('https://easyvolts.ng/img/1.jpg')] bg-cover bg-center"
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-dark/85"></div>
      <div className="absolute inset-0 opacity-50"></div>

      <div className="relative z-10 container mx-auto text-center px-4 py-28">
        {/* Heading */}

          <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-light text-2xl md:text-4xl font-[300] uppercase tracking-widest leading-tight"
        >
          EasyVolts.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-light text-4xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Powering Innovation with{" "}
          <span className="text-primary">Secure Technology</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto text-light text-lg md:text-xl mb-10"
        >
          We build enterprise web & mobile apps, and protect them with
          top-tier cybersecurity practices.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex justify-center gap-4"
        >
          <Link
            to='get-started'
            className="px-6 py-3 rounded-full btn-primary font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
          >
            Get Started
          </Link>

          <motion.a
                href="#contact"
                className="inline-block px-6 py-3 rounded-full px-6 py-3 rounded-full border border-light/20 text-light hover:bg-light/10 transition font-medium relative overflow-hidden group"
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
        </motion.div>

        

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-light">
              <CountUp
                start={0}
                end={10}
                duration={4}
                enableScrollSpy
                scrollSpyOnce
              />+
            </div>
            <div className="text-sm text-light/70">Years Experience</div>
          </div>
          <div className="h-6 w-px bg-light/20"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-light">
              <CountUp
                start={0}
                end={50}
                duration={4}
                enableScrollSpy
                scrollSpyOnce
              />+
            </div>
            <div className="text-sm text-light/70">Projects Delivered</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
