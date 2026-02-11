export default function Portfolio() {
  return (
    <section 
      id="portfolio" 
      className="py-32 md:py-40"
      style={{ backgroundColor: '#f0f0fe' }}  // mismo fondo que Hero y Servicios
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Título completo en violeta #7971AE */}
        <h2 
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight"
          style={{ color: '#7971AE' }}  // ← todo el título en violeta
        >
          Algunos proyectos que hemos realizado
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="p-8 rounded-2xl shadow-md bg-[#e8f5f0] border border-[#71AE97]/30 hover:shadow-xl hover:bg-[#d9f0e8] transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#71AE97' }}>
              Tienda Online para Comercio
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              E-commerce completo con carrito y pagos integrados. Ayudó a aumentar ventas en un 50%.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="p-8 rounded-2xl shadow-md bg-[#e8f5f0] border border-[#AE7188]/30 hover:shadow-xl hover:bg-[#f0e8f0] transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#AE7188' }}>
              Sistema de Turnos
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              App para reservar citas, perfecta para profesionales. Fácil desde el celular.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="p-8 rounded-2xl shadow-md bg-[#e8f5f0] border border-[#7971AE]/30 hover:shadow-xl hover:bg-[#e8e8f5] transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#7971AE' }}>
              App con Panel de Admin
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Información de empresa + admin para presupuestos por WhatsApp. Eficiencia total.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}