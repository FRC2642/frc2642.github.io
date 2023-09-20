// to rebuild: npx tailwind --input assets/css/main.css --output assets/css/style.css --watch

const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': {
          DEFAULT: '#B7E495',
          50: '#B7E495',
          100: '#B7E495',
          200: '#B7E495',
          300: '#B7E495',
          400: '#B7E495',
          500: '#B7E495',
          600: '#9CDA6C',
          700: '#80D043',
          800: '#67B42D',
          900: '#508B23',
          950: '#44761E'
        },
        'secondary': {
          DEFAULT: '#13FD52',
          50: '#9CFEB6',
          100: '#8DFEAB',
          200: '#6EFE94',
          300: '#50FD7E',
          400: '#32FD68',
          500: '#13FD52',
          600: '#02D63B',
          700: '#029E2B',
          800: '#01671C',
          900: '#002F0D',
          950: '#001305'
        },
        'neutral': {
          DEFAULT: '#6B7280',
          50: '#CDD0D5',
          100: '#C2C5CC',
          200: '#ACB0BA',
          300: '#969BA7',
          400: '#7F8694',
          500: '#6B7280',
          600: '#515761',
          700: '#383C43',
          800: '#1E2024',
          900: '#050506'
        },
        // To change these, use https://www.tailwindshades.com/ with https://tailwindcss.com/docs/customizing-colors or create your own custom colors.
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.zinc[800]'),
            '--tw-prose-headings': theme('colors.zinc[900]'),
            '--tw-prose-lead': theme('colors.zinc[700]'),
            '--tw-prose-links': theme('colors.zinc[900]'),
            '--tw-prose-bold': theme('colors.zinc[900]'),
            '--tw-prose-counters': theme('colors.zinc[600]'),
            '--tw-prose-bullets': theme('colors.zinc[400]'),
            '--tw-prose-hr': theme('colors.zinc[300]'),
            '--tw-prose-quotes': theme('colors.zinc[900]'),
            '--tw-prose-quote-borders': theme('colors.zinc[300]'),
            '--tw-prose-captions': theme('colors.zinc[700]'),
            '--tw-prose-code': theme('colors.indigo[500]'),
            '--tw-prose-pre-code': theme('colors.indigo[300]'),
            '--tw-prose-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-th-borders': theme('colors.zinc[300]'),
            '--tw-prose-td-borders': theme('colors.zinc[200]'),
            '--tw-prose-invert-body': theme('colors.zinc[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.zinc[300]'),
            '--tw-prose-invert-links': theme('colors.indigo[400]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.zinc[400]'),
            '--tw-prose-invert-bullets': theme('colors.zinc[200]'),
            '--tw-prose-invert-hr': theme('colors.zinc[500]'),
            '--tw-prose-invert-quotes': theme('colors.zinc[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.zinc[700]'),
            '--tw-prose-invert-captions': theme('colors.zinc[400]'),
            '--tw-prose-invert-code': theme('colors.indigo[400]'),
            '--tw-prose-invert-pre-code': theme('colors.indigo[300]'),
            '--tw-prose-invert-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-invert-th-borders': theme('colors.zinc[100]'),
            '--tw-prose-invert-td-borders': theme('colors.zinc[500]'),
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
