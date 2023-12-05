/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontSize: {
        clamp: "clamp(1.7rem,4rem,6vw)",
      },
      backgroundColor: {
        glovo: '#ffc244'
      },
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'inset': 'inset 0 0 10px rgba(0, 0, 0, 0.1)',
        'light': '0 0 10px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}

