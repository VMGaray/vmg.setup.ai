'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;
    const ctx = canvas.getContext('2d')!;
    let W = 0, H = 0, animId = 0;
    
    // Agregamos propiedades para simular el "flujo de datos"
    type P = { 
      x: number; 
      y: number; 
      vx: number; 
      vy: number; 
      size: number; 
      opacity: number; 
      pulse: number; 
      z: number;
      char: string; // Algunos puntos mostrarán "bits" de datos
    };
    let pts: P[] = [];

    const chars = "01";

    function resize() {
      if (!canvas || !hero) return;
      W = canvas.width = hero.offsetWidth;
      H = canvas.height = hero.offsetHeight;
      // Ajustamos densidad de partículas
      pts = Array.from({ length: Math.floor(W * H / 8000) }, () => ({
        x: Math.random() * W, 
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.2, 
        // Movimiento ascendente constante para simular flujo
        vy: -0.2 - Math.random() * 0.5, 
        size: Math.random() * 2 + 0.8, 
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2, 
        z: Math.random() * 2 + 0.5,
        char: chars.charAt(Math.floor(Math.random() * chars.length))
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x, my = mouseRef.current.y;
      
      pts.forEach((p, i) => {
        p.pulse += 0.02; 
        p.x += p.vx; 
        p.y += p.vy;

        // Reposicionar al llegar arriba o salir de los bordes
        if (p.y < -20) p.y = H + 20;
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;

        // Efecto Parallax con el mouse
        const px = p.x + (mx - W / 2) * 0.01 * p.z;
        const py = p.y + (my - H / 2) * 0.01 * p.z;
        const op = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

        // Dibujar partícula (Punto de luz)
        ctx.beginPath(); 
        ctx.arc(px, py, p.size * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 210, 150, ${op})`; 
        ctx.fill();

        // Ocasionalmente dibujar un 'bit' de código cerca del punto
        if (i % 10 === 0 && op > 0.3) {
          ctx.font = `${8 * p.z}px monospace`;
          ctx.fillStyle = `rgba(0, 210, 150, ${op * 0.3})`;
          ctx.fillText(p.char, px + 10, py);
        }

        // Dibujar conexiones (Neural Network)
        for (let j = i + 1; j < pts.length; j++) {
          const p2 = pts[j];
          const p2x = p2.x + (mx - W / 2) * 0.01 * p2.z;
          const p2y = p2.y + (my - H / 2) * 0.01 * p2.z;
          
          const d = Math.hypot(px - p2x, py - p2y);
          if (d < 110) { // Radio de conexión
            ctx.beginPath(); 
            ctx.moveTo(px, py); 
            ctx.lineTo(p2x, p2y);
            // La línea es más fuerte cuanto más cerca estén
            ctx.strokeStyle = `rgba(0, 210, 150, ${(1 - d / 110) * 0.15})`; 
            ctx.lineWidth = 0.6 * p.z; 
            ctx.stroke();
          }
        }
      });
      animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    animId = requestAnimationFrame(draw);
    return () => { 
      cancelAnimationFrame(animId); 
      window.removeEventListener('resize', resize); 
    };
  }, []);

  return (
    <section
      ref={heroRef}
      onMouseMove={e => {
        const r = heroRef.current?.getBoundingClientRect();
        if (r) {
          mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
        }
      }}
      style={{
        position: 'relative', minHeight: '100vh', background: '#0d1425',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', fontFamily: "'DM Sans', sans-serif",
        paddingTop: 64,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=DM+Sans:wght@300;400&display=swap');
        .vmg-btn-p {
          position:relative;overflow:hidden;font-size:13px;letter-spacing:0.12em;
          text-transform:uppercase;padding:14px 32px;background:#00d296;color:#0d1425;
          font-weight:600;text-decoration:none;border-radius:3px;transition:color 0.3s;display:inline-block;
        }
        .vmg-btn-p::after{content:'';position:absolute;inset:0;background:#0d1425;
          transform:translateX(-101%);transition:transform 0.35s cubic-bezier(0.76,0,0.24,1);z-index:0;}
        .vmg-btn-p:hover::after{transform:translateX(0);}
        .vmg-btn-p:hover{color:#00d296;}
        .vmg-btn-p span{position:relative;z-index:1;}
        .vmg-btn-g {
          font-size:13px;letter-spacing:0.12em;text-transform:uppercase;
          padding:14px 32px;border:1px solid rgba(0,210,150,0.3);
          color:rgba(0,210,150,0.6);text-decoration:none;border-radius:3px;
          transition:all 0.3s;display:inline-block;
        }
        .vmg-btn-g:hover{border-color:rgba(0,210,150,0.7);color:#00d296;background:rgba(0,210,150,0.05);}
        @keyframes dot-pulse{0%,100%{opacity:1;box-shadow:0 0 8px rgba(0,210,150,0.8)}50%{opacity:0.4;box-shadow:none}}
        @keyframes scroll-line{0%{transform:translateY(-100%)}50%{transform:translateY(0)}100%{transform:translateY(100%)}}
      `}</style>

      {/* Canvas con el efecto de flujo de datos */}
      <canvas ref={canvasRef} style={{position:'absolute',inset:0,pointerEvents:'none'}} />

      {/* Grid de fondo sutil */}
      <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.02,pointerEvents:'none'}}>
        <defs><pattern id="vg" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M60 0L0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
        </pattern></defs>
        <rect width="100%" height="100%" fill="url(#vg)"/>
      </svg>

      {/* Luces de ambiente (Glow) */}
      <div style={{position:'absolute',top:'40%',left:'50%',width:700,height:500,
        background:'radial-gradient(ellipse,rgba(0,210,150,0.08) 0%,transparent 70%)',
        transform:'translate(-50%,-50%)',pointerEvents:'none'}}/>

      <div style={{
        maxWidth:860, padding:'60px 40px 80px',
        textAlign:'center', position:'relative', zIndex:10,
        display:'flex', flexDirection:'column', alignItems:'center',
      }}>
        {/* Badge */}
        <div style={{
          display:'inline-flex', alignItems:'center', gap:8,
          padding:'6px 16px', border:'1px solid rgba(0,210,150,0.2)',
          borderRadius:20, background:'rgba(0,210,150,0.05)',
          marginBottom:28,
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(10px)',
          transition:'all 0.7s ease 0.2s',
        }}>
          <div style={{width:6,height:6,borderRadius:'50%',background:'#00d296',animation:'dot-pulse 2s infinite'}}/>
          <span style={{fontSize:11,letterSpacing:'0.15em',textTransform:'uppercase',color:'rgba(0,210,150,0.7)'}}>
            Disponibles para nuevos proyectos
          </span>
        </div>

        {/* Tagline */}
        <div style={{
          fontSize:11, letterSpacing:'0.3em', textTransform:'uppercase',
          color:'rgba(0,210,150,0.4)', marginBottom:20,
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(10px)',
          transition:'all 0.7s ease 0.3s',
        }}>
          Desarrollo web · Automatización · IA
        </div>

        <h1 style={{
          fontFamily:"'Space Grotesk', sans-serif",
          fontSize:'clamp(38px,6.5vw,78px)', fontWeight:700,
          lineHeight:1.08, color:'#f0f4ff', marginBottom:24,
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(24px)',
          transition:'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s',
        }}>
          Tu negocio, <span style={{color:'#00d296'}}>potenciado</span> con tecnología
        </h1>

        <p style={{
          fontSize:'clamp(15px,1.7vw,17px)', color:'rgba(176,190,220,0.6)',
          lineHeight:1.8, fontWeight:300, maxWidth:560, marginBottom:40,
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(16px)',
          transition:'all 0.8s ease 0.55s',
        }}>
          Páginas web que convierten, tiendas online que venden y automatizaciones que te ahorran tiempo.
        </p>

        {/* Acciones */}
        <div style={{
          display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap',
          marginBottom:72,
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(12px)',
          transition:'all 0.8s ease 0.7s',
        }}>
          <a href="https://wa.me/5491145311047" target="_blank" rel="noopener noreferrer" className="vmg-btn-p">
            <span>Quiero mi sitio web →</span>
          </a>
          <a href="#servicios" className="vmg-btn-g">
            Ver servicios
          </a>
        </div>

        {/* Estadísticas */}
        <div style={{
          display:'flex', gap:48, justifyContent:'center', flexWrap:'wrap',
          paddingTop:40, borderTop:'1px solid rgba(255,255,255,0.05)',
          width:'100%',
          opacity: visible ? 1 : 0,
          transition:'opacity 1s ease 1s',
        }}>
          {[
            {n:'10+', label:'proyectos entregados'},
            {n:'100%', label:'trabajo remoto'},
            {n:'AR · ES', label:'alcance internacional'},
          ].map(s=>(
            <div key={s.label} style={{textAlign:'center'}}>
              <div style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:26,fontWeight:700,color:'#00d296'}}>{s.n}</div>
              <div style={{fontSize:11,letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(176,190,220,0.35)',marginTop:4}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)',
        display:'flex', flexDirection:'column', alignItems:'center', gap:8,
        fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(0,210,150,0.2)',
      }}>
        <div style={{width:1,height:36,background:'rgba(0,210,150,0.12)',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',inset:0,background:'#00d296',animation:'scroll-line 2s ease-in-out infinite'}}/>
        </div>
        Scroll
      </div>
    </section>
  );
}