/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'liquid-glow': '0 16px 36px -10px rgba(42, 65, 105, 0.08), 0 6px 16px -4px rgba(42, 65, 105, 0.04)',
        'specular': 'inset 0 1.5px 0.5px rgba(255, 255, 255, 0.9)',
        'refraction': 'inset 0 -1px 1px rgba(170, 192, 224, 0.18)',
        'liquid-composite': '0 16px 36px -10px rgba(42, 65, 105, 0.08), 0 6px 16px -4px rgba(42, 65, 105, 0.04), inset 0 1.5px 0.5px rgba(255, 255, 255, 0.9), inset 0 -1px 1px rgba(170, 192, 224, 0.18)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fluid': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'liquid': '24px',
      }
    }
  }
};
