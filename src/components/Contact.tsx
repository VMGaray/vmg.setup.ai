'use client';

import { useEffect, useRef } from 'react';

const CHANNELS = [
  {
    label: 'WhatsApp',
    sub: '+54 11 4531-1047 · Respuesta rápida',
    href: 'https://wa.me/5491145311047?text=Hola!%20Quiero%20contactarte%20desde%20tu%20web',
    accent: '#25d366',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    sub: '@vmg.setup.ai · Proyectos y novedades',
    href: 'https://www.instagram.com/vmg.setup.ai',
    accent: '#e1306c',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    sub: 'vmg.setup.ai@gmail.com · Formal y detallado',
    href: 'mailto:vmg.setup.ai@gmail.com?subject=Consulta%20desde%20tu%20web',
    accent: '#6366f1',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vmg-visible'); }),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.vmg-reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="contacto"
      ref={sectionRef}
      style={{
        background: '#111827',
        padding: '120px 0',
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .vmg-reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.16,1,0.3,1); }
        .vmg-reveal.vmg-visible { opacity: 1; transform: translateY(0); }
        .contact-row {
          display: flex; align-items: center; gap: 20px;
          padding: 22px 28px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px; background: rgba(255,255,255,0.02);
          text-decoration: none; transition: all 0.3s;
          position: relative; overflow: hidden;
        }
        .contact-row::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0;
          width: 2px; background: var(--acc,#00d296);
          transform: scaleY(0); transition: transform 0.3s ease; transform-origin: bottom;
        }
        .contact-row:hover { border-color: rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); transform: translateX(4px); }
        .contact-row:hover::before { transform: scaleY(1); }
      `}</style>

      <div style={{
        position: 'absolute', top: '40%', left: '50%', width: 600, height: 500,
        background: 'radial-gradient(ellipse, rgba(0,210,150,0.06) 0%, transparent 70%)',
        transform: 'translate(-50%,-50%)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 40px' }}>
        <div className="vmg-reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(0,210,150,0.5)', marginBottom: 16 }}>
            Contacto
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(44px,7vw,80px)', fontWeight: 700,
            color: '#f0f4ff', lineHeight: 1,
          }}>
            ¿Arrancamos<span style={{ color: '#00d296' }}>?</span>
          </h2>
          <p style={{
            fontSize: 15, color: 'rgba(176,190,220,0.5)', lineHeight: 1.8,
            fontWeight: 300, marginTop: 20, maxWidth: 480, margin: '20px auto 0',
          }}>
            Contanos tu proyecto y te respondemos rápido. Sin vueltas.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {CHANNELS.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="contact-row vmg-reveal"
              style={{ '--acc': c.accent, transitionDelay: `${0.1 + i * 0.1}s` } as React.CSSProperties}
            >
              <span style={{ color: c.accent, flexShrink: 0 }}>{c.icon}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: '#f0f4ff', marginBottom: 2 }}>{c.label}</div>
                <div style={{ fontSize: 12, color: 'rgba(176,190,220,0.4)' }}>{c.sub}</div>
              </div>
              <svg style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.15)', flexShrink: 0 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}