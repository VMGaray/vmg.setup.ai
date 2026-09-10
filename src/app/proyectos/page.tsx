'use client';

import Link from "next/link";
import { projects } from "@/components/portfolio/projects.data";

// Slugs con página de caso de estudio propia en /proyectos/[slug]
const CASE_STUDIES = ["martins", "calamuchita"];

const PROJECTS = projects.map((p) => {
  const hasCaseStudy = CASE_STUDIES.includes(p.slug);
  return {
    slug: p.slug,
    category: p.category,
    title: p.title,
    description: p.description,
    accent: p.accent,
    href: hasCaseStudy ? `/proyectos/${p.slug}` : p.link,
    external: !hasCaseStudy,
  };
});

export default function ProyectosPage() {
  return (
    <main style={{
      background: '#0d1425',
      minHeight: '100vh',
      fontFamily: "'DM Sans', sans-serif",
      paddingTop: 64,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=DM+Sans:wght@300;400&display=swap');
        .proy-card {
          display:block; text-decoration:none; padding:36px 40px;
          border:1px solid rgba(255,255,255,0.06); border-radius:8px;
          background:rgba(255,255,255,0.02); position:relative; overflow:hidden;
          transition:border-color 0.4s, background 0.4s, transform 0.3s;
        }
        .proy-card::before {
          content:''; position:absolute; inset:0;
          background:radial-gradient(circle at var(--cx,50%) var(--cy,50%), var(--acc,transparent), transparent 60%);
          opacity:0; transition:opacity 0.4s; pointer-events:none;
        }
        .proy-card:hover { border-color:rgba(255,255,255,0.12); background:rgba(255,255,255,0.03); transform:translateY(-2px); }
        .proy-card:hover::before { opacity:1; }
        .proy-cta {
          display:inline-flex; align-items:center; gap:8px;
          font-size:11px; letter-spacing:0.1em; text-transform:uppercase; font-weight:500;
          padding:10px 18px; border-radius:3px;
          border:1px solid var(--acc-solid,#00d296); color:var(--acc-solid,#00d296);
          transition:background 0.3s, color 0.3s;
        }
        .proy-card:hover .proy-cta { background:var(--acc-solid,#00d296); color:#0d1425; }
        .proy-cta svg { transition:transform 0.3s; }
        .proy-card:hover .proy-cta svg { transform:translate(2px,-2px); }
      `}</style>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'80px 40px 120px' }}>

        {/* Header */}
        <div style={{ marginBottom:72 }}>
          <Link href="/" style={{
            fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase',
            color:'rgba(0,210,150,0.5)', textDecoration:'none',
            display:'inline-flex', alignItems:'center', gap:6, marginBottom:32,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Volver al inicio
          </Link>
          <div style={{ fontSize:11, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(0,210,150,0.5)', marginBottom:16 }}>
            Portfolio
          </div>
          <h1 style={{
            fontFamily:"'Space Grotesk',sans-serif",
            fontSize:'clamp(36px,5vw,64px)', fontWeight:700,
            color:'#f0f4ff', lineHeight:1.08,
          }}>
            Proyectos<span style={{ color:'#00d296' }}>.</span>
          </h1>
        </div>

        {/* Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:16 }}>
          {PROJECTS.map((p, i) => {
            const isExternal = p.external;
            const href = p.href ?? '#';
            return (
              <Link
                key={p.slug}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="proy-card"
                style={{ '--acc': p.accent + '12', '--acc-solid': p.accent } as React.CSSProperties}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--cx', `${((e.clientX-r.left)/r.width)*100}%`);
                  e.currentTarget.style.setProperty('--cy', `${((e.clientY-r.top)/r.height)*100}%`);
                }}
              >
                <div style={{ width:24, height:2, background:p.accent, marginBottom:24, borderRadius:1 }}/>
                <div style={{ fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase', color:p.accent, opacity:0.7, marginBottom:10 }}>
                  {p.category}
                </div>
                <div style={{
                  position:'absolute', top:20, right:24,
                  fontFamily:"'Space Grotesk',sans-serif", fontSize:48, fontWeight:700,
                  color:'rgba(255,255,255,0.03)', lineHeight:1, pointerEvents:'none',
                }}>
                  {String(i+1).padStart(2,'0')}
                </div>
                <h2 style={{
                  fontFamily:"'Space Grotesk',sans-serif", fontSize:22, fontWeight:700,
                  color:'#f0f4ff', marginBottom:12, lineHeight:1.2,
                }}>
                  {p.title}
                </h2>
                <p style={{ fontSize:13, color:'rgba(176,190,220,0.5)', lineHeight:1.75, fontWeight:300, marginBottom:24 }}>
                  {p.description}
                </p>
                <span className="proy-cta">
                  {isExternal ? 'Ver proyecto' : 'Ver caso de estudio'}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}