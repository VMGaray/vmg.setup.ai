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
    slug: 'fernanda-saladino',
    category: 'E-commerce · Full Stack',
    title: 'Fernanda Saladino',
    description: 'Tienda online para artesana de carteras y accesorios de cuero hechos a mano. Catálogo con filtros, carrito persistente, favoritos, historial de pedidos, checkout por WhatsApp y PWA instalable.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind', 'PWA'],
    accent: '#6366f1',
    link: 'https://fernanda-saladino.vercel.app/',
    featured: true,
  },
  {
    slug: 'magnolia-joyas',
    category: 'E-commerce · Full Stack',
    title: 'Magnolia Joyas',
    description: 'Joyería online con stack full stack propio: NestJS + PostgreSQL. Auth con 2FA para admins, Mercado Pago, imágenes en Cloudinary, calificaciones de productos y panel de administración completo.',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Mercado Pago', 'Cloudinary', 'TypeORM'],
    accent: '#d4a017',
    link: 'https://www.magnoliajoyas.com.ar/',
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
    slug: 'calamuchita',
    category: 'Plataforma · Full Stack · PWA',
    title: 'Calamuchita App',
    description: 'Directorio digital y plataforma gastronómica para el Valle de Calamuchita. Conecta turistas y residentes con los 16 municipios del valle. Dashboard para negocios, pedidos en tiempo real, carta interactiva, mapa con Mapbox y panel admin completo.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Mapbox', 'Tailwind', 'PWA'],
    accent: '#2D9E6E',
    link: 'https://www.calamuchita-app.com.ar/',
    featured: true,
  },
  {
    slug: 'lachamana',
    category: 'Shopify · Luxury · Frontend',
    title: 'La Chamana',
    description: 'Tema Shopify personalizado para villa de lujo en Tulum, México. Hero con reservas directas vía Cloudbeds, carrusel de 9 espacios, galería de scroll infinito, experiencias con acordeones y suscripción a Klaviyo.',
    tech: ['Shopify', 'Liquid', 'Vanilla JS', 'Cloudbeds', 'Klaviyo'],
    accent: '#C4956A',
    link: 'https://lachamana.com/',
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