'use client';

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: '#0a1020',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '52px 0 32px',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        .f-link { color: rgba(176,190,220,0.35); text-decoration: none; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; transition: color 0.3s; }
        .f-link:hover { color: #00d296; }
        .f-social { color: rgba(176,190,220,0.3); text-decoration: none; font-size: 12px; letter-spacing: 0.08em; transition: color 0.3s; display: flex; align-items: center; gap: 6px; }
        .f-social:hover { color: #f0f4ff; }
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700,
              color: '#f0f4ff', letterSpacing: '0.02em', marginBottom: 12,
            }}>
              VMG<span style={{ color: '#00d296' }}>.</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(176,190,220,0.35)', lineHeight: 1.7, maxWidth: 260 }}>
              Soluciones digitales profesionales — desarrollo web, e-commerce y automatizaciones con IA.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 20 }}>
              <a href="https://www.instagram.com/vmg.setup.ai" target="_blank" rel="noopener noreferrer" className="f-social">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @vmg.setup.ai
              </a>
              <Link href="https://www.linkedin.com/in/victoria-mercedes-garay/" target="_blank" rel="noopener noreferrer" className="f-social">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 20 }}>
              Navegación
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { href: '#servicios', label: 'Servicios' },
                { href: '#portfolio', label: 'Portfolio' },
                { href: '#sobre-mi', label: 'Nosotros' },
                { href: '#contacto', label: 'Contacto' },
              ].map(l => (
                <a key={l.href} href={l.href} className="f-link">{l.label}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 20 }}>
              Contacto
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:vmg.setup.ai@gmail.com" className="f-link" style={{ textTransform: 'none', letterSpacing: 0 }}>
                vmg.setup.ai@gmail.com
              </a>
              <a href="https://wa.me/541145311047" target="_blank" rel="noopener noreferrer" className="f-link" style={{ textTransform: 'none', letterSpacing: 0 }}>
                +54 11 4531-1047
              </a>
              <span style={{ fontSize: 12, color: 'rgba(176,190,220,0.25)' }}>
                Villa General Belgrano, Córdoba
              </span>
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', marginBottom: 24 }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontSize: 11, color: 'rgba(176,190,220,0.2)', letterSpacing: '0.06em' }}>
            © {year} VMG Setup AI — Todos los derechos reservados.
          </p>
          <Link
            href="https://mi-portfolio-victoria-garay.vercel.app/"
            target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 11, color: 'rgba(176,190,220,0.2)', textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#00d296')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(176,190,220,0.2)')}
          >
            Portfolio de Victoria Garay →
          </Link>
        </div>
      </div>
    </footer>
  );
}