/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0A192F',
        'lightNavy': '#112240',
        'lightestNavy': '#233554',
        'slate': '#8892B0',
        'lightSlate': '#ccd6f6',
        'white': '#E6F1FF',
        'green': '#64ffda',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}

