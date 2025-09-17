import React from 'react'
import Hero from '../components/Hero'
import Trusted from '../components/Trusted'
import Services from '../components/Services'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import OurProcess from '../components/OurProcess'
import About from '../components/About'

function HomePage() {
  return (
    <main className="pt-16">
        <Hero />
          <section className="bg-white">
          <Services />
        </section>
        <section className="bg-light">
          <Trusted />
        </section>
        <section className="bg-light">
          <About />
        </section>
        <section className="bg-light">
          <OurProcess/>
        </section>
        <section className="bg-white">
          <Contact />
        </section>
      </main>
  )
}

export default HomePage