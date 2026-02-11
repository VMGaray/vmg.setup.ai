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
          Sobre <span style={{ color: '#AE7188' }}>nosotros</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: Texto principal */}
          <div className="space-y-6">
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: '#71AE97' }}
              >
                Somos VMG Setup AI
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Somos un equipo especializado en{' '}
                <strong>
                  desarrollo fullstack, soluciones frontend y automatizaciones
                  inteligentes
                </strong>
                . Diseñamos y construimos herramientas digitales pensadas para
                optimizar procesos, mejorar la presencia online y potenciar
                negocios.
              </p>
            </div>

            <div>
              <h4
                className="text-xl font-bold mb-3"
                style={{ color: '#AE7188' }}
              >
                Alcance nacional e internacional
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Trabajamos de manera 100% remota, brindando soluciones digitales
                a emprendedores, comercios y empresas de distintos puntos del
                país y del exterior. Nuestro enfoque combina tecnología moderna,
                diseño estratégico y visión de crecimiento.
              </p>
            </div>

            <div>
              <h4
                className="text-xl font-bold mb-3"
                style={{ color: '#A7AE71' }}
              >
                Nuestra metodología
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Creemos que cada proyecto es único. Analizamos las necesidades
                específicas de cada cliente para desarrollar soluciones a
                medida, escalables y orientadas a resultados. Priorizamos la
                comunicación clara, la organización y el compromiso en cada
                etapa del proceso.
              </p>
            </div>
          </div>

          {/* Columna derecha: Características */}
          <div>
            <div className="p-8 rounded-2xl shadow-md bg-[#ecdde3] border border-[#dfc6cf]/30 hover:shadow-xl transition-all duration-300">
              <h4
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: '#7971AE' }}
              >
                En pocas palabras
              </h4>

              <div className="space-y-4">
                {/* Desarrollo */}
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💻</span>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">
                      Desarrollo Fullstack
                    </p>
                    <p className="text-gray-700">
                      Frontend moderno y backend escalable
                    </p>
                  </div>
                </div>

                {/* Automatizaciones */}
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚙️</span>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">
                      Automatizaciones inteligentes
                    </p>
                    <p className="text-gray-700">
                      Integraciones y optimización de procesos
                    </p>
                  </div>
                </div>

                {/* Alcance */}
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌎</span>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">
                      Trabajo remoto
                    </p>
                    <p className="text-gray-700">
                      Alcance nacional e internacional
                    </p>
                  </div>
                </div>

                {/* Resultados */}
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📈</span>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">
                      Enfoque en resultados
                    </p>
                    <p className="text-gray-700">
                      Soluciones pensadas para crecer
                    </p>
                  </div>
                </div>

                {/* Tecnología */}
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🧠</span>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">
                      Tecnología actual
                    </p>
                    <p className="text-gray-700">
                      Stack moderno y herramientas innovadoras
                    </p>
                  </div>
                </div>

                {/* Valores */}
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">
                      Compromiso y profesionalismo
                    </p>
                    <p className="text-gray-700">
                      Planificación, organización y calidad
                    </p>
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
                Iniciar proyecto →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
