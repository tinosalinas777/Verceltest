import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandsCarousel from './components/BrandsCarousel';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandsCarousel />
        <Services />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
