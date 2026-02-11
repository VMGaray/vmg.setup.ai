'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header 
      className="
        fixed top-0 left-0 right-0 z-50 
        h-20 md:h-24 
        backdrop-blur-sm bg-white/60 border-b border-slate-200/40
        transition-all duration-300
      "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between relative">
        
        {/* Logo superpuesto - pegado al borde izquierdo y bajando hacia el hero */}
        <div className="absolute left-0 md:left-0 -bottom-12 md:-bottom-16 lg:-bottom-20 z-10 pointer-events-auto">
          <Link href="/" className="block">
            <div className="relative h-28 w-64 sm:h-32 sm:w-72 md:h-36 md:w-80 lg:h-40 lg:w-96">
              <Image 
                src="/logo3.png" 
                alt="VMG logo" 
                fill
                className="object-contain drop-shadow-md"  // sombra suave para que resalte
                priority
              />
            </div>
          </Link>
        </div>

        {/* Spacer para empujar el menú a la derecha */}
        <div className="flex-1 min-w-[200px]" />

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          <Link 
            href="#servicios" 
            className="text-slate-700 hover:text-[#7971AE] font-medium transition-colors duration-200"
          >
            Servicios
          </Link>
          <Link 
            href="#portfolio" 
            className="text-slate-700 hover:text-[#AE7188] font-medium transition-colors duration-200"
          >
            Proyectos
          </Link>
          <Link 
            href="#sobre-mi" 
            className="text-slate-700 hover:text-[#71AE97] font-medium transition-colors duration-200"
          >
            Nosotros
          </Link>
          <Link 
            href="#contacto" 
            className="text-slate-700 hover:text-[#A7AE71] font-medium transition-colors duration-200"
          >
            Contacto
          </Link>
        </nav>

        {/* Menú hamburguesa mobile */}
        <button className="md:hidden text-slate-700 text-3xl pr-2">
          ☰
        </button>
      </div>
    </header>
  );
}