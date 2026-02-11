import Image from "next/image";

export default function Martins() {
  return (
    <section className="pt-40 pb-32 bg-[#f0f0fe]">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* HERO */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#7971AE]">
            Sistema de Presupuestos Inteligente
          </h1>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Una solución pensada para empresas de servicios que necesitan enviar
            presupuestos en el momento, sin perder tiempo ni oportunidades.
          </p>
        </div>

        {/* BLOQUE 1 - Imagen principal */}
        <div className="mb-32 bg-white rounded-3xl shadow-xl p-6 md:p-10">
          <Image
            src="/projects/martins-hero.jpeg"
            alt="Vista general del sistema"
            width={1200}
            height={800}
            className="rounded-2xl w-full"
          />
        </div>

        {/* BLOQUE 2 - Problema + Imagen */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#AE7188]">
              El problema
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Muchas empresas de servicios pierden ventas porque tardan en enviar
              presupuestos. Se anotan datos en papel o se envían días después,
              cuando el cliente ya decidió contratar a otro.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <Image
              src="/projects/martins-login.jpeg"
              alt="Login del sistema"
              width={800}
              height={600}
              className="rounded-2xl w-full"
            />
          </div>
        </div>

        {/* BLOQUE 3 - Solución + Imagen */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div className="order-2 md:order-1 bg-white rounded-3xl shadow-lg p-6">
            <Image
              src="/projects/martins-presupuesto.jpeg"
              alt="Generación de presupuesto"
              width={800}
              height={600}
              className="rounded-2xl w-full"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-[#71AE97]">
              La solución
            </h2>

            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Generar el presupuesto desde el celular</li>
              <li>✔ Enviarlo por email en el momento</li>
              <li>✔ Historial automático</li>
              <li>✔ Panel administrativo con métricas</li>
            </ul>
          </div>
        </div>

        {/* BLOQUE 4 - Galería moderna */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#7971AE]">
            Panel administrativo
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-lg p-4 hover:shadow-2xl transition">
              <Image
                src="/projects/martins-admin.jpeg"
                alt="Panel admin"
                width={800}
                height={600}
                className="rounded-2xl w-full"
              />
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-4 hover:shadow-2xl transition">
              <Image
                src="/projects/martins-usuarios.jpeg"
                alt="Gestión de usuarios"
                width={800}
                height={600}
                className="rounded-2xl w-full"
              />
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-4 hover:shadow-2xl transition">
              <Image
                src="/projects/martins-presupuesto.jpeg"
                alt="Vista presupuesto"
                width={800}
                height={600}
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/#contacto"
            className="inline-block px-10 py-5 rounded-2xl bg-[#A7AE71] text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Quiero algo así para mi empresa →
          </a>
        </div>

      </div>
    </section>
  );
}
