import React from "react"
import { motion } from "framer-motion"

export default function About() {
  const features = [
    { title: "Scalability", desc: "Designs that grow with your users and data." },
    { title: "Security", desc: "Built-in security practices across the stack." },
    { title: "UX First", desc: "User-focused interfaces that improve conversion." },
    { title: "Support", desc: "Post-launch support and monitoring options available." },
  ]

  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Left Content */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-3">Why EasyVolts</h3>
        <p className="text-gray-600 mb-6">
          We build secure and scalable solutions — from enterprise apps to
          localized mobile experiences. Our approach focuses on results,
          security, and scalable architecture.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="p-4 bg-white rounded-md shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold">{f.title}</h4>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/about-illustration.jpg"
          alt="about"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </motion.div>
    </div>
  )
}
