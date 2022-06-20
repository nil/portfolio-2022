module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Aeonik Fono', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Arial', 'sans-serif'],
      body: ['Untitled Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Arial', 'sans-serif'],
    },
    fontSize: {
      '7xl': ['5.25rem', {
        letterSpacing: '-0.03em',
        lineHeight: '1',
      }],
      '6xl': ['4.4rem', {
        letterSpacing: '-0.03em',
        lineHeight: '1',
      }],
      '5xl': ['3.65rem', {
        letterSpacing: '-0.03em',
        lineHeight: '1.1',
      }],
      '4xl': ['3.05rem', {
        letterSpacing: '-0.02em',
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
        letterSpacing: '-0.015em',
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
        letterSpacing: '0',
        lineHeight: '1.4',
      }],
      xs: ['0.7rem', {
        letterSpacing: '0',
        lineHeight: '1.4',
      }],
    },
    extend: {
      colors: {
        brand: {
          10: '#EEEEFD',
          20: '#CFCCF9',
          30: '#9787F5',
          40: '#6E35E7',
          50: '#42278D',
          60: '#2C1E50',
        },
      },
      spacing: {
        '2xs': '8px',
        xs: '16px',
        s: '32px',
        m: '48px',
        l: '80px',
        xl: '128px',
        '2xl': '208px',
      },
      transitionDuration: {
        DEFAULT: '1000ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
};
