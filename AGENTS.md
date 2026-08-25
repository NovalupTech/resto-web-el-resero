# AGENTS.md - El Resero Restaurant Website

## Project Overview

This is an Astro + TailwindCSS restaurant website template. The project is a static site generator built with Astro framework, using Tailwind CSS for styling and TypeScript for type safety in `.astro` component scripts.

---

## Build / Lint / Test Commands

### Development
```bash
pnpm dev          # Start development server with hot reload
```

### Production
```bash
pnpm build        # Build for production (outputs to dist/)
pnpm preview      # Preview production build locally
```

### Running a Single Test
- **No tests configured** - This project does not currently have a test suite set up. If you add tests, use:
```bash
pnpm test               # Run all tests
pnpm test --watch      # Run tests in watch mode
pnpm test path/to/test # Run specific test file
```

### Linting
- **No lint configured** - The project does not have ESLint or Prettier set up. Consider adding:
```bash
pnpm add -D eslint @astrojs/eslint-config-typescript
pnpm add -D prettier prettier-plugin-astro
```

---

## Code Style Guidelines

### File Organization
- **Components**: `src/components/` - Main page sections (Hero, Menu, Gallery, Contact, etc.)
- **UI Components**: `src/components/ui/` - Reusable UI elements (MenuButton, Cocarda, etc.)
- **Layouts**: `src/layouts/` - Page layouts (main Layout.astro)
- **Pages**: `src/pages/` - Route pages (index.astro)
- **Utils**: `src/utils/` - Constants and utilities (const.ts)

### Astro Component Structure

```astro
---
// Frontmatter: imports, constants, types (between --- fences)
import Component from "./Component";
import { constant } from "../utils/const";

export interface Props {
  title: string;
  description?: string;
}

const { title, description = "Default" } = Astro.props;
---

<!-- Template: HTML with Tailwind classes -->
<section class="py-20">
  <h1>{title}</h1>
</section>

<!-- Client-side scripts -->
<script>
  // TypeScript/JavaScript for interactivity
  document.addEventListener('DOMContentLoaded', () => {
    // implementation
  });
</script>
```

### Imports

- Group imports in the frontmatter section (between `---` fences)
- Sort imports alphabetically
- Use relative imports (`./` for same-level, `../` for parent)
- Import components, utilities, and constants at the top

```astro
---
import { menu_buttons } from "../utils/const";
import MenuButton from "./ui/MenuButton.astro";
import MenuCategory from "./ui/MenuCategory.astro";
import { formatPrice } from "../utils/helpers";
---
```

### TypeScript Usage

- Use TypeScript in `<script>` tags for type safety
- Use type casting when working with DOM elements:
```typescript
const links = document.querySelectorAll('a[href^="#"]') as NodeListOf<HTMLAnchorElement>;
```
- Define Props interfaces in frontmatter for component props
- Use `astro/tsconfigs/strict` - strict TypeScript is enabled

### Naming Conventions

- **Components**: PascalCase (e.g., `MenuButton.astro`, `Header.astro`)
- **Constants/utils**: camelCase (e.g., `const.ts`, `formatPrice`)
- **CSS classes**: Tailwind utility classes (kebab-case)
- **IDs/Classes**: Use semantic names (e.g., `mobile-menu-button`, `menu-category`)
- **Props**: camelCase

### Tailwind CSS Guidelines

- Use utility classes directly in templates
- Custom colors defined in `tailwind.config.mjs`:
  - `primary` - Main brand color (currently yellow)
  - `secondary` - Dark/neutral color
- Custom fonts: `font-display` (Playfair Display), `font-body` (Inter)
- Responsive design: Use `md:`, `lg:` prefixes for breakpoints

### Error Handling

- Use optional chaining (`?.`) when accessing potentially undefined properties
- Provide fallback values for environment variables:
```typescript
const siteUrl = import.meta.env.PUBLIC_SITE_URL || Astro.url.origin;
```
- Handle missing images gracefully with `onerror` attributes

### Environment Variables

- All public variables must start with `PUBLIC_`
- Access via `import.meta.env.PUBLIC_*`
- Required variables in `.env`:
  - `PUBLIC_NAME` - Restaurant name
  - `PUBLIC_SITE_URL` - Production URL (critical for social sharing)
  - `PUBLIC_LOGO` - Logo URL
  - `PUBLIC_ADDRESS` - Restaurant address
  - `PUBLIC_PHONE` - Phone number

### JavaScript Best Practices

- Use `DOMContentLoaded` event for client-side scripts
- Prefer vanilla JavaScript over frameworks (no React/Vue)
- Use `querySelector` and `querySelectorAll` with proper type casting
- Avoid inline event handlers; use `addEventListener`

### Accessibility

- Include `aria-label` on interactive elements without visible text
- Use semantic HTML (`<nav>`, `<header>`, `<section>`, `<main>`)
- Ensure color contrast meets WCAG standards
- Add `alt` attributes to all images

### SEO Considerations

- Update meta tags in `Layout.astro` for each page
- Include Open Graph and Twitter Card tags
- Add Schema.org JSON-LD for structured data
- Use semantic heading hierarchy (h1 → h2 → h3)

---

## Common Tasks

### Adding a New Menu Category
1. Add category to `src/utils/const.ts` in `menu_buttons` array
2. Add corresponding menu section in `src/components/Menu.astro`

### Modifying Colors
Edit `tailwind.config.mjs`:
- Change `PRIMARY_COLORS` and `SECONDARY_COLORS` constants
- Select from predefined palettes (WARM_ORANGE, ELEGANT_RED, NATURAL_GREEN, etc.)

### Adding New Components
1. Create file in `src/components/` or `src/components/ui/`
2. Import and use in parent component or page

---

## Notes for AI Agents

- This is a **static site** - no server-side runtime
- No database - content is hardcoded in components
- No API routes - form submissions require external service
- Spanish language content by default
- Currency is Argentine Pesos (ARS)
- Deployment: Vercel, Netlify, GitHub Pages, or Cloudflare Pages
