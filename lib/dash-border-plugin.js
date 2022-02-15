/* eslint-disable import/no-extraneous-dependencies */
const plugin = require('tailwindcss/plugin');

const dashBorderPlugin = plugin(({ addUtilities, theme }) => {
  const positions = ['top', 'right', 'bottom', 'left'];
  const themeValues = [];

  // Get all color values from the theme
  // and push them to the themeValues array.
  Object.entries(theme('colors')).map(([key, value]) => {
    if (typeof value === 'string') {
      themeValues.push([key, value]);
    } else {
      Object.keys(value).map((nestedValue) => {
        themeValues.push([`${key}-${nestedValue}`, value[nestedValue]]);
      });
    }
  });

  // Set CSS variables for border colors
  const boderColorVariables = themeValues.map(([key, value]) => ({
    [`.border-${key}`]: {
      '--border-color': value,
    },
  }));

  // Method to better control dashed borders taken from
  // https://github.com/osuke/postcss-dotted-border
  const borderDashUtilites = positions.map((pos) => (Object.entries(theme('borderWidth')).map(([widthKey, widthValue]) => {
    const direction = pos === 'top' || pos === 'bottom' ? 'right' : 'bottom';
    const dashSize = theme(`borderDashed.${widthKey}`) || 0;
    const dashGap = theme(`borderGap.${widthKey}`) || 0;
    const dashTotal = parseInt(dashSize, 10) + parseInt(dashGap, 10);

    return {
      [`.border-${pos.charAt(0)}-${widthKey}`]: {
        'background-image': `linear-gradient(to ${direction}, var(--border-color), var(--border-color) ${dashSize}, transparent ${dashSize}, transparent ${dashGap})`,
        'background-size': direction === 'right' ? `${dashTotal}px ${widthValue}` : `${widthValue} ${dashTotal}px`,
        'background-position': `${pos} -${widthValue} center`,
        'background-repeat': direction === 'right' ? 'repeat-x' : 'repeat-y',
        [`border-${pos}`]: `${widthValue} solid transparent`,
      },
    };
  })));

  // Add CSS classes to Tailwind
  addUtilities(boderColorVariables);
  addUtilities(borderDashUtilites);
});

module.exports = dashBorderPlugin;
