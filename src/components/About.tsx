'use client';

import { useEffect, useRef } from 'react';

const PILLARS = [
  { icon: '⚡', title: 'Desarrollo Fullstack', desc: 'Frontend moderno y backend escalable' },
  { icon: '🤖', title: 'Automatizaciones IA', desc: 'Integraciones y optimización de procesos' },
  { icon: '🌎', title: 'Trabajo 100% remoto', desc: 'Alcance nacional e internacional' },
  { icon: '📈', title: 'Enfoque en resultados', desc: 'Soluciones pensadas para crecer' },
  { icon: '🧠', title: 'Tecnología moderna', desc: 'Stack actualizado y buenas prácticas' },
  { icon: '🤝', title: 'Comunicación clara', desc: 'Compromiso en cada etapa del proyecto' },
];

export default function About() {
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
      id="sobre-mi"
      ref={sectionRef}
      style={{
        background: '#0d1425',
        padding: '120px 0',
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .vmg-reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.16,1,0.3,1); }
        .vmg-reveal.vmg-visible { opacity: 1; transform: translateY(0); }
        .pillar-card {
          padding: 20px 24px;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 6px; background: rgba(255,255,255,0.02);
          display: flex; align-items: flex-start; gap: 14px;
          transition: all 0.3s;
        }
        .pillar-card:hover { border-color: rgba(0,210,150,0.15); background: rgba(0,210,150,0.03); }
      `}</style>

      <div style={{
        position: 'absolute', top: '50%', right: '-5%', width: 500, height: 500,
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.05) 0%, transparent 70%)',
        transform: 'translateY(-50%)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

          {/* Left */}
          <div>
            <div className="vmg-reveal">
              <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(0,210,150,0.5)', marginBottom: 16 }}>
                Nosotros
              </div>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(32px,4vw,52px)', fontWeight: 700,
                color: '#f0f4ff', lineHeight: 1.1, marginBottom: 32,
              }}>
                Somos VMG<br />
                <span style={{ color: '#00d296' }}>Setup AI</span>
              </h2>
            </div>

            <div className="vmg-reveal" style={{ transitionDelay: '0.1s' }}>
              <p style={{ fontSize: 15, color: 'rgba(176,190,220,0.6)', lineHeight: 1.8, fontWeight: 300, marginBottom: 20 }}>
                Somos un equipo especializado en{' '}
                <span style={{ color: '#f0f4ff' }}>desarrollo fullstack, soluciones frontend y automatizaciones inteligentes</span>.
                Diseñamos y construimos herramientas digitales pensadas para optimizar procesos,
                mejorar la presencia online y potenciar negocios.
              </p>
              <p style={{ fontSize: 15, color: 'rgba(176,190,220,0.6)', lineHeight: 1.8, fontWeight: 300, marginBottom: 20 }}>
                Trabajamos de manera <span style={{ color: '#f0f4ff' }}>100% remota</span>, brindando soluciones a
                emprendedores, comercios y empresas de Argentina y el exterior.
              </p>
              <p style={{ fontSize: 15, color: 'rgba(176,190,220,0.6)', lineHeight: 1.8, fontWeight: 300 }}>
                Cada proyecto es único. Analizamos las necesidades específicas de cada cliente para
                desarrollar soluciones a medida, escalables y orientadas a resultados.
              </p>
            </div>

            {/* CTA */}
            <div className="vmg-reveal" style={{ transitionDelay: '0.2s', marginTop: 40 }}>
              <a
                href="https://wa.me/5491145311047?text=Hola!%20Quiero%20consultar%20sobre%20sus%20servicios"
                target="_blank" rel="noopener noreferrer"
                style={{
                  fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase',
                  padding: '12px 28px', border: '1px solid rgba(0,210,150,0.3)',
                  color: 'rgba(0,210,150,0.7)', textDecoration: 'none', borderRadius: 3,
                  display: 'inline-block', transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,210,150,0.08)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,210,150,0.6)';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#00d296';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,210,150,0.3)';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(0,210,150,0.7)';
                }}
              >
                Hablemos por WhatsApp →
              </a>
            </div>
          </div>

          {/* Right — pillars grid */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {PILLARS.map((p, i) => (
                <div
                  key={p.title}
                  className="pillar-card vmg-reveal"
                  style={{ transitionDelay: `${0.1 + i * 0.07}s` }}
                >
                  <span style={{ fontSize: 20, flexShrink: 0, lineHeight: 1.4 }}>{p.icon}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: '#f0f4ff', marginBottom: 3 }}>{p.title}</div>
                    <div style={{ fontSize: 12, color: 'rgba(176,190,220,0.4)', lineHeight: 1.5 }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Location badge */}
            <div className="vmg-reveal" style={{
              transitionDelay: '0.5s', marginTop: 16,
              padding: '16px 20px',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: 6, background: 'rgba(255,255,255,0.02)',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <span style={{ fontSize: 18 }}>📍</span>
              <div>
                <div style={{ fontSize: 13, color: '#f0f4ff', fontWeight: 500 }}>Villa General Belgrano, Córdoba</div>
                <div style={{ fontSize: 12, color: 'rgba(176,190,220,0.4)', marginTop: 2 }}>Argentina · Trabajamos con clientes de todo el mundo</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`@media(max-width:768px){#sobre-mi .vmg-grid{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </section>
  );
}