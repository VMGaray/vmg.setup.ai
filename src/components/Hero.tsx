export default function Hero() {
  return (
    <section 
      className="relative py-20 md:py-28"
      style={{ 
        backgroundColor: '#f0f0fe',
        paddingTop: '200px'  // espacio para header
      }}
    >
      <div className="container mx-auto px-6 max-w-3xl text-center">
        {/* Título multicolor */}
        <h1 
          className="font-extrabold mb-8 leading-tight"
          style={{ 
            fontSize: 'clamp(2.2rem, 7vw, 4rem)',
            lineHeight: '1.1'
          }}
        >
          <span style={{ color: '#71AE97' }}>Tu </span>
          <span style={{ color: '#7971AE' }}>aliado </span>
          <span style={{ color: '#AE7188' }}>para </span>
          <span style={{ color: '#A7AE71' }}>crecer </span>
          <span style={{ color: '#71AE97' }}>en </span>
          <span style={{ color: '#7971AE' }}>lo digital</span>
        </h1>

        {/* Descripción */}
        <p 
          className="max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
          style={{ 
            fontSize: 'clamp(0.95rem, 2.8vw, 1.125rem)',
            color: '#444444'
          }}
        >
          <span style={{ color: '#71AE97' }}>Páginas web</span> que venden,{' '}
          <span style={{ color: '#AE7188' }}>tiendas online</span> que funcionan y{' '}
          <span style={{ color: '#7971AE' }}>sistemas</span> que te ahorran tiempo.{' '}
          <span style={{ color: '#A7AE71' }}>Todo hecho a medida</span> para emprendedores, comercios y profesionales como vos.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="https://wa.me/5491145311047?text=Hola!%20Quiero%20consultar%20por%20mi%20sitio%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 rounded-xl text-xl font-bold shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
            style={{ backgroundColor: '#71AE97', color: 'white' }}
          >
            Quiero mi sitio web →
          </a>

          <a
            href="#servicios"
            className="inline-block px-10 py-5 rounded-xl text-xl font-bold border-2 transition-all hover:-translate-y-1 hover:shadow-2xl"
            style={{ borderColor: '#7971AE', color: '#7971AE' }}
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}