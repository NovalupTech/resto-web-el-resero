/** @type {import('tailwindcss').Config} */

// ========================================
// 🎨 PERSONALIZACIÓN DE COLORES RÁPIDA
// ========================================
// Cambia fácilmente los colores de toda la web modificando las paletas below.
// El color 500 es el color principal de cada paleta.

// 🟠 OPCIÓN 1: Naranja Cálido (ACTUAL)
const WARM_ORANGE = {
  50: '#fef7ee',
  100: '#fdecd3', 
  200: '#fbd4a5',
  300: '#f7b56d',
  400: '#f28d33',
  500: '#ee6f0b', // 👈 Color principal
  600: '#df5506',
  700: '#b93e08',
  800: '#94310e',
  900: '#792a0f',
};

// 🔴 OPCIÓN 2: Rojo Elegante
const ELEGANT_RED = {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#dc2626', // 👈 Color principal
  600: '#b91c1c',
  700: '#991b1b',
  800: '#7f1d1d',
  900: '#450a0a',
};

// 🟢 OPCIÓN 3: Verde Natural
const NATURAL_GREEN = {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#16a34a', // 👈 Color principal
  600: '#15803d',
  700: '#166534',
  800: '#14532d',
  900: '#052e16',
};

// 🟤 OPCIÓN 4: Marrón Rústico
const RUSTIC_BROWN = {
  50: '#fdf8f6',
  100: '#f2e8e5',
  200: '#eaddd7',
  300: '#e0cfc5',
  400: '#d2bab0',
  500: '#a67c52', // 👈 Color principal
  600: '#8b5a3c',
  700: '#774936',
  800: '#5d3a2f',
  900: '#3c2415',
};

// 🔵 OPCIÓN 5: Azul Marino Sofisticado
const SOPHISTICATED_NAVY = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#1e40af', // 👈 Color principal
  600: '#1d4ed8',
  700: '#1e3a8a',
  800: '#1e3a8a',
  900: '#172554',
};

// 🖤 COLORES SECUNDARIOS (Grises) - Recomendado mantener
const NEUTRAL_GRAYS = {
  50: '#f8fafc',
  100: '#f1f5f9', 
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b', // 👈 Gris principal
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
};

const BLACK_COLORS = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
};

const DARK_COLORS = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#cbd5e1',
  500: '#0f172a',
  600: '#0f172a',
  700: '#334155',
  800: '#0f172a',
  900: '#0f172a',
};

// color amarillo
const YELLOW_COLORS = {
  50: '#fef7ee',
  100: '#fdecd3',
  200: '#fbd4a5',
  300: '#f7b56d',
  400: '#f7b56d',
  500: '#f7b56d',
  600: '#f7b56d',
  700: '#0f172a',
  800: '#0f172a',
  900: '#0f172a',
}

// ========================================
// 🎯 SELECCIONA TU PALETA AQUÍ
// ========================================
// Cambia estas variables para cambiar toda la web:

const PRIMARY_COLORS = YELLOW_COLORS;     // 👈 Cambia aquí tu color principal
const SECONDARY_COLORS = DARK_COLORS; // 👈 Cambia aquí tu color secundario

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: PRIMARY_COLORS,
        secondary: SECONDARY_COLORS,
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
