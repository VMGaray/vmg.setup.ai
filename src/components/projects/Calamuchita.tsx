import Link from 'next/link';

const ACCENT = '#2D9E6E';
const ACCENT_DIM = 'rgba(45,158,110,0.5)';
const ACCENT_BG = 'rgba(45,158,110,0.06)';
const ACCENT_BORDER = 'rgba(45,158,110,0.15)';

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 12,
      padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{
        width: 20, height: 20, borderRadius: '50%', flexShrink: 0, marginTop: 1,
        background: ACCENT_BG, border: `1px solid ${ACCENT_BORDER}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="3">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span style={{ fontSize: 14, color: 'rgba(176,190,220,0.65)', lineHeight: 1.6 }}>{children}</span>
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span style={{
      fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
      padding: '5px 12px', border: `1px solid ${ACCENT_BORDER}`,
      color: ACCENT_DIM, borderRadius: 2,
    }}>{children}</span>
  );
}

function SectionLabel({ color = ACCENT_DIM, children }: { color?: string; children: string }) {
  return (
    <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color, marginBottom: 16 }}>
      {children}
    </div>
  );
}

export default function Calamuchita() {
  return (
    <main style={{ background: '#0d1425', minHeight: '100vh', fontFamily: "'DM Sans',sans-serif", paddingTop: 64 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=DM+Sans:wght@300;400&display=swap');
        .feat-card {
          border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;
          background: rgba(255,255,255,0.02); padding: 28px;
          transition: border-color 0.3s;
        }
        .feat-card:hover { border-color: rgba(255,255,255,0.1); }
        .table-row { display: grid; grid-template-columns: 200px 1fr; gap: 16px; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .table-row:last-child { border-bottom: none; }
        @media(max-width:768px){
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .feat-grid { grid-template-columns: 1fr !important; }
          .table-row { grid-template-columns: 1fr; gap: 4px; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', width: 700, height: 400,
          background: `radial-gradient(ellipse,${ACCENT_BG} 0%,transparent 70%)`,
          transform: 'translate(-50%,-50%)', pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Link href="/#portfolio" style={{
            fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: ACCENT_DIM, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Volver al portfolio
          </Link>
          <div style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT_DIM, marginBottom: 16 }}>
            Caso de estudio · Plataforma Full Stack & PWA
          </div>
          <h1 style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontSize: 'clamp(32px,5vw,62px)', fontWeight: 700,
            color: '#f0f4ff', lineHeight: 1.08, marginBottom: 24,
          }}>
            Directorio digital para el<br />
            <span style={{ color: ACCENT }}>Valle de Calamuchita</span>
          </h1>
          <p style={{
            fontSize: 'clamp(14px,1.6vw,16px)', color: 'rgba(176,190,220,0.55)',
            lineHeight: 1.8, fontWeight: 300, maxWidth: 620, margin: '0 auto 40px',
          }}>
            Una plataforma que conecta a turistas y residentes con los comercios, servicios y restaurantes
            de las 16 localidades del valle — con dashboard para negocios, pedidos en tiempo real y mapa interactivo.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['Next.js 15', 'TypeScript', 'Supabase', 'Mapbox GL', 'Tailwind 4', 'PWA'].map(t => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px 120px' }}>

        {/* El problema */}
        <div style={{ marginBottom: 80 }}>
          <SectionLabel color="rgba(239,68,68,0.6)">El problema</SectionLabel>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: '#f0f4ff', marginBottom: 20, lineHeight: 1.2 }}>
            16 localidades, sin presencia digital unificada
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(176,190,220,0.55)', lineHeight: 1.8, fontWeight: 300, maxWidth: 720 }}>
            El Valle de Calamuchita concentra miles de turistas por temporada, pero los comercios locales no tenían
            forma de mostrar sus servicios ni sus menús del día de manera actualizada. Los turistas buscaban información
            en grupos de Facebook desactualizados o de boca en boca. Los restaurantes perdían ventas porque no podían
            tomar pedidos ni reservas de forma digital.
          </p>
        </div>

        {/* La solución */}
        <div style={{ marginBottom: 80 }}>
          <SectionLabel>La solución</SectionLabel>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: '#f0f4ff', marginBottom: 32, lineHeight: 1.2 }}>
            Una plataforma en tres capas
          </h2>
          <div className="feat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {[
              {
                label: 'Sitio Público',
                desc: 'Búsqueda global, directorio por categorías (8 secciones), mapa interactivo, menús del día, agenda de eventos y teléfonos de emergencia para las 16 localidades.',
              },
              {
                label: 'Dashboard de Negocios',
                desc: 'Panel para gastronómicos: gestión de carta, menú del día, pedidos delivery/take away en tiempo real vía Supabase Realtime, reservas y estadísticas.',
              },
              {
                label: 'Panel Admin',
                desc: 'Control total de la plataforma: negocios, usuarios, suscripciones, eventos, promociones, info útil y generador de QR para marketing impreso.',
              },
            ].map(item => (
              <div key={item.label} className="feat-card">
                <div style={{ width: 24, height: 2, background: ACCENT, borderRadius: 1, marginBottom: 20 }} />
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 16, fontWeight: 700, color: '#f0f4ff', marginBottom: 12 }}>
                  {item.label}
                </h3>
                <p style={{ fontSize: 13, color: 'rgba(176,190,220,0.5)', lineHeight: 1.7, fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Funcionalidades destacadas */}
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start', marginBottom: 80 }}>
          <div>
            <SectionLabel>Sitio público</SectionLabel>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#f0f4ff', marginBottom: 28, lineHeight: 1.2 }}>
              Todo el valle, en una sola búsqueda
            </h2>
            <div>
              {[
                'Búsqueda global por nombre o categoría',
                'Directorio con 8 secciones y subcategorías (Gastronomía, Salud, Turismo, etc.)',
                'Mapa interactivo con todos los comercios geolocalizados (Mapbox)',
                'Menús del día en carrusel, actualizados por cada restaurante',
                'Teléfonos de emergencia para las 16 localidades',
                'Detalle de negocio con carta, reserva por WhatsApp, horarios y galería',
                'SEO dinámico con Open Graph por negocio',
              ].map(item => <CheckItem key={item}>{item}</CheckItem>)}
            </div>
          </div>
          <div>
            <SectionLabel>Dashboard gastronómico</SectionLabel>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#f0f4ff', marginBottom: 28, lineHeight: 1.2 }}>
              Gestión del negocio desde el celular
            </h2>
            <div>
              {[
                'Toggle abierto/cerrado y métricas del día',
                'Publicar y editar menú del día (reutiliza el del día anterior)',
                'Gestión de carta con categorías, fotos y precios',
                'Pedidos delivery y take away en tiempo real (Supabase Realtime)',
                'Reservas con confirmación/rechazo y vista por fecha',
                'Estadísticas: vistas, contactos, pedidos y facturación mensual',
                'Configuración de local: horarios, coordenadas, servicios, formas de pago',
              ].map(item => <CheckItem key={item}>{item}</CheckItem>)}
            </div>
          </div>
        </div>

        {/* Stack técnico */}
        <div style={{ marginBottom: 80 }}>
          <SectionLabel>Stack técnico</SectionLabel>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#f0f4ff', marginBottom: 32, lineHeight: 1.2 }}>
            Tecnologías elegidas para escalar
          </h2>
          <div style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8, overflow: 'hidden', background: 'rgba(255,255,255,0.02)' }}>
            {[
              ['Next.js 15 (App Router)', 'Framework principal, SSR, rutas protegidas por middleware'],
              ['Supabase', 'PostgreSQL, autenticación, storage y Realtime para pedidos/reservas'],
              ['Tailwind CSS 4', 'Estilos con variables CSS en @theme para paleta de colores propia'],
              ['Mapbox GL / react-map-gl', 'Mapa interactivo de comercios con popup de detalle'],
              ['Framer Motion', 'Animaciones de UI y transiciones de página'],
              ['next-pwa (@ducanh2912)', 'Service worker, manifest y soporte TWA para Android'],
              ['Recharts + Swiper', 'Gráficos de estadísticas y carruseles de menú/galería'],
            ].map(([tech, desc]) => (
              <div key={tech} className="table-row" style={{ padding: '16px 24px' }}>
                <span style={{ fontSize: 13, color: ACCENT, fontWeight: 500 }}>{tech}</span>
                <span style={{ fontSize: 13, color: 'rgba(176,190,220,0.5)', lineHeight: 1.6 }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Roles y base de datos */}
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start', marginBottom: 80 }}>
          <div>
            <SectionLabel>Sistema de roles</SectionLabel>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 700, color: '#f0f4ff', marginBottom: 20, lineHeight: 1.2 }}>
              Tres niveles de acceso
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { role: 'customer', desc: 'Acceso al sitio público completo' },
                { role: 'business', desc: 'Sitio público + Dashboard de negocio' },
                { role: 'admin', desc: 'Todo lo anterior + Panel administrador' },
              ].map(({ role, desc }) => (
                <div key={role} style={{ padding: '16px 20px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 6, background: 'rgba(255,255,255,0.02)' }}>
                  <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT_DIM, marginBottom: 6 }}>{role}</div>
                  <div style={{ fontSize: 13, color: 'rgba(176,190,220,0.5)' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel>Panel Admin</SectionLabel>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 700, color: '#f0f4ff', marginBottom: 20, lineHeight: 1.2 }}>
              Control total de la plataforma
            </h2>
            <div>
              {[
                'CRUD de negocios con filtros y analytics por fila',
                'Aprobación/rechazo de registros de gastronómicos',
                'Gestión de eventos con galería de imágenes múltiples',
                'Suscripciones por negocio: estado, precio, ciclo y fechas',
                'Generador de QR para home y perfiles (PNG + calcomanía A5)',
                'Info útil: contactos, localidades, servicios y transporte',
              ].map(item => <CheckItem key={item}>{item}</CheckItem>)}
            </div>
          </div>
        </div>

        {/* Paleta + localidades */}
        <div style={{ marginBottom: 80 }}>
          <SectionLabel>Identidad visual</SectionLabel>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#f0f4ff', marginBottom: 32, lineHeight: 1.2 }}>
            Paleta inspirada en el valle
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {[
              { name: 'Verde Pino', hex: '#2D4530', label: 'Primario' },
              { name: 'Verde Musgo', hex: '#A3B18A', label: 'Secundario' },
              { name: 'Crema', hex: '#E1DBC9', label: 'Fondo base' },
              { name: 'Verde Claro', hex: '#6B8F70', label: 'Variante media' },
              { name: 'Dorado', hex: '#C9A44B', label: 'Acentos / Badge' },
            ].map(c => (
              <div key={c.hex} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 6, background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ width: 28, height: 28, borderRadius: 4, background: c.hex, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 12, color: '#f0f4ff', fontWeight: 500 }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: 'rgba(176,190,220,0.4)' }}>{c.hex} · {c.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center', padding: '56px 40px',
          border: `1px solid ${ACCENT_BORDER}`, borderRadius: 8,
          background: ACCENT_BG,
        }}>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT_DIM, marginBottom: 16 }}>
            ¿Tenés una región, ciudad o rubro similar?
          </div>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 700, color: '#f0f4ff', marginBottom: 12, lineHeight: 1.2 }}>
            Construimos la plataforma a medida para tu comunidad
          </h3>
          <p style={{ fontSize: 14, color: 'rgba(176,190,220,0.4)', marginBottom: 32, fontWeight: 300 }}>
            Directorio, gastronomía, eventos, mapa, dashboard de negocios — todo integrado.
          </p>
          <a
            href="https://wa.me/5491145311047?text=Hola!%20Vi%20el%20caso%20de%20Calamuchita%20App%20y%20quiero%20algo%20similar"
            target="_blank" rel="noopener noreferrer"
            style={{
              fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '14px 32px', background: ACCENT, color: '#0d1425',
              textDecoration: 'none', borderRadius: 3, fontWeight: 600,
              display: 'inline-block',
            }}
          >
            Quiero algo así para mi proyecto →
          </a>
        </div>
      </div>
    </main>
  );
}
