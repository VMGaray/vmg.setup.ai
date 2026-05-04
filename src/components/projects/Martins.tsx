import Image from 'next/image';
import Link from 'next/link';

export default function Martins() {
  return (
    <main style={{
      background:'#0d1425', minHeight:'100vh',
      fontFamily:"'DM Sans',sans-serif", paddingTop:64,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=DM+Sans:wght@300;400&display=swap');
        .img-card {
          border:1px solid rgba(255,255,255,0.06); border-radius:8px;
          overflow:hidden; background:rgba(255,255,255,0.02);
          transition:border-color 0.3s;
        }
        .img-card:hover { border-color:rgba(255,255,255,0.12); }
        .check-item {
          display:flex; align-items:flex-start; gap:12px;
          padding:14px 0; border-bottom:1px solid rgba(255,255,255,0.04);
        }
        .check-item:last-child { border-bottom:none; }
      `}</style>

      {/* Hero */}
      <section style={{ padding:'80px 40px 80px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{
          position:'absolute', top:'50%', left:'50%', width:600, height:400,
          background:'radial-gradient(ellipse,rgba(0,210,150,0.08) 0%,transparent 70%)',
          transform:'translate(-50%,-50%)', pointerEvents:'none',
        }}/>
        <div style={{ maxWidth:800, margin:'0 auto', position:'relative', zIndex:1 }}>
          <Link href="/#portfolio" style={{
            fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase',
            color:'rgba(0,210,150,0.5)', textDecoration:'none', display:'inline-flex',
            alignItems:'center', gap:6, marginBottom:32,
            transition:'color 0.3s',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Volver al portfolio
          </Link>
          <div style={{ fontSize:11, letterSpacing:'0.25em', textTransform:'uppercase', color:'rgba(0,210,150,0.5)', marginBottom:16 }}>
            Caso de estudio · Web & PWA
          </div>
          <h1 style={{
            fontFamily:"'Space Grotesk',sans-serif",
            fontSize:'clamp(32px,5vw,62px)', fontWeight:700,
            color:'#f0f4ff', lineHeight:1.08, marginBottom:24,
          }}>
            Sistema de Presupuestos<br/>
            <span style={{ color:'#00d296' }}>Inteligente</span>
          </h1>
          <p style={{
            fontSize:'clamp(14px,1.6vw,16px)', color:'rgba(176,190,220,0.55)',
            lineHeight:1.8, fontWeight:300, maxWidth:580, margin:'0 auto 40px',
          }}>
            Una solución pensada para empresas de servicios que necesitan enviar
            presupuestos en el momento, sin perder tiempo ni oportunidades comerciales.
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            {['Next.js','TypeScript','Tailwind CSS','PWA','Email Automation'].map(t => (
              <span key={t} style={{
                fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase',
                padding:'5px 12px', border:'1px solid rgba(0,210,150,0.15)',
                color:'rgba(0,210,150,0.5)', borderRadius:2,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 40px 120px' }}>

        {/* Imagen principal */}
        <div className="img-card" style={{ marginBottom:80 }}>
          <Image src="/projects/martins-hero.jpeg" alt="Vista general del sistema" width={1200} height={700} style={{ width:'100%', height:'auto', display:'block' }}/>
        </div>

        {/* El problema */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center', marginBottom:80 }}>
          <div>
            <div style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(239,68,68,0.6)', marginBottom:16 }}>
              El problema
            </div>
            <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'clamp(24px,3vw,36px)', fontWeight:700, color:'#f0f4ff', marginBottom:20, lineHeight:1.2 }}>
              Perder ventas por responder tarde
            </h2>
            <p style={{ fontSize:14, color:'rgba(176,190,220,0.55)', lineHeight:1.8, fontWeight:300 }}>
              Muchas empresas de servicios pierden ventas porque tardan en enviar presupuestos.
              Se anotan datos en papel o se envían días después, cuando el cliente ya decidió contratar a otro.
            </p>
          </div>
          <div className="img-card">
            <Image src="/projects/martins-login.jpeg" alt="Login del sistema" width={800} height={600} style={{ width:'100%', height:'auto', display:'block' }}/>
          </div>
        </div>

        {/* La solución */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center', marginBottom:80 }}>
          <div className="img-card">
            <Image src="/projects/martins-presupuesto.jpeg" alt="Generación de presupuesto" width={800} height={600} style={{ width:'100%', height:'auto', display:'block' }}/>
          </div>
          <div>
            <div style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(0,210,150,0.6)', marginBottom:16 }}>
              La solución
            </div>
            <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'clamp(24px,3vw,36px)', fontWeight:700, color:'#f0f4ff', marginBottom:24, lineHeight:1.2 }}>
              Presupuestar desde el celular en segundos
            </h2>
            <div>
              {[
                'Generá el presupuesto desde el celular en el campo',
                'Envialo por email en el momento, con tu logo',
                'Historial automático de todos los presupuestos',
                'Panel administrativo con métricas de conversión',
              ].map(item => (
                <div key={item} className="check-item">
                  <div style={{ width:20, height:20, borderRadius:'50%', background:'rgba(0,210,150,0.1)', border:'1px solid rgba(0,210,150,0.3)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00d296" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span style={{ fontSize:14, color:'rgba(176,190,220,0.65)', lineHeight:1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panel admin — galería */}
        <div style={{ marginBottom:80 }}>
          <div style={{ fontSize:11, letterSpacing:'0.25em', textTransform:'uppercase', color:'rgba(0,210,150,0.5)', marginBottom:16, textAlign:'center' }}>
            Panel administrativo
          </div>
          <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'clamp(22px,3vw,32px)', fontWeight:700, color:'#f0f4ff', textAlign:'center', marginBottom:40, lineHeight:1.2 }}>
            Control total del negocio
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:16 }}>
            {[
              {src:'/projects/martins-admin.jpeg', label:'Dashboard'},
              {src:'/projects/martins-usuarios.jpeg', label:'Usuarios'},
              {src:'/projects/martins-presupuesto.jpeg', label:'Presupuestos'},
            ].map(img => (
              <div key={img.src} className="img-card">
                <div style={{ padding:'10px 14px', borderBottom:'1px solid rgba(255,255,255,0.04)' }}>
                  <span style={{ fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(176,190,220,0.3)' }}>{img.label}</span>
                </div>
                <Image src={img.src} alt={img.label} width={800} height={600} style={{ width:'100%', height:'auto', display:'block' }}/>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          textAlign:'center', padding:'56px 40px',
          border:'1px solid rgba(0,210,150,0.1)', borderRadius:8,
          background:'rgba(0,210,150,0.02)',
        }}>
          <div style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(0,210,150,0.4)', marginBottom:16 }}>
            ¿Necesitás algo similar?
          </div>
          <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'clamp(20px,2.5vw,28px)', fontWeight:700, color:'#f0f4ff', marginBottom:12, lineHeight:1.2 }}>
            Construimos la solución a medida para tu empresa
          </h3>
          <p style={{ fontSize:14, color:'rgba(176,190,220,0.4)', marginBottom:32, fontWeight:300 }}>
            Contanos tu caso y te decimos cómo lo encaramos.
          </p>
          <a
            href="https://wa.me/5491145311047?text=Hola!%20Vi%20el%20caso%20de%20Martins%20y%20quiero%20algo%20similar"
            target="_blank" rel="noopener noreferrer"
            style={{
              fontSize:12, letterSpacing:'0.14em', textTransform:'uppercase',
              padding:'14px 32px', background:'#00d296', color:'#0d1425',
              textDecoration:'none', borderRadius:3, fontWeight:600,
              display:'inline-block', transition:'opacity 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity='0.85'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity='1'}
          >
            Quiero algo así para mi empresa →
          </a>
        </div>
      </div>

      {/* Responsive grid fix */}
      <style>{`@media(max-width:768px){.vmg-two-col{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </main>
  );
}