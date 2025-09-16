import React,{useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trusted from './components/Trusted'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import OurProcess from './components/OurProcess'
import Loader from './components/Loader'

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // You can replace this with a real loading event, e.g., fetching data.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); 


    return () => clearTimeout(timer);
  }, []);



  return (
    <>
      {loading ? <Loader/> : <div className="font-sans bg-light text-dark antialiased">
      <Navbar />
      <main className="pt-16">
        <Hero />
          <section className="bg-white">
          <Services />
        </section>
        <section className="bg-light">
          <Trusted />
        </section>
        <section className="bg-light">
          <Team />
        </section>
        <section className="bg-light">
          <OurProcess/>
        </section>
        <section className="bg-white">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>}
    </>
  )
}
