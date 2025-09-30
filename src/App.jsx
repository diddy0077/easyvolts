import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import GetStarted from './pages/GetStarted';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
  
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 4000); 

      return () => clearTimeout(timer);
    } else {
      
      setLoading(false);
    }
  }, [location.pathname]); 

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="font-sans bg-light text-dark antialiased">
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/get-started' element={<GetStarted />} />
            <Route path='/about-us' element={<AboutPage />} />
            </Routes>
            <ScrollToTop/>
          <Footer />
        </div>
      )}
    </>
  );
}