export default function About() {
  return (
    <section 
      id="sobre-mi" 
      className="py-20 md:py-28"
      style={{ backgroundColor: '#f0f0fe' }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Título */}
        <h2 
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight"
          style={{ color: '#AE7188' }}
        >
          Sobre <span style={{ color: '#AE7188' }}>mí</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: Texto principal */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#71AE97' }}>
                Hola, soy Victoria 👋
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Soy <strong>desarrolladora fullstack</strong> con especialización en frontend y automatizaciones con n8n. 
                Me apasiona crear soluciones digitales que realmente funcionen y se adapten a las necesidades de cada proyecto.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-3" style={{ color: '#AE7188' }}>De Buenos Aires a las sierras</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Hace varios años, junto con mi marido, tomamos una decisión que cambió nuestra vida: dejar Buenos Aires 
                para buscar la tranquilidad de un pueblo para nuestra familia. Nos instalamos en Villa General Belgrano, 
                y acá tuvimos a nuestros 3 hijos. Desde las sierras cordobesas trabajo con clientes de todo el país, 
                combinando lo mejor de ambos mundos.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-3" style={{ color: '#A7AE71' }}>Mi enfoque de trabajo</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Me encantan los desafíos. Creo que lo más importante es <strong>escuchar la necesidad del cliente</strong> para 
                poder crear trabajos verdaderamente a medida. Soy responsable, organizada y me comprometo al 100% con cada proyecto.
              </p>
            </div>
          </div>

          {/* Columna derecha: Características */}
          <div>
            <div className="p-8 rounded-2xl shadow-md bg-[#ecdde3] border border-[#dfc6cf]/30 hover:shadow-xl transition-all duration-300">
              <h4 className="text-2xl font-bold mb-6 text-center" style={{ color: '#7971AE' }}>
                En pocas palabras
              </h4>
              
              <div className="space-y-4">
                {/* Skills técnicos */}
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💻</span>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">Desarrollo Fullstack</p>
                    <p className="text-gray-700">Especialización en Frontend</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚙️</span>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">Automatizaciones</p>
                    <p className="text-gray-700">n8n y soluciones a medida</p>
                  </div>
                </div>

                {/* Ubicación */}
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">Villa General Belgrano</p>
                    <p className="text-gray-700">Córdoba, Argentina</p>
                  </div>
                </div>

                {/* Familia */}
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">Mamá de 3</p>
                    <p className="text-gray-700">Familia serrana</p>
                  </div>
                </div>

                {/* Personalidad */}
                <div className="flex items-start gap-3">
                  <span className="text-2xl">☀️</span>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">Fan del verano</p>
                    <p className="text-gray-700">Río, mar y naturaleza</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">Valores</p>
                    <p className="text-gray-700">Responsable y organizada</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-6 text-center">
              <a 
                href="#contacto" 
                className="inline-block px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: '#A7AE71', color: 'white' }}
              >
                Trabajemos juntos →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}