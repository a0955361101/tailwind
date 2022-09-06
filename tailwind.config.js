/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.js", "src/**/*.jsx", "src/*.js", "src/*.jsx", "src/**/*.html", "src/*.html"],
  theme: {
    extend: {
      width: {
        '2': '2px',
      },
      height: {
        '2': '2px',
      },
      colors: {
        'transparent5': 'rgba(0,0,0,.5)',
        'transparent': 'rgba(0,0,0,0)',
        'react': ' #61dafb',
        'angular': '#C3002F',
        'vue': 'rgb(66, 184, 131)'
      },
      boxShadow: {
        box: "0 15px 25px rgba(0,0,0,.6)",
        'react-btn': `0 0 5px #61dafb,
        0 0 25px #61dafb,
        0 0 50px #61dafb,
        0 0 100px #61dafb`,
        'vue-btn': `0 0 5px rgb(66, 184, 131),
        0 0 25px rgb(66, 184, 131),
        0 0 50px rgb(66, 184, 131),
        0 0 100px rgb(66, 184, 131)`,
        'angular-btn': `0 0 5px #C3002F,
        0 0 25px #C3002F,
        0 0 50px #C3002F,
        0 0 100px #C3002F`,

      },
      keyframes: {
        btn1: {
          '0%': { left: '-100%' },
          '50%,100%': { left: '100%' }
        },
        btn2: {
          '0%': { top: '-100%' },
          '50%,100%': { top: '100%' }
        },
        btn3: {
          '0%': { right: '-100%' },
          '50%,100%': { right: '100%' }
        },
        btn4: {
          '0%': { bottom: '-100%' },
          '50%,100%': { bottom: '100%' }
        }
      },
    },
  },
  plugins: [],
};
