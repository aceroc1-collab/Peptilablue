'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Medical grid overlay */}
      <div className="absolute inset-0 medical-grid" style={{ opacity: 0.6 }} />

      {/* Radial glow */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse at 55% 45%, rgba(30,58,138,0.18) 0%, transparent 55%),
          radial-gradient(ellipse at 20% 70%, rgba(56,189,248,0.06) 0%, transparent 45%)
        `,
      }} />

      {/* Geometric lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.06 }} xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#1E3A8A" strokeWidth="0.5" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#1E3A8A" strokeWidth="0.5" />
        <circle cx="50%" cy="50%" r="180" stroke="#1E3A8A" fill="none" strokeWidth="0.5" />
        <circle cx="50%" cy="50%" r="320" stroke="#1E3A8A" fill="none" strokeWidth="0.5" />
        <circle cx="50%" cy="50%" r="480" stroke="#38BDF8" fill="none" strokeWidth="0.3" strokeDasharray="4 8" />
      </svg>

      {/* Rotating molecule — right side */}
      <motion.div
        className="absolute right-12 top-1/2 hidden lg:block"
        style={{ translateY: '-50%', width: 260, height: 260, opacity: 0.18 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="140" cy="80"  r="12" fill="none" stroke="#1E3A8A" strokeWidth="1.5" />
          <circle cx="200" cy="120" r="10" fill="none" stroke="#38BDF8" strokeWidth="1" />
          <circle cx="200" cy="180" r="12" fill="none" stroke="#1E3A8A" strokeWidth="1.5" />
          <circle cx="140" cy="220" r="10" fill="none" stroke="#38BDF8" strokeWidth="1" />
          <circle cx="80"  cy="180" r="12" fill="none" stroke="#1E3A8A" strokeWidth="1.5" />
          <circle cx="80"  cy="120" r="10" fill="none" stroke="#38BDF8" strokeWidth="1" />
          <circle cx="140" cy="150" r="18" fill="none" stroke="#1E3A8A" strokeWidth="0.8" />
          <line x1="140" y1="80"  x2="200" y2="120" stroke="#1E3A8A" strokeWidth="0.8" />
          <line x1="200" y1="120" x2="200" y2="180" stroke="#1E3A8A" strokeWidth="0.8" />
          <line x1="200" y1="180" x2="140" y2="220" stroke="#1E3A8A" strokeWidth="0.8" />
          <line x1="140" y1="220" x2="80"  y2="180" stroke="#1E3A8A" strokeWidth="0.8" />
          <line x1="80"  y1="180" x2="80"  y2="120" stroke="#1E3A8A" strokeWidth="0.8" />
          <line x1="80"  y1="120" x2="140" y2="80"  stroke="#1E3A8A" strokeWidth="0.8" />
          <line x1="140" y1="80"  x2="140" y2="150" stroke="#38BDF8" strokeWidth="0.4" />
          <line x1="200" y1="120" x2="140" y2="150" stroke="#38BDF8" strokeWidth="0.4" />
          <line x1="200" y1="180" x2="140" y2="150" stroke="#38BDF8" strokeWidth="0.4" />
          <line x1="140" y1="220" x2="140" y2="150" stroke="#38BDF8" strokeWidth="0.4" />
          <line x1="80"  y1="180" x2="140" y2="150" stroke="#38BDF8" strokeWidth="0.4" />
          <line x1="80"  y1="120" x2="140" y2="150" stroke="#38BDF8" strokeWidth="0.4" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-8">

        {/* Eyebrow pill */}
        <motion.div
          className="inline-flex items-center gap-3 mb-10"
          style={{
            border: '1px solid rgba(30,58,138,0.5)',
            background: 'rgba(30,58,138,0.12)',
            padding: '0.5rem 1.5rem',
            borderRadius: '2px',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#38BDF8' }} />
          <span className="font-montserrat text-[0.55rem] tracking-[0.4rem]" style={{ color: '#38BDF8' }}>
            PEPTILAB.VE
          </span>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#38BDF8' }} />
        </motion.div>

        <motion.h1
          className="font-playfair font-normal leading-none mb-6"
          style={{ fontSize: 'clamp(3.2rem,7.5vw,6.5rem)', color: 'var(--white)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Precision{' '}
          <em className="italic" style={{ color: '#38BDF8' }}>Peptide</em>
          <br />Science
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="h-px w-16" style={{ background: 'rgba(30,58,138,0.6)' }} />
          <div className="w-1 h-1 rounded-full" style={{ background: '#1E3A8A' }} />
          <div className="h-px w-16" style={{ background: 'rgba(30,58,138,0.6)' }} />
        </motion.div>

        <motion.p
          className="font-montserrat font-light text-[0.7rem] tracking-[0.25rem] max-w-sm mx-auto mb-12 leading-8"
          style={{ color: 'var(--steel)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          PHARMACEUTICAL-GRADE PRECISION · RESEARCH-GRADE PERFORMANCE
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => scrollTo('products')}
            className="font-montserrat font-medium text-[0.6rem] tracking-[0.3rem] px-10 py-4 transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: '#1E3A8A', color: '#F5F7FA', border: 'none', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#2B4FAA')}
            onMouseLeave={e => (e.currentTarget.style.background = '#1E3A8A')}
          >
            EXPLORAR CATÁLOGO
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="font-montserrat font-light text-[0.6rem] tracking-[0.3rem] px-10 py-4 transition-all duration-300"
            style={{
              background: 'transparent',
              border: '1px solid rgba(56,189,248,0.3)',
              color: '#38BDF8',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#38BDF8';
              e.currentTarget.style.background = 'rgba(56,189,248,0.06)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            NUESTRA CIENCIA
          </button>
        </motion.div>

        {/* Subtle disclaimer */}
        <motion.p
          className="font-montserrat mt-10"
          style={{ fontSize: '0.42rem', letterSpacing: '0.25rem', color: 'rgba(100,116,139,0.5)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          FOR RESEARCH USE ONLY
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, transparent, #1E3A8A)' }} />
      </motion.div>
    </section>
  );
}
