'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCart } from './CartContext';

export default function Navbar() {
  const { cartCount, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    { id: 'about',        label: 'NOSOTROS'   },
    { id: 'products',     label: 'PRODUCTOS'  },
    { id: 'benefits',     label: 'ESTÁNDARES' },
    { id: 'faq',          label: 'FAQ'        },
    { id: 'contact',      label: 'CONTACTO'   },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 transition-all duration-500"
      style={{
        paddingTop: '0.6rem',
        paddingBottom: '0.6rem',
        background: scrolled
          ? 'rgba(5,13,26,0.97)'
          : 'linear-gradient(to bottom, rgba(5,13,26,0.96), transparent)',
        borderBottom: scrolled
          ? '1px solid rgba(30,58,138,0.35)'
          : '1px solid rgba(30,58,138,0.12)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Logo — SVG version on white pill for contrast */}
      <div
        className="cursor-pointer flex-shrink-0 flex items-center"
        onClick={() => scrollTo('hero')}
        style={{
          background: '#F5F7FA',
          borderRadius: '8px',
          padding: '6px 14px',
          boxShadow: '0 2px 12px rgba(30,58,138,0.25)',
        }}
      >
        <Image
          src="/logo.svg"
          alt="PEPTILAB"
          width={180}
          height={80}
          className="object-contain"
          style={{ height: '72px', width: 'auto' }}
          priority
        />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-10 items-center">
        {navLinks.map(link => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="text-[0.6rem] tracking-[0.25rem] transition-colors duration-300 font-montserrat bg-transparent border-0 cursor-pointer"
            style={{ color: 'var(--steel)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan-soft)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--steel)')}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Cart + Hamburger */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleCart}
          className="relative text-[0.55rem] tracking-[0.2rem] font-montserrat transition-all duration-300 cursor-pointer bg-transparent"
          style={{
            border: '1px solid rgba(30,58,138,0.6)',
            padding: '0.5rem 1.2rem',
            color: '#38BDF8',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#38BDF8';
            e.currentTarget.style.background = 'rgba(56,189,248,0.06)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(30,58,138,0.6)';
            e.currentTarget.style.background = 'transparent';
          }}
        >
          CARRITO
          {cartCount > 0 && (
            <span
              className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-[0.5rem] flex items-center justify-center font-bold"
              style={{ background: '#1E3A8A', color: '#F5F7FA' }}
            >
              {cartCount}
            </span>
          )}
        </button>

        <button
          className="md:hidden cursor-pointer bg-transparent border-0 p-2"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1 w-5">
            <span className="block h-px" style={{ background: '#38BDF8' }} />
            <span className="block h-px" style={{ background: '#38BDF8' }} />
            <span className="block h-px" style={{ background: '#38BDF8' }} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 py-6 flex flex-col items-center gap-5"
          style={{
            background: 'rgba(5,13,26,0.98)',
            borderBottom: '1px solid rgba(30,58,138,0.3)',
          }}
        >
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-[0.6rem] tracking-[0.3rem] font-montserrat bg-transparent border-0 cursor-pointer"
              style={{ color: 'var(--steel)' }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
