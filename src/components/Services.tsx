'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const SERVICES = [
  {
    num: '01',
    title: 'Páginas web',
    subtitle: 'Presencia profesional online',
    description: 'Sitio moderno que muestre quién sos, qué ofrecés y cómo contactarte. Optimizado para SEO, mobile-first y conversión.',
    accent: '#00d296',
    features: ['Diseño a medida', 'SEO optimizado', 'Mobile-first', 'Alta performance'],
    href: null,
  },
  {
    num: '02',
    title: 'Tienda online',
    subtitle: 'E-commerce que vende 24/7',
    description: 'Vendé tus productos con carrito, pagos seguros y gestión de envíos. Aumentá tus ventas sin esfuerzo extra.',
    accent: '#6366f1',
    features: ['Catálogo de productos', 'Pagos integrados', 'Panel de admin', 'Historial de pedidos'],
    href: null,
  },
  {
    num: '03',
    title: 'Apps y Automatizaciones',
    subtitle: 'Tecnología que trabaja por vos',
    description: 'Sistemas de turnos, presupuestos por WhatsApp, paneles de administración, flujos con IA. Lo que necesites para ahorrar tiempo.',
    accent: '#f59e0b',
    features: ['Flujos con n8n', 'Integración IA', 'WhatsApp API', 'Dashboards custom'],
    href: '/proyectos/martins',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vmg-visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.vmg-reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="servicios"
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
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=DM+Sans:wght@300;400&display=swap');
        .vmg-reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.16,1,0.3,1); }
        .vmg-reveal.vmg-visible { opacity: 1; transform: translateY(0); }
        .svc-card {
          position: relative; padding: 40px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px; background: rgba(255,255,255,0.02);
          transition: border-color 0.4s, background 0.4s;
          overflow: hidden;
          cursor: default;
        }
        .svc-card[href] { cursor: pointer; }
        .svc-card::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at var(--cx,50%) var(--cy,50%), var(--acc,transparent), transparent 65%);
          opacity: 0; transition: opacity 0.4s; pointer-events: none;
        }
        .svc-card:hover { border-color: rgba(255,255,255,0.12); background: rgba(255,255,255,0.03); }
        .svc-card:hover::before { opacity: 1; }
        .svc-feat {
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(176,190,220,0.4); padding: 4px 10px;
          border: 1px solid rgba(255,255,255,0.07); border-radius: 2px;
          display: inline-block; transition: all 0.3s;
        }
        .svc-card:hover .svc-feat { color: rgba(176,190,220,0.6); border-color: rgba(255,255,255,0.12); }
        .svc-cta {
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 10px 0; border-radius: 3px; text-decoration: none;
          display: inline-flex; align-items: center; gap: 6px;
          transition: all 0.3s; margin-top: 24px;
        }
      `}</style>

      <div style={{
        position: 'absolute', top: '30%', left: '-5%', width: 500, height: 500,
        background: 'radial-gradient(ellipse, rgba(0,210,150,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        <div className="vmg-reveal" style={{ marginBottom: 72 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(0,210,150,0.5)', marginBottom: 16 }}>
            Servicios
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(36px,5vw,60px)', fontWeight: 700,
            color: '#f0f4ff', lineHeight: 1.1,
          }}>
            Lo que construimos<span style={{ color: '#00d296' }}>.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {SERVICES.map((s, i) => {
            const commonProps = {
              className: "svc-card vmg-reveal",
              style: {
                '--acc': s.accent + '10',
                transitionDelay: `${i * 0.12}s`,
                textDecoration: 'none',
                display: 'block',
              } as React.CSSProperties,
              onMouseMove: (e: React.MouseEvent<HTMLElement>) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--cx', `${((e.clientX - r.left) / r.width) * 100}%`);
                e.currentTarget.style.setProperty('--cy', `${((e.clientY - r.top) / r.height) * 100}%`);
              }
            };

            const CardInner = (
              <>
                <div style={{
                  position: 'absolute', top: 24, right: 28,
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 56, fontWeight: 700,
                  color: 'rgba(255,255,255,0.03)', lineHeight: 1,
                }}>
                  {s.num}
                </div>

                <div style={{ width: 32, height: 2, background: s.accent, marginBottom: 28, borderRadius: 1 }} />

                <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: s.accent, marginBottom: 10, opacity: 0.7 }}>
                  {s.subtitle}
                </div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 700,
                  color: '#f0f4ff', marginBottom: 16, lineHeight: 1.2,
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(176,190,220,0.55)', lineHeight: 1.75, fontWeight: 300, marginBottom: 24 }}>
                  {s.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {s.features.map(f => (
                    <span key={f} className="svc-feat">{f}</span>
                  ))}
                </div>

                {s.href && (
                  <span className="svc-cta" style={{ color: s.accent, borderBottom: `1px solid ${s.accent}40` }}>
                    Ver ejemplo real
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </span>
                )}
              </>
            );

            return s.href ? (
              <Link key={s.num} href={s.href} {...commonProps}>
                {CardInner}
              </Link>
            ) : (
              <div key={s.num} {...commonProps}>
                {CardInner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}