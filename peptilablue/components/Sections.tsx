'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// ─── TICKER ──────────────────────────────────────────────────────────────────
export function Ticker() {
  const items = [
    'PHARMACEUTICAL GRADE', 'HIGH PURITY ≥99%', 'LAB TESTED',
    'RESEARCH GRADE COMPOUNDS', 'PHARMACEUTICAL PRECISION', 'SCIENCE · QUALITY · RESULTS',
  ];
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden" style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid rgba(30,58,138,0.3)',
      borderBottom: '1px solid rgba(30,58,138,0.3)',
      padding: '0.75rem 0',
    }}>
      <div style={{ display: 'inline-flex', animation: 'ticker 32s linear infinite', whiteSpace: 'nowrap' }}>
        {doubled.map((item, i) => (
          <span key={i} className="text-[0.52rem] tracking-[0.4rem] font-montserrat px-10" style={{ color: '#38BDF8' }}>
            {item}
            <span style={{ color: 'var(--muted)', margin: '0 1.5rem' }}>·</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export function About() {
  const badges = [
    'SÍNTESIS PEPTÍDICA DE FASE SÓLIDA (SPPS)',
    'ANÁLISIS HPLC — PUREZA GARANTIZADA ≥99%',
    'ESPECTROMETRÍA DE MASAS CERTIFICADA',
    'ALMACENAMIENTO ÓPTIMO Y EMBALAJE ESPECIALIZADO',
  ];
  const stats = [
    { num: '99.7%', label: 'PUREZA PROMEDIO' },
    { num: '+50',   label: 'COMPUESTOS'      },
    { num: 'COA',   label: 'CADA LOTE'       },
  ];
  return (
    <section id="about" className="py-32 px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
      style={{ background: 'var(--bg-secondary)' }}>

      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <p className="text-[0.52rem] tracking-[0.5rem] mb-4 font-montserrat" style={{ color: '#38BDF8' }}>QUIÉNES SOMOS</p>
        <h2 className="font-playfair font-normal mb-6" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--white)' }}>
          Donde la <em className="italic" style={{ color: '#38BDF8' }}>Ciencia</em><br />Encuentra la Excelencia
        </h2>
        <p className="text-[0.68rem] tracking-[0.05rem] leading-8 mb-10 font-montserrat font-light" style={{ color: 'var(--steel)', maxWidth: 540 }}>
          PEPTILAB representa la convergencia de rigor científico y estándares farmacéuticos de élite. Cada producto es sintetizado bajo protocolos de máxima pureza, respaldado por análisis exhaustivos de control de calidad.
        </p>
        <div className="space-y-3">
          {badges.map(b => (
            <div key={b} className="flex items-center gap-4 p-4"
              style={{ border: '1px solid rgba(30,58,138,0.25)', background: 'rgba(30,58,138,0.06)' }}>
              <div className="w-0.5 h-8 flex-shrink-0" style={{ background: '#1E3A8A' }} />
              <span className="text-[0.58rem] tracking-[0.15rem] font-montserrat" style={{ color: 'var(--steel)' }}>{b}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
        <div className="relative p-10" style={{ background: 'var(--bg-card)', border: '1px solid rgba(30,58,138,0.35)' }}>
          <div className="absolute -top-px left-8 w-16 h-0.5" style={{ background: '#1E3A8A' }} />
          <svg viewBox="0 0 400 180" className="w-full" style={{ opacity: 0.7 }} xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="20" fontFamily="'Space Mono',monospace" fontSize="7" fill="rgba(56,189,248,0.7)" letterSpacing="2">PEPTIDE CHAIN ANALYSIS</text>
            <text x="10" y="38" fontFamily="'Space Mono',monospace" fontSize="6" fill="rgba(148,163,184,0.3)">H2N-Ser-Tyr-Ser-Met-Glu-His-Phe-Arg-Trp-Gly-COOH</text>
            <line x1="10" y1="50" x2="390" y2="50" stroke="rgba(30,58,138,0.2)" strokeWidth="0.5" />
            {[['H-Ser','105'],['Tyr','181'],['Ser','105'],['Met','149']].map(([aa,mw],i) => (
              <g key={aa}>
                <rect x={10+i*88} y="62" width="70" height="38" rx="1" fill="none"
                  stroke={i%2===0?'rgba(30,58,138,0.6)':'rgba(56,189,248,0.4)'} strokeWidth="0.5"/>
                <text x={10+i*88+35} y="77" textAnchor="middle" fontFamily="'Space Mono',monospace" fontSize="6"
                  fill={i%2===0?'rgba(30,58,138,0.9)':'rgba(56,189,248,0.8)'}>{aa}</text>
                <text x={10+i*88+35} y="90" textAnchor="middle" fontFamily="'Space Mono',monospace" fontSize="5"
                  fill="rgba(148,163,184,0.4)">MW:{mw}</text>
                {i<3&&<line x1={80+i*88} y1="81" x2={98+i*88} y2="81" stroke="rgba(30,58,138,0.4)" strokeWidth="0.5"/>}
              </g>
            ))}
            <text x="358" y="85" fontFamily="'Space Mono',monospace" fontSize="10" fill="rgba(30,58,138,0.4)">···</text>
            <text x="10" y="130" fontFamily="'Space Mono',monospace" fontSize="5.5" fill="rgba(148,163,184,0.2)">PURITY: 99.7% · COA AVAILABLE · VERIFIED</text>
            <rect x="310" y="115" width="75" height="20" rx="1" fill="rgba(30,58,138,0.15)" stroke="rgba(56,189,248,0.3)" strokeWidth="0.5"/>
            <text x="347" y="128" textAnchor="middle" fontFamily="'Space Mono',monospace" fontSize="5.5" fill="rgba(56,189,248,0.8)">VERIFIED ✓</text>
          </svg>
          <div className="flex gap-8 mt-6 pt-6" style={{ borderTop: '1px solid rgba(30,58,138,0.2)' }}>
            {stats.map(s => (
              <div key={s.num} className="text-center">
                <div className="font-playfair font-normal text-[2.2rem]" style={{ color: '#38BDF8' }}>{s.num}</div>
                <div className="text-[0.42rem] tracking-[0.25rem] mt-1 font-montserrat" style={{ color: 'var(--steel)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── BENEFITS ────────────────────────────────────────────────────────────────
export function Benefits() {
  const items = [
    { num: '01', title: 'Pharmaceutical Grade', desc: 'Síntesis bajo estrictos protocolos de calidad farmacéutica. Materia prima de proveedores internacionales certificados.' },
    { num: '02', title: 'High Purity ≥99%',     desc: 'Verificada por HPLC de fase reversa y espectrometría de masas ESI-MS. Certificado de análisis disponible para cada lote.' },
    { num: '03', title: 'Lab Tested & Verified', desc: 'Análisis completo por laboratorios especializados. Cada partida incluye COA con resultados de HPLC, MS y pruebas de identidad.' },
    { num: '04', title: 'Embalaje Especializado', desc: 'Productos liofilizados en presentación estéril con embalaje de alta calidad para garantizar la integridad hasta el destino.' },
    { num: '05', title: 'Asesoría Especializada', desc: 'Equipo con formación en bioquímica y farmacología disponible para orientación técnica y consultas sobre nuestros productos.' },
    { num: '06', title: 'Entrega Discreta y Segura', desc: 'Envíos con embalaje neutro y tracking completo. Cobertura a nivel nacional en Venezuela con atención personalizada.' },
  ];
  return (
    <section id="benefits" className="py-32 px-6 md:px-16" style={{ background: 'var(--bg-card)' }}>
      <div className="mb-16">
        <p className="text-[0.52rem] tracking-[0.5rem] mb-4 font-montserrat" style={{ color: '#38BDF8' }}>NUESTROS ESTÁNDARES</p>
        <h2 className="font-playfair font-normal" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--white)' }}>
          La <em className="italic" style={{ color: '#38BDF8' }}>Diferencia</em><br />PEPTILAB
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(30,58,138,0.15)' }}>
        {items.map((item, i) => (
          <motion.div key={item.num} className="p-10"
            style={{ background: 'var(--bg-card)', border: '1px solid rgba(30,58,138,0.15)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i*0.08, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ background: 'var(--bg-card2)', borderColor: 'rgba(30,58,138,0.4)' }}
          >
            <div className="font-mono text-[0.48rem] tracking-[0.2rem] mb-5" style={{ color: '#38BDF8' }}>{item.num}</div>
            <h3 className="font-playfair font-normal text-[1.25rem] mb-3" style={{ color: 'var(--white)' }}>{item.title}</h3>
            <p className="text-[0.58rem] tracking-[0.05rem] leading-7 font-montserrat font-light" style={{ color: 'var(--steel)' }}>{item.desc}</p>
            <div className="w-8 h-px mt-6" style={{ background: '#1E3A8A' }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export function Testimonials() {
  const items = [
    { initials: 'DR', name: 'Dr. R. Montoya', role: 'INVESTIGADOR BIOQUÍMICO · CARACAS',        text: 'La calidad del BPC-157 es excepcional. El COA fue completamente transparente y los resultados fueron consistentes con lo esperado. Atención de primer nivel.' },
    { initials: 'AC', name: 'A. Castellanos',  role: 'ESPECIALISTA EN RENDIMIENTO · VALENCIA',   text: 'Excelente servicio y calidad sobresaliente. La Tirzepatida llegó perfectamente embalada y la asesoría del equipo fue invaluable durante todo el proceso.' },
    { initials: 'MP', name: 'M. Pérez',        role: 'PROFESIONAL DE LA SALUD · MARACAIBO',      text: 'PEPTILAB es la referencia en Venezuela. La consistencia entre lotes, el embalaje impecable y el nivel de documentación no tienen comparación en el mercado local.' },
  ];
  return (
    <section id="testimonials" className="py-32 px-6 md:px-16" style={{ background: 'var(--bg-primary)' }}>
      <p className="text-[0.52rem] tracking-[0.5rem] mb-4 font-montserrat" style={{ color: '#38BDF8' }}>TESTIMONIOS</p>
      <h2 className="font-playfair font-normal mb-16" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--white)' }}>
        Lo que Dicen Nuestros <em className="italic" style={{ color: '#38BDF8' }}>Clientes</em>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <motion.div key={t.name} className="relative p-10"
            style={{ background: 'var(--bg-card)', border: '1px solid rgba(30,58,138,0.25)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i*0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="absolute top-4 right-6 font-playfair text-[5rem] leading-none" style={{ color: 'rgba(30,58,138,0.15)' }}>"</span>
            <div className="text-[0.58rem] tracking-[0.2rem] mb-4" style={{ color: '#38BDF8' }}>★ ★ ★ ★ ★</div>
            <p className="font-playfair font-normal italic text-[1rem] leading-8 mb-8" style={{ color: 'var(--steel)' }}>{t.text}</p>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-[0.48rem] tracking-wider font-montserrat flex-shrink-0"
                style={{ background: 'rgba(30,58,138,0.2)', border: '1px solid rgba(30,58,138,0.5)', color: '#38BDF8' }}>
                {t.initials}
              </div>
              <div>
                <p className="text-[0.58rem] tracking-[0.12rem] font-montserrat font-medium" style={{ color: 'var(--white)' }}>{t.name}</p>
                <p className="text-[0.48rem] tracking-[0.08rem] mt-0.5 font-montserrat" style={{ color: 'var(--steel)' }}>{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = [
    { q: '¿Qué garantías de calidad ofrecen con cada producto?',   a: 'Cada producto viene acompañado de un Certificado de Análisis (COA) completo que incluye resultados de cromatografía HPLC, espectrometría de masas y análisis de pureza. Trabajamos únicamente con materia prima de proveedores certificados bajo estándares internacionales de calidad.' },
    { q: '¿Cómo se realiza el embalaje y envío?',                   a: 'Todos nuestros productos son enviados en embalaje especializado que garantiza su integridad durante el transporte. Realizamos envíos a todas las ciudades principales de Venezuela con seguimiento incluido.' },
    { q: '¿Cuáles son las formas de pago disponibles?',             a: 'Aceptamos transferencias bancarias nacionales, divisas (USD), criptomonedas (USDT/BTC) y pago móvil. Para montos mayores, contamos con facilidades de pago. Contáctanos por WhatsApp para coordinar la mejor opción.' },
    { q: '¿Tienen asesoría técnica sobre los productos?',           a: 'Sí. Nuestro equipo cuenta con formación especializada en bioquímica y farmacología. Ofrecemos orientación técnica completa sobre reconstitución, almacenamiento y uso correcto de cada producto.' },
    { q: '¿Qué es el Agua BAC y para qué se usa?',                 a: 'El Agua Bacteriostática (BAC) es agua estéril con alcohol bencílico al 0.9% utilizada para la reconstitución de péptidos liofilizados. Permite múltiples usos por vial manteniendo la esterilidad. Es el disolvente recomendado para la mayoría de nuestros productos en polvo.' },
    { q: '¿Realizan envíos fuera de Venezuela?',                    a: 'Actualmente operamos principalmente en Venezuela con envíos a todas las ciudades principales. Los envíos internacionales se evalúan caso por caso. Contáctanos para consultar disponibilidad en tu país.' },
  ];
  return (
    <section id="faq" className="py-32 px-6 md:px-16" style={{ background: 'var(--bg-secondary)' }}>
      <div className="text-center mb-16">
        <p className="text-[0.52rem] tracking-[0.5rem] mb-4 font-montserrat" style={{ color: '#38BDF8' }}>PREGUNTAS FRECUENTES</p>
        <h2 className="font-playfair font-normal" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--white)' }}>
          Todo lo que <em className="italic" style={{ color: '#38BDF8' }}>Necesitas</em> Saber
        </h2>
      </div>
      <div className="max-w-3xl mx-auto">
        {items.map((item, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(30,58,138,0.2)' }}>
            <button
              className="w-full flex justify-between items-center py-7 text-left font-montserrat text-[0.68rem] tracking-[0.1rem] transition-colors duration-300 cursor-pointer bg-transparent border-0"
              style={{ color: openIndex === i ? '#38BDF8' : 'var(--white)' }}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span>{item.q}</span>
              <span className="ml-4 flex-shrink-0 text-xl" style={{
                color: '#38BDF8',
                transform: openIndex === i ? 'rotate(45deg)' : 'none',
                display: 'inline-block',
                transition: 'transform 0.3s',
              }}>+</span>
            </button>
            {openIndex === i && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="pb-7 text-[0.63rem] tracking-[0.06rem] leading-8 font-montserrat font-light"
                style={{ color: 'var(--steel)' }}
              >
                {item.a}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
export function Contact() {
  const methods = [
    { icon: '✉', label: 'EMAIL GENERAL',   value: 'contacto@peptilabve.com', href: 'mailto:contacto@peptilabve.com' },
    { icon: '◈', label: 'VENTAS & PEDIDOS', value: 'ventas@peptilabve.com',   href: 'mailto:ventas@peptilabve.com'   },
    { icon: '⌁', label: 'WHATSAPP',         value: '+58 412-9987858',          href: 'https://wa.me/584129987858'    },
  ];
  return (
    <section id="contact" className="py-32 px-6 md:px-16 text-center" style={{ background: 'var(--bg-card)' }}>
      <div className="w-px h-20 mx-auto mb-12" style={{ background: 'linear-gradient(to bottom, transparent, #1E3A8A)' }} />
      <p className="text-[0.52rem] tracking-[0.5rem] mb-4 font-montserrat" style={{ color: '#38BDF8' }}>CONTACTO</p>
      <h2 className="font-playfair font-normal mb-6" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--white)' }}>
        Hablemos de <em className="italic" style={{ color: '#38BDF8' }}>Ciencia</em>
      </h2>
      <p className="text-[0.63rem] tracking-[0.1rem] leading-8 max-w-lg mx-auto mb-16 font-montserrat font-light" style={{ color: 'var(--steel)' }}>
        Nuestro equipo está disponible para responder consultas, procesar pedidos y brindarte atención personalizada.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-16">
        {methods.map(m => (
          <a key={m.label} href={m.href} target="_blank" rel="noopener noreferrer"
            className="block p-10 transition-all duration-300"
            style={{ border: '1px solid rgba(30,58,138,0.25)', background: 'rgba(30,58,138,0.05)', textDecoration: 'none' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#38BDF8';
              e.currentTarget.style.background = 'rgba(30,58,138,0.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(30,58,138,0.25)';
              e.currentTarget.style.background = 'rgba(30,58,138,0.05)';
            }}
          >
            <div className="text-2xl mb-4" style={{ color: '#38BDF8' }}>{m.icon}</div>
            <p className="text-[0.48rem] tracking-[0.4rem] mb-2 font-montserrat" style={{ color: '#38BDF8' }}>{m.label}</p>
            <p className="text-[0.62rem] tracking-[0.08rem] font-montserrat font-light" style={{ color: 'var(--steel)' }}>{m.value}</p>
          </a>
        ))}
      </div>
      <p className="text-[0.52rem] tracking-[0.4rem] mb-4 font-montserrat" style={{ color: 'var(--muted)' }}>SÍGUENOS EN INSTAGRAM</p>
      <a href="https://instagram.com/peptilabve" target="_blank" rel="noopener noreferrer"
        className="font-playfair font-normal italic text-[2rem] transition-opacity duration-300"
        style={{ color: '#38BDF8', textDecoration: 'none' }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        @peptilabve
      </a>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
export function Footer() {
  const links = ['NOSOTROS','CATÁLOGO','ESTÁNDARES','TESTIMONIOS','FAQ','CONTACTO'];
  const ids   = ['about','products','benefits','testimonials','faq','contact'];
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-6 md:px-16 py-16"
        style={{ borderTop: '1px solid rgba(30,58,138,0.3)', background: 'var(--bg-secondary)' }}>
        <div>
          <p className="font-montserrat font-light text-xl tracking-[0.4rem] mb-1" style={{ color: 'var(--white)' }}>PEPTILAB</p>
          <p className="text-[0.48rem] tracking-[0.35rem] font-montserrat" style={{ color: '#38BDF8' }}>SCIENCE · QUALITY · RESULTS</p>
          <p className="text-[0.48rem] tracking-[0.1rem] leading-8 mt-6 font-montserrat font-light max-w-[220px]" style={{ color: 'var(--muted)' }}>
            Productos de alta calidad farmacéutica. Consulte disponibilidad y condiciones con nuestro equipo.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-center">
          {links.map((link, i) => (
            <button key={link}
              onClick={() => document.getElementById(ids[i])?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[0.52rem] tracking-[0.28rem] font-montserrat transition-colors duration-300 bg-transparent border-0 cursor-pointer"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#38BDF8')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
              {link}
            </button>
          ))}
        </div>
        <div className="md:text-right">
          <div className="text-[0.48rem] tracking-[0.12rem] leading-8 font-montserrat" style={{ color: 'var(--muted)' }}>
            <p className="font-medium mb-2" style={{ color: 'var(--white)' }}>PEPTILAB.VE</p>
            <p>contacto@peptilabve.com</p>
            <p>ventas@peptilabve.com</p>
            <p className="mt-2">+58 412-9987858</p>
            <p>@peptilabve</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-5 gap-2"
        style={{ borderTop: '1px solid rgba(30,58,138,0.15)' }}>
        <p className="text-[0.48rem] tracking-[0.2rem] font-montserrat" style={{ color: 'var(--muted)' }}>
          © 2024 PEPTILAB.VE — TODOS LOS DERECHOS RESERVADOS
        </p>
        <p className="text-[0.42rem] tracking-[0.3rem] font-montserrat" style={{ color: 'rgba(71,85,105,0.5)' }}>
          FOR RESEARCH USE ONLY
        </p>
        <p className="text-[0.48rem] tracking-[0.2rem] font-montserrat" style={{ color: 'var(--muted)' }}>
          CARACAS, VENEZUELA
        </p>
      </div>
    </footer>
  );
}
