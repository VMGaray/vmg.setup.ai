import Link from "next/link";

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-32 md:py-40"
      style={{ backgroundColor: "#f0f0fe" }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight"
          style={{ color: "#71AE97" }}
        >
          Servicios que impulsan tu negocio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tarjeta 1 */}
          <div className="p-8 rounded-2xl shadow-md bg-[#e8f5f0] border border-[#71AE97]/30 hover:shadow-xl hover:bg-[#d9f0e8] transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#71AE97" }}>
              Páginas web atractivas
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Sitio profesional que muestre quién sos, qué ofrecés y cómo contactarte.
              Perfecto para profesionales y comercios.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="p-8 rounded-2xl shadow-md bg-[#e8f5f0] border border-[#AE7188]/30 hover:shadow-xl hover:bg-[#f0e8f0] transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#AE7188" }}>
              Tienda online
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Vendé tus productos 24/7 con carrito, pagos seguros y envíos.
              Ideal para aumentar ventas sin esfuerzo extra.
            </p>
          </div>

          {/* Tarjeta 3 (CLICKEABLE) */}
          <Link
            href="/proyectos/martins"
            className="p-8 rounded-2xl shadow-md bg-[#e8f5f0] border border-[#7971AE]/30 hover:shadow-xl hover:bg-[#e8e8f5] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#7971AE" }}>
                Apps y Automatizaciones
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Sistemas de turnos, presupuestos por WhatsApp, paneles de administración...
                lo que necesites para ahorrar tiempo.
              </p>
            </div>

            <span className="mt-auto inline-block bg-[#7971AE] text-white font-semibold px-6 py-3 rounded-xl text-center hover:opacity-90 transition">
              Ver ejemplo real
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
}
