# Template de Restaurante - Astro + TailwindCSS

Un template moderno y completamente responsivo para páginas web de restaurantes, construido con Astro y TailwindCSS.

## ✨ Características

- **Diseño Moderno**: Interfaz elegante y profesional
- **Completamente Responsivo**: Optimizado para todos los dispositivos
- **Secciones Completas**:
  - Hero con imagen de fondo
  - Amenidades del restaurante
  - Menú interactivo con categorías
  - Galería de imágenes con lightbox
  - Contacto con mapa de Google Maps
  - Formulario de reservas
- **Botones Flotantes**: WhatsApp e Instagram
- **Navegación Suave**: Scroll suave entre secciones
- **SEO Optimizado**: Meta tags y estructura semántica

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación
```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build

# Vista previa de la build
pnpm preview
```

## 🎨 Personalización

### 1. Logo y Branding
- Reemplaza `/public/logo-placeholder.svg` con tu logo
- Actualiza el nombre del restaurante en `src/components/Header.astro`
- Modifica los colores en `tailwind.config.mjs`
- **IMPORTANTE**: Crea `/public/og-image.jpg` (1200x630px) para redes sociales

### 2. Variables de Entorno
Copia `env.example` a `.env` y personaliza:
```bash
cp env.example .env
```

**⚠️ IMPORTANTE para Redes Sociales:**
- `PUBLIC_SITE_URL`: Cambia a tu dominio real (ej: `https://mirestaurante.com`)
- `PUBLIC_NAME`: Nombre de tu restaurante
- `PUBLIC_LOGO`: Ruta a tu logo
- Actualiza teléfono, redes sociales, mapa

**🚨 Problema Común:**
Si al compartir en WhatsApp aparece `localhost`, es porque `PUBLIC_SITE_URL` no está configurado correctamente.

### 2. Contenido
- **Hero**: Edita `src/components/Hero.astro` para cambiar el título y descripción
- **Menú**: Actualiza los platos en `src/components/Menu.astro`
- **Contacto**: Modifica la información de contacto en `src/components/Contact.astro`
- **Amenidades**: Personaliza las amenidades en `src/components/Amenities.astro`

### 3. Imágenes
- Reemplaza las URLs de Unsplash con tus propias imágenes
- Añade imágenes a `/public/` y actualiza las referencias

### 4. Mapa y Ubicación
- En `src/components/Contact.astro`, actualiza:
  - El iframe del mapa de Google Maps con tu ubicación
  - La dirección del restaurante
  - Los enlaces de "Cómo llegar"

### 5. Redes Sociales
- Actualiza los enlaces de redes sociales en:
  - `src/layouts/Layout.astro` (botones flotantes)
  - `src/components/Contact.astro`
  - `src/components/Footer.astro`

### 6. Información de Contacto
- Teléfono: Actualiza `+1234567890` con tu número
- Email: Cambia `info@turestaurante.com`
- Horarios: Modifica en `src/components/Amenities.astro` y `src/components/Footer.astro`

## 📱 QR para Menú

El template incluye una sección para código QR que apunte al menú. Para implementarlo:

1. Genera un QR que apunte a `tu-dominio.com/#menu`
2. Reemplaza el placeholder en `src/components/Menu.astro`
3. O usa servicios como QR-Code-Generator.com

## 🎯 Funcionalidades Interactivas

### Menú por Categorías
El menú se organiza en pestañas (Entradas, Principales, Postres, Bebidas) con JavaScript vanilla.

### Galería con Lightbox
La galería incluye un lightbox modal con navegación por teclado.

### Formulario de Reservas
Formulario funcional que captura los datos (requiere backend para procesar).

### Navegación Móvil
Menú hamburguesa completamente funcional para dispositivos móviles.

## 🛠️ Tecnologías Utilizadas

- **Astro**: Framework web moderno
- **TailwindCSS**: Framework de CSS utilitario
- **Font Awesome**: Iconos
- **Google Fonts**: Tipografías (Playfair Display + Inter)
- **Unsplash**: Imágenes de ejemplo (reemplázalas con las tuyas)

## 📋 Comandos Disponibles

| Comando | Acción |
|---------|--------|
| `pnpm dev` | Inicia servidor de desarrollo |
| `pnpm build` | Construye para producción |
| `pnpm preview` | Vista previa de la build |

## 🌐 Deployment

Este template puede desplegarse en cualquier servicio que soporte sitios estáticos:

- **Vercel**: `vercel --prod`
- **Netlify**: Conecta tu repositorio
- **GitHub Pages**: Usa GitHub Actions
- **Cloudflare Pages**: Conecta tu repositorio

## 📞 Soporte

Para dudas sobre la personalización del template, revisa la documentación de:
- [Astro](https://docs.astro.build)
- [TailwindCSS](https://tailwindcss.com/docs)

---

¡Disfruta tu nuevo sitio web de restaurante! 🍽️