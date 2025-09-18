import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ServicesSlider = ({ cards }) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (prevRef.current && nextRef.current) {
        prevRef.current.classList.remove('swiper-button-disabled')
        nextRef.current.classList.remove('swiper-button-disabled')
      }
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container mx-auto relative bg-transparent">
      <button
        ref={prevRef}
        className="absolute hidden md:flex left-[-4rem] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg items-center cursor-pointer justify-center hover:bg-indigo-500 hover:text-white transition"
      >
        <FaChevronLeft />
      </button>
      <button
        ref={nextRef}
        className="absolute hidden md:flex right-[-4rem] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg items-center cursor-pointer justify-center hover:bg-indigo-500 hover:text-white transition"
      >
        <FaChevronRight />
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
 
        className="mySwiper !bg-transparent !overflow-visible relative 
        [&_.swiper-pagination]:!bottom-[-55px] 
        [&_.swiper-pagination-bullet]:!bg-indigo-400 
        [&_.swiper-pagination-bullet]:!w-3 
        [&_.swiper-pagination-bullet]:!h-3 
        [&_.swiper-pagination-bullet-active]:!bg-indigo-600"
      >
        {cards.map((c, idx) => (
          <SwiperSlide key={idx}>
            <motion.article
              className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center cursor-pointer"
              whileHover={{ scale: 1.06, rotate: 1 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <motion.div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-purple-700 to-indigo-800 text-white shadow-lg"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                {c.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {c.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {c.desc}
              </p>
              <Link
                to="get-started"
                className="mt-8 inline-block px-6 py-3 rounded-full border border-gray-300 text-gray-900 font-medium relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-indigo-500 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Get a Quote
                </span>
              </Link>
            </motion.article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ServicesSlider
