// Design system tokens centralizing spacing, typography, z-index, and transitions.
export const colors = {
  bg: {
    base: '#0b0d17',
    subtle: '#121524',
    elevate: '#1d2233'
  },
  brand: {
    purple: '#8b5cf6',
    glow: '#a855f7',
    pink: '#ec4899'
  },
  text: {
    primary: '#ffffff',
    secondary: '#cbd5e1',
    muted: '#94a3b8'
  },
  accent: {
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444'
  }
};

export const radii = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  full: '999px'
};

export const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64
};

export const shadows = {
  soft: '0 4px 24px -2px rgba(0,0,0,0.25)',
  glow: '0 0 24px -2px rgba(168,85,247,0.45)',
  glass: '0 8px 40px -8px rgba(0,0,0,0.55)'
};

export const transitions = {
  default: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
  fast: 'all 0.15s cubic-bezier(0.4,0,0.2,1)'
};

export const zIndex = {
  base: 0,
  below: -1,
  elevated: 10,
  overlay: 100,
  modal: 1000
};

export const typography = {
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    display: 'Poppins, Inter, system-ui, sans-serif'
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem'
  }
};

export const tokens = {
  colors,
  radii,
  spacing,
  shadows,
  transitions,
  zIndex,
  typography
};

export default tokens;