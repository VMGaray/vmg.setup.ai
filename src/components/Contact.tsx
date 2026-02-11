export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-32 md:py-40"
      style={{ backgroundColor: '#f0f0fe' }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Título */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight"
          style={{ color: '#A7AE71' }}
        >
          Hablemos de tu <span style={{ color: '#7971AE' }}>proyecto</span>
        </h2>

        <div className="max-w-6xl mx-auto">

          <p className="text-gray-700 text-lg text-center mb-12 leading-relaxed">
            ¿Tenés una idea? ¿Necesitás mejorar tu presencia digital? Elegí el
            canal que más te guste para contactarnos:
          </p>

         {/* GRID */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  {/* WhatsApp */}
  <a
    href="https://wa.me/5491145311047?text=Hola!%20Quiero%20contactarte%20desde%20tu%20web"
    target="_blank"
    rel="noopener noreferrer"
    className="p-8 rounded-2xl shadow-md bg-[#e8f5f0] border border-[#71AE97]/30 hover:shadow-xl hover:bg-[#d9f0e8] transition-all duration-300 flex items-center gap-4"
  >
    <span className="text-5xl">📱</span>
    <div>
      <h3 className="text-2xl font-bold mb-2" style={{ color: '#71AE97' }}>
        WhatsApp
      </h3>
      <p className="text-gray-700">+54 11 4531-1047</p>
      <p className="text-sm text-gray-600 mt-1">
        Respuesta rápida
      </p>
    </div>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/vmg.setup.ai"
    target="_blank"
    rel="noopener noreferrer"
    className="p-8 rounded-2xl shadow-md bg-[#f5e8f0] border border-[#AE7188]/30 hover:shadow-xl hover:bg-[#f5e8ef] transition-all duration-300 flex items-center gap-4"
  >
    <span className="text-5xl">📸</span>
    <div>
      <h3 className="text-2xl font-bold mb-2" style={{ color: '#AE7188' }}>
        Instagram
      </h3>
      <p className="text-gray-700">@vmg.setup.ai</p>
      <p className="text-sm text-gray-600 mt-1">
        Proyectos y novedades
      </p>
    </div>
  </a>

  {/* Email */}
  <a
    href="mailto:vmg.setup.ai@gmail.com?subject=Consulta%20desde%20tu%20web"
    className="p-8 rounded-2xl shadow-md bg-[#e8f5f0] border border-[#AE7188]/30 hover:shadow-xl hover:bg-[#f0e8f0] transition-all duration-300 flex items-center gap-4"
  >
    <span className="text-5xl">✉️</span>
    <div>
      <h3 className="text-2xl font-bold mb-2" style={{ color: '#AE7188' }}>
        Email
      </h3>
      <p className="text-gray-700">vmg.setup.ai@gmail.com</p>
      <p className="text-sm text-gray-600 mt-1">
        Formal y detallado
      </p>
    </div>
  </a>

</div>


          {/* Ubicación */}
          <div className="mt-12 text-center p-6 rounded-2xl bg-white/50">
            <p className="flex items-center justify-center gap-2 text-gray-700 text-lg">
              <span className="text-2xl">📍</span>
              <strong>
                Villa General Belgrano, Córdoba, Argentina
              </strong>
            </p>
            <p className="text-gray-600 mt-2">
              Trabajamos con clientes de todo el país de forma remota
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
