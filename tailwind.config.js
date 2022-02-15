const dashBorderPlugin = require('./lib/dash-border-plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#FDFEFF',
      black: '#16171D',
      gray: {
        10: '#F6F7FA',
        20: '#F0F1F5',
        30: '#E9EAF0',
        40: '#DADDE8',
        50: '#CBCDDA',
        60: '#AAAEBF',
        70: '#888C9C',
        80: '#686B79',
        90: '#4A4C59',
        100: '#31333D',
      },
      brand: {
        10: '#EEEEFD',
        20: '#CFCCF9',
        30: '#9787F5',
        40: '#6E35E7',
        50: '#42278D',
        60: '#2C1E50',
      },
      'navbar-logo': 'var(--navbar-logo, #6E35E7)',
      'navbar-border': 'var(--navbar-border, #DADDE8)',
      'navbar-underline': 'var(--navbar-underline, #686B79)',
    },
    fontFamily: {
      sans: ['GT Cinetype', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Arial', 'sans-serif'],
    },
    fontSize: {
      '7xl': ['5.25rem', {
        letterSpacing: '-0.04em',
        lineHeight: '1',
      }],
      '6xl': ['4.4rem', {
        letterSpacing: '-0.04em',
        lineHeight: '1',
      }],
      '5xl': ['3.65rem', {
        letterSpacing: '-0.04em',
        lineHeight: '1.1',
      }],
      '4xl': ['3.05rem', {
        letterSpacing: '-0.03em',
        lineHeight: ' 1.1',
      }],
      '3xl': ['2.1rem', {
        letterSpacing: '-0.02em',
        lineHeight: '1.1',
      }],
      '2xl': ['1.75rem', {
        letterSpacing: '-0.02em',
        lineHeight: '1.2',
      }],
      xl: ['1.45rem', {
        letterSpacing: '-0.02em',
        lineHeight: '1.25',
      }],
      l: ['1.2rem', {
        letterSpacing: '-0.01em',
        lineHeight: '1.3',
      }],
      m: ['1rem', {
        letterSpacing: '-0.01em',
        lineHeight: '1.4',
      }],
      s: ['0.85rem', {
        letterSpacing: '-0.01em',
        lineHeight: '1.4',
      }],
      xs: ['0.7rem', {
        letterSpacing: '0em',
        lineHeight: '1.4',
      }],
    },
    extend: {
      spacing: {
        xs: '16px',
        s: '32px',
        m: '48px',
        l: '80px',
        xl: '128px',
        '2xl': '208px',
      },
      borderWidth: {
        xs: '1.5px',
        s: '2px',
        m: '4px',
        l: '6px',
        xl: '8px',
      },
      borderDashed: {
        xs: '12px',
        s: '24px',
        m: '24px',
        l: '32px',
        xl: '40px',
      },
      borderGap: {
        xs: '4px',
        s: '4px',
        m: '4px',
        l: '8px',
        xl: '8px',
      },
    },
  },
  plugins: [
    dashBorderPlugin,
  ],
};
