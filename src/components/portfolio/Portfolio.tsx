'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { projects } from './projects.data';

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vmg-visible'); }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.vmg-reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section
      id="portfolio"
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
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=DM+Sans:wght@300;400&display=swap');
        .vmg-reveal { opacity:0; transform:translateY(40px); transition:all 0.8s cubic-bezier(0.16,1,0.3,1); }
        .vmg-reveal.vmg-visible { opacity:1; transform:translateY(0); }
        .proj-featured {
          position:relative; padding:36px 40px;
          border:1px solid rgba(255,255,255,0.06); border-radius:8px;
          background:rgba(255,255,255,0.02);
          transition:border-color 0.4s,background 0.4s;
          text-decoration:none; display:block; overflow:hidden;
        }
        .proj-featured::before {
          content:''; position:absolute; inset:0;
          background:radial-gradient(circle at var(--cx,50%) var(--cy,50%), var(--acc,transparent), transparent 60%);
          opacity:0; transition:opacity 0.4s; pointer-events:none;
        }
        .proj-featured:hover { border-color:rgba(255,255,255,0.12); background:rgba(255,255,255,0.03); }
        .proj-featured:hover::before { opacity:1; }
        .proj-small {
          position:relative; padding:28px 32px;
          border:1px solid rgba(255,255,255,0.05); border-radius:8px;
          background:rgba(255,255,255,0.015);
          transition:all 0.4s; text-decoration:none; display:block;
        }
        .proj-small:hover { border-color:rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); transform:translateY(-2px); }
        .proj-tag {
          font-size:10px; letter-spacing:0.1em; text-transform:uppercase;
          padding:3px 9px; border:1px solid rgba(255,255,255,0.07);
          color:rgba(176,190,220,0.35); border-radius:2px; display:inline-block;
          transition:all 0.3s;
        }
        .proj-featured:hover .proj-tag, .proj-small:hover .proj-tag {
          border-color:rgba(255,255,255,0.12); color:rgba(176,190,220,0.6);
        }
        .proj-arrow {
          opacity:0; transform:translateX(-6px); transition:all 0.3s;
          color:rgba(176,190,220,0.3);
        }
        .proj-featured:hover .proj-arrow, .proj-small:hover .proj-arrow {
          opacity:1; transform:translateX(0);
        }
      `}</style>

      <div style={{
        position:'absolute', top:'20%', right:'-5%', width:500, height:500,
        background:'radial-gradient(ellipse,rgba(99,102,241,0.05) 0%,transparent 70%)',
        pointerEvents:'none',
      }}/>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 40px' }}>

        {/* Header */}
        <div className="vmg-reveal" style={{ marginBottom:72 }}>
          <div style={{ fontSize:11, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(0,210,150,0.5)', marginBottom:16 }}>
            Proyectos
          </div>
          <h2 style={{
            fontFamily:"'Space Grotesk',sans-serif",
            fontSize:'clamp(36px,5vw,60px)', fontWeight:700,
            color:'#f0f4ff', lineHeight:1.1,
          }}>
            Trabajo real,<br/>
            <span style={{ color:'#00d296' }}>resultados reales</span>.
          </h2>
        </div>

        {/* Featured grid — 2 columnas primero, luego full */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:16, marginBottom:16 }}>
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              href={p.link || (['martins','calamuchita'].includes(p.slug) ? `/proyectos/${p.slug}` : '#')}
              target={p.link ? '_blank' : undefined}
              rel={p.link ? 'noopener noreferrer' : undefined}
              className="proj-featured vmg-reveal"
              style={{
                '--acc': p.accent + '12',
                transitionDelay: `${i * 0.1}s`,
              } as React.CSSProperties}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--cx', `${((e.clientX-r.left)/r.width)*100}%`);
                e.currentTarget.style.setProperty('--cy', `${((e.clientY-r.top)/r.height)*100}%`);
              }}
            >
              {/* Accent line */}
              <div style={{ width:28, height:2, background:p.accent, marginBottom:24, borderRadius:1 }}/>

              {/* Category */}
              <div style={{ fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase', color:p.accent, opacity:0.7, marginBottom:10 }}>
                {p.category}
              </div>

              {/* Number decorativo */}
              <div style={{
                position:'absolute', top:20, right:28,
                fontFamily:"'Space Grotesk',sans-serif", fontSize:52, fontWeight:700,
                color:'rgba(255,255,255,0.03)', lineHeight:1, pointerEvents:'none',
              }}>
                {String(i+1).padStart(2,'0')}
              </div>

              <h3 style={{
                fontFamily:"'Space Grotesk',sans-serif", fontSize:22, fontWeight:700,
                color:'#f0f4ff', marginBottom:12, lineHeight:1.2,
              }}>
                {p.title}
              </h3>
              <p style={{
                fontSize:13, color:'rgba(176,190,220,0.5)', lineHeight:1.75,
                fontWeight:300, marginBottom:20,
              }}>
                {p.description}
              </p>

              <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:20 }}>
                {p.tech.map(t => <span key={t} className="proj-tag">{t}</span>)}
              </div>

              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <span style={{ fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:p.accent, opacity:0.7 }}>
                  Ver proyecto
                </span>
                <svg className="proj-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Rest — más pequeños */}
        {rest.length > 0 && (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:16 }}>
            {rest.map((p, i) => (
              <a
                key={p.slug}
                href={p.link || '#'}
                target="_blank" rel="noopener noreferrer"
                className="proj-small vmg-reveal"
                style={{ transitionDelay:`${(featured.length + i)*0.08}s` }}
              >
                <div style={{ width:20, height:2, background:p.accent, marginBottom:16, borderRadius:1 }}/>
                <div style={{ fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase', color:p.accent, opacity:0.6, marginBottom:8 }}>
                  {p.category}
                </div>
                <h3 style={{
                  fontFamily:"'Space Grotesk',sans-serif", fontSize:17, fontWeight:700,
                  color:'#f0f4ff', marginBottom:10, lineHeight:1.2,
                }}>
                  {p.title}
                </h3>
                <p style={{ fontSize:12, color:'rgba(176,190,220,0.4)', lineHeight:1.7, fontWeight:300, marginBottom:16 }}>
                  {p.description}
                </p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:16 }}>
                  {p.tech.map(t => <span key={t} className="proj-tag">{t}</span>)}
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                  <span style={{ fontSize:10, letterSpacing:'0.1em', textTransform:'uppercase', color:p.accent, opacity:0.6 }}>
                    Ver proyecto
                  </span>
                  <svg className="proj-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="vmg-reveal" style={{ marginTop:64, textAlign:'center', transitionDelay:'0.4s' }}>
          <p style={{ fontSize:13, color:'rgba(176,190,220,0.35)', letterSpacing:'0.08em', marginBottom:20 }}>
            ¿Tenés un proyecto en mente?
          </p>
          <a
            href="https://wa.me/5491145311047?text=Hola!%20Quiero%20consultar%20sobre%20un%20proyecto"
            target="_blank" rel="noopener noreferrer"
            style={{
              fontSize:12, letterSpacing:'0.14em', textTransform:'uppercase',
              padding:'12px 28px', border:'1px solid rgba(0,210,150,0.3)',
              color:'rgba(0,210,150,0.7)', textDecoration:'none', borderRadius:3,
              display:'inline-block', transition:'all 0.3s',
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
    </section>
  );
}