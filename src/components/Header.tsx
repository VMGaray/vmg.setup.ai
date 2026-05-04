'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#portfolio', label: 'Proyectos' },
  { href: '#sobre-mi', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

function scrollTo(id: string) {
  document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');
        .vmg-nav-link {
          font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(176,190,220,0.5); text-decoration: none;
          transition: color 0.3s; padding: 4px 0; position: relative;
        }
        .vmg-nav-link::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 0; height: 1px; background: #00d296;
          transition: width 0.3s ease;
        }
        .vmg-nav-link:hover { color: #f0f4ff; }
        .vmg-nav-link:hover::after { width: 100%; }
        .vmg-hire {
          font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          padding: 8px 18px; border: 1px solid rgba(0,210,150,0.3);
          color: rgba(0,210,150,0.7); text-decoration: none; border-radius: 3px;
          transition: all 0.3s;
        }
        .vmg-hire:hover {
          background: rgba(0,210,150,0.08);
          border-color: rgba(0,210,150,0.6); color: #00d296;
        }
        .ham-line {
          display: block; width: 20px; height: 1px;
          background: rgba(176,190,220,0.6); transition: all 0.3s ease;
          transform-origin: center;
        }
      `}</style>

      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: 64,
        background: scrolled ? 'rgba(6,9,18,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.4s ease',
        fontFamily: "'DM Sans', sans-serif",
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 40px',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* Logo — solo texto, sin imagen */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 2 }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 22, fontWeight: 700,
              color: '#f0f4ff', letterSpacing: '0.02em',
            }}>
              VMG
            </span>
            <span style={{ color: '#00d296', fontSize: 22, fontWeight: 700 }}>.</span>
            <span style={{
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(0,210,150,0.5)', marginLeft: 6, fontWeight: 400,
              alignSelf: 'center',
            }}>
              Setup AI
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="vmg-desktop-nav">
            {NAV.map(n => (
              <a
                key={n.href}
                href={n.href}
                className="vmg-nav-link"
                onClick={e => { e.preventDefault(); scrollTo(n.href); }}
              >
                {n.label}
              </a>
            ))}
            <a
              href="https://wa.me/5491145311047?text=Hola!%20Quiero%20consultar%20por%20mis%20servicios"
              target="_blank" rel="noopener noreferrer"
              className="vmg-hire"
            >
              Hablemos
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="vmg-mobile-nav"
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 4 }}
          >
            <span className="ham-line" style={{ transform: open ? 'rotate(45deg) translate(4px,4px)' : 'none' }} />
            <span className="ham-line" style={{ opacity: open ? 0 : 1 }} />
            <span className="ham-line" style={{ transform: open ? 'rotate(-45deg) translate(4px,-4px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        <div style={{
          overflow: 'hidden', maxHeight: open ? 240 : 0,
          transition: 'max-height 0.4s ease',
          background: 'rgba(6,9,18,0.98)',
          borderBottom: open ? '1px solid rgba(255,255,255,0.05)' : 'none',
        }}>
          <div style={{ padding: '16px 40px 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
            {NAV.map(n => (
              <a
                key={n.href}
                href={n.href}
                className="vmg-nav-link"
                style={{ fontSize: 14 }}
                onClick={e => { e.preventDefault(); scrollTo(n.href); setOpen(false); }}
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) { .vmg-mobile-nav { display: none !important; } }
          @media (max-width: 767px) { .vmg-desktop-nav { display: none !important; } }
        `}</style>
      </header>
    </>
  );
}