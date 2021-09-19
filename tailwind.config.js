const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    boxShadow: ['responsive', 'hover', 'focus'],
    extend: {
      inset: ['hover'],
    }
  },
  theme: {
    extend: {
      boxShadow: {
        normal: '0px 0px 20px rgba(20, 20, 20, 0.1)',
        hover: '0px 5px 20px rgba(20, 20, 20, 0.15)',
        nav: '0px 4px 8px rgba(20, 20, 20, 0.1)',
        footer: '0px -12px 20px rgba(20, 20, 20, 0.1)'
      },
      backgroundSize: {
        '50%': '50% 100%',
        '75%': '75% 100%',
        '100%': '100% 100%',
        '125%': '125% 125%',
        '150%': '150% 125%'
      },
      fontFamily: {
        sans: ['Objectivity', 'sans-serif'],
      },
      minWidth: {
        '1/4': '25vw',
        '1/2': '50vw',
        '3/4': '75vw'
      },
      minHeight: {
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: {
        primary: '#F84A5E',
        secondary: '#FFB1BC'
      },
      yellow: {
        primary: '#FFB700',
        secondary: '#FFE898'
      },
      blue: {
        primary: '#57CEFE',
        secondary: '#AEE7FF'
      },
      green: {
        primary: '#33D69F',
        secondary: '#8AF4CF'
      },
      purple: {
        primary: '#7A2FF2',
        secondary: '#C6A5FB'
      },
      orange: {
        primary: '#E75300',
        secondary: '#F58647'
      },
      gray: {
        darkest: '#1F2228',
        dark: '#616161',
        light: '#C7C7C7',
        lighter: '#E0E0E0',
        lightest: '#FAFAFA',
        background: "#f9f7f9" // for 404 and partner pages only
      },
      black: {
        primary: "#000000",
      },
      white: {
        primary: '#FFFFFF',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
