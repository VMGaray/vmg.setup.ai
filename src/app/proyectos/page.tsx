import Link from "next/link";

export default function ProyectosPage() {
  return (
    <section className="py-32 bg-[#f0f0fe]">
      <div className="container mx-auto px-4 max-w-6xl">

        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#7971AE]">
          Nuestros Proyectos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <Link
            href="/proyectos/martins"
            className="p-8 rounded-2xl shadow-md bg-[#e8f5f0] border border-[#71AE97]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#71AE97]">
              Sistema de Presupuestos
            </h3>
            <p className="text-gray-700">
              Aplicación para empresas de servicios que necesitan enviar
              presupuestos desde el celular en el momento.
            </p>
          </Link>

        </div>
      </div>
    </section>
  );
}
