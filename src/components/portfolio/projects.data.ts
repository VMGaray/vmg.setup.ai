import { ProjectCardProps } from "./ProjectCard";

export const projects: ProjectCardProps[] = [
  {
    title: "Martins Perforaciones",
    description:
      "Plataforma web corporativa con panel administrativo, gestión de presupuestos y envío automático por email. Optimiza el trabajo del equipo comercial y mejora el seguimiento de ventas.",
    tech: ["Next.js", "TypeScript", "Node.js", "Email Automation"],
    image: "/projects/martins-hero.jpeg",
    link: "https://martins-perforaciones-app.vercel.app/",
  },
  {
    title: "Heroes Cercanos",
    description:
      "Plataforma solidaria para conectar donantes con cuarteles de bomberos. Incluye boton de reporte de incidentes, mapa interactivo, autenticación, donaciones y panel de administración.",
    tech: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    image: "/projects/heroes-landing.jpg",
    link: "#",
  },
  {
    title: "E-commerce",
    description:
      "Tienda online moderna con carrito, autenticación y gestión de productos. Enfocada en conversión y experiencia de usuario.",
    tech: ["Next.js", "Context API", "Stripe"],
    image: "/projects/ecommers.jpeg",
    link: "#",
  },
];
