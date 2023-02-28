const base = {
  'space-green-500': '#3ACFC0',
  'space-green-400': '#008679',
  'space-green-300': '#3ACFC0',
  'space-green-200': '#78E7DC',
  'space-green-100': '#C2FFF9',
  'icy-blue-500': '#16182C',
  'icy-blue-400': '#00309E',
  'icy-blue-300': '#0A54FF',
  'icy-blue-200': '#6694FF',
  'icy-blue-100': '#C2D4FF',
  'red-500': '#3D000F',
  'red-400': '#840021',
  'red-300': '#CA2E55',
  'red-200': '#E4718E',
  'red-100': '#FFC2D1',
  'sand-500': '#3D2B00',
  'sand-400': '#9E6F00',
  'sand-300': '#FFB400',
  'sand-200': '#FFD061',
  'sand-100': '#FFEDC2',
  'black-700': '#050405',
  'black-600': '#0C0C0E',
  'black-500': '#141316',
  'black-400': '#1B1B1E',
  'black-300': '#222227',
  'black-200': '#2A2A2F',
  'black-100': '#3A3A41',
  'black-50': '#BCBCBC',
  'dark-03': '#141316',
  'light-01': '#FAFAFF',
  white: '#FFFFFF',
};

// ALIASES
const aliases = {
  'text-default-inverse': 'rgba(255,255,255,0.96)',
  'text-light-inverse': 'rgba(255,255,255,0.75)',
  'text-disabled-inverse': 'rgba(255,255,255,0.5)',
  'text-default': 'rgba(10,10,10,0.96)',
  'text-default-light': 'rgba(10, 10, 10, 0.75)',
  'text-light': 'rgba(10,10,10,0.75)',
  'text-disabled': 'rgba(10,10,10,0.5)',
  'text-success': base['space-green-200'],
  'text-error': base['red-200'],
  'primary-cta': base['space-green-300'],
  'primary-cta-alt': base['space-green-400'],
  'secondary-cta': base['space-green-300'],
  'secondary-cta-alt': base['space-green-400'],
  'warning-cta': base['sand-300'],
  'warning-cta-alt': base['sand-400'],
  link: base['space-green-300'],
  'link-alt': base['space-green-400'],
  'dark-bg': base['black-700'],
  'dark-bg-overlay': 'rgba(10,10,10,0.9)',
  'dark-foreground': base['black-600'],
  'light-foreground': base['black-200'],
  'dark-forefront': base['black-500'],
  'light-forefront': base['black-200'],
  'dark-border': base['black-500'],
  'light-border': base['black-50'],
  'light-bg': base['white'],
  'dark-input-bg': base['black-500'],
  'light-input-bg': base['white'],
  'dark-input-border': base['black-400'],
  'light-input-border': base['black-100'],
};

export const Palette = {
  ...base,
  ...aliases,
};

export default Palette;
