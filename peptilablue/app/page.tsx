'use client';

import { CartProvider } from '../components/CartContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import CartPanel from '../components/CartPanel';
import { Ticker, About, Benefits, Testimonials, FAQ, Contact, Footer } from '../components/Sections';

export default function Home() {
  return (
    <CartProvider>
      <Navbar />
      <CartPanel />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Products />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </CartProvider>
  );
}
