export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Columna 1: Sobre mí */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#71AE97' }}>VGM Setup AI</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Soluciones digitales profesionales para emprendedores, comercios y profesionales.
            </p>
          </div>

          {/* Columna 2: Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-brand-green transition-colors text-sm">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-brand-green transition-colors text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="text-gray-300 hover:text-brand-green transition-colors text-sm">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-brand-green transition-colors text-sm">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              {/* Email */}
              <a 
                href="mailto:vmg.setup.ai@gmail.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-brand-green transition-colors text-sm group"
              >
                <span className="text-xl">✉️</span>
                <span className="group-hover:underline">vmg.setup.ai@gmail.com</span>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/541145311047" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-brand-green transition-colors text-sm group"
              >
                <span className="text-xl">📱</span>
                <span className="group-hover:underline">+54 11 4531-1047</span>
              </a>

              {/* Ubicación */}
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <span className="text-xl">📍</span>
                <span>Villa General Belgrano, Córdoba, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="border-t border-gray-700 pt-6 mb-6">
          <div className="flex justify-center gap-6">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/victoria-mercedes-garay/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-gray-700"
              style={{ color: '#71AE97' }}
            >
              <span className="text-2xl">💼</span>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            {/* Portfolio */}
            <a 
              href="https://mi-portfolio-victoria-garay.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-gray-700"
              style={{ color: '#7971AE' }}
            >
              <span className="text-2xl">👩‍💻</span>
              <span className="text-sm font-medium">Portfolio</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} VGM Setup AI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}