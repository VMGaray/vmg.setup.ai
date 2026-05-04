export interface Project {
  slug: string;
  category: string;
  title: string;
  description: string;
  tech: string[];
  accent: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'martins',
    category: 'Web · PWA · Automatización',
    title: 'Martins Perforaciones',
    description: 'Landing Page y PWA para empresa de perforaciones de agua en Calamuchita. Sistema de presupuestos inteligente, panel administrativo y envío automático por email desde el celular.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'PWA', 'Email Automation'],
    accent: '#00d296',
    link: 'https://martins-perforaciones-app.vercel.app/',
    featured: true,
  },
  {
    slug: 'ecommerce',
    category: 'E-commerce · Full Stack',
    title: 'E-commerce de Cuero',
    description: 'Dos tiendas online desarrolladas de punta a punta: Magnolia Joyas (joyería en plata 925 y oro 18k) y Fernanda Saladino (carteras y accesorios artesanales). Auth, carrito, admin panel, pedidos y estadísticas.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind', 'PWA'],
    accent: '#6366f1',
    link: 'https://fernanda-saladino.vercel.app/',
    featured: true,
  },
  {
    slug: 'heroes',
    category: 'Plataforma · Full Stack',
    title: 'Héroes Cercanos',
    description: 'Plataforma solidaria que conecta a la comunidad con bomberos voluntarios. Chatbot con Voiceflow, mapa con Leaflet, donaciones con Mercado Pago, métricas de admin y autenticación con Google.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Leaflet', 'Mercado Pago'],
    accent: '#f59e0b',
    link: 'https://heroes-cercanos-front.onrender.com/',
    featured: true,
  },
  {
    slug: 'icc',
    category: 'Automatización · IA',
    title: 'Impacto Notas de Prensa',
    description: 'Sistema automatizado que evalúa el impacto real de notas de prensa en radio y TV. Análisis emocional con IA, métricas objetivas y resúmenes ejecutivos basados en datos reales.',
    tech: ['n8n', 'TypeScript', 'OpenAI API', 'Node.js', 'REST APIs'],
    accent: '#e879f9',
    link: 'https://impacto-notas-prensa.vercel.app/',
  },
];