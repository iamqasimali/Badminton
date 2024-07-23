/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '360px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'green': "#A1D800",
        "darkgreen": "#387000",
        'white': '#ffffff',
        'light-green-transparent': "#FAFEFB",
        'gradient-theme': 'linear-gradient(#346A04, #A1D800   )',
      },
      boxShadow: {
        'custom': '0px 5px 10px 0px #6177E959',
      },
      backgroundImage: {
        'light-theme': '#A1D8000D',
        'gradient-theme': 'linear-gradient(#346A04, #A1D800)',
        'radial-gradient': 'radial-gradient(64.92% 39.62% at 50.97% 52.22%, #B0F6A5 0%, #FFFFFF 100%)',
      },
      outline: {
        green: '5px solid #A1D800', // Define a custom outline
      },
    },
    
  },
  plugins: [],
}