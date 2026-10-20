# VMG · Portfolio

Sitio personal / portfolio construido con **Next.js 16 + React 19 + TypeScript + Tailwind CSS v4**, que presenta los proyectos de desarrollo web realizados.

## Stack técnico del sitio

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- ESLint

## Estructura relevante

```
src/
  app/
    page.tsx              # Home
    proyectos/
      page.tsx             # Listado completo de proyectos
      [slug]/page.tsx       # Casos de estudio detallados (Martins, Calamuchita)
  components/
    Header.tsx, Hero.tsx, About.tsx, Services.tsx, Contact.tsx, Footer.tsx
    portfolio/
      Portfolio.tsx         # Sección de portfolio en el Home
      projects.data.ts      # Fuente única de datos de los proyectos
    projects/
      Martins.tsx           # Caso de estudio: Martins Perforaciones
      Calamuchita.tsx        # Caso de estudio: Calamuchita App
```

## Proyectos

### 🟢 Calamuchita App
**Plataforma · Full Stack · PWA**

Directorio digital y plataforma gastronómica para el Valle de Calamuchita. Conecta turistas y residentes con los 16 municipios del valle. Dashboard para negocios, pedidos en tiempo real, carta interactiva, mapa con Mapbox y panel admin completo.

- **Tech:** Next.js, TypeScript, Supabase, Mapbox, Tailwind, PWA
- **Link:** https://www.calamuchita-app.com.ar/

### 🟤 La Chamana
**Shopify · Luxury · Frontend**

Tema Shopify personalizado para villa de lujo en Tulum, México. Hero con reservas directas vía Cloudbeds, carrusel de 9 espacios, galería de scroll infinito, experiencias con acordeones y suscripción a Klaviyo.

- **Tech:** Shopify, Liquid, Vanilla JS, Cloudbeds, Klaviyo
- **Link:** https://lachamana.com/

### 🔵 ICC Calamuchita
**Web · Landing Institucional**

Landing institucional de ICC Calamuchita – Ing. Carbone Construcciones: movimiento de suelos, construcción de piscinas, tratamiento de aguas residuales y redes de agua en el Valle de Calamuchita. Sitio one-page con navegación por anclas, galería de obra, SEO con JSON-LD y contacto directo por WhatsApp.

- **Tech:** Next.js 16, React 19, Tailwind CSS v4, Framer Motion, Embla Carousel, TypeScript
- **Link:** https://icc-calamuchita.com.ar

### 🟡 Magnolia Joyas
**E-commerce · Full Stack**

Joyería online con stack full stack propio: NestJS + PostgreSQL. Auth con 2FA para admins, Mercado Pago, imágenes en Cloudinary, calificaciones de productos y panel de administración completo.

- **Tech:** Next.js, NestJS, PostgreSQL, Mercado Pago, Cloudinary, TypeORM
- **Link:** https://www.magnoliajoyas.com.ar/

### 🟢 Martins Perforaciones
**Web · PWA · Automatización**

Landing Page y PWA para empresa de perforaciones de agua en Calamuchita. Sistema de presupuestos inteligente, panel administrativo y envío automático por email desde el celular.

- **Tech:** Next.js, TypeScript, Tailwind, PWA, Email Automation
- **Link:** https://martins-perforaciones-app.vercel.app/

### 🟣 Fernanda Saladino
**E-commerce · Full Stack**

Tienda online para artesana de carteras y accesorios de cuero hechos a mano. Catálogo con filtros, carrito persistente, favoritos, historial de pedidos, checkout por WhatsApp y PWA instalable.

- **Tech:** Next.js, TypeScript, Supabase, PostgreSQL, Tailwind, PWA
- **Link:** https://fernanda-saladino.vercel.app/

### 🟠 Héroes Cercanos
**Plataforma · Full Stack**

Plataforma solidaria que conecta a la comunidad con bomberos voluntarios. Chatbot con Voiceflow, mapa con Leaflet, donaciones con Mercado Pago, métricas de admin y autenticación con Google.

- **Tech:** Next.js, TypeScript, PostgreSQL, Leaflet, Mercado Pago
- **Link:** https://heroes-cercanos-front.onrender.com/

### 🩷 Impacto Notas de Prensa
**Automatización · IA**

Sistema automatizado que evalúa el impacto real de notas de prensa en radio y TV. Análisis emocional con IA, métricas objetivas y resúmenes ejecutivos basados en datos reales.

- **Tech:** n8n, TypeScript, OpenAI API, Node.js, REST APIs
- **Link:** https://impacto-notas-prensa.vercel.app/

### 🔔 Timbre Inteligente QR
**IoT · Automatización · Full Stack**

Timbre sin cables ni instalación eléctrica: un QR en la puerta y el aviso llega al instante al celular de toda la familia por Telegram. Responden con un toque y el visitante ve la respuesta en pantalla. Incluye anti-spam, avisos entre la familia y una web animada pensada para el celular. El primer paso hacia una casa inteligente.

- **Tech:** Next.js, TypeScript, Supabase, Telegram Bot, Tailwind, Vercel
- **Link:** sin web pública (timbre de una casa) — demo a pedido por WhatsApp

---

> 📌 La fuente de verdad de estos datos es [`src/components/portfolio/projects.data.ts`](./src/components/portfolio/projects.data.ts). Si agregás o modificás un proyecto ahí, actualizá también esta tabla.

## Getting Started

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts

| Script | Descripción |
|---|---|
| `npm run dev` | Corre el servidor de desarrollo |
| `npm run build` | Genera el build de producción |
| `npm run start` | Corre el servidor en modo producción |
| `npm run lint` | Corre ESLint |
