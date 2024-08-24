/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        primary: 'linear-gradient(90deg, #9272A1 0%, #4A569A 46%, #112145 100%)',
        HypelifyTargetingTools: "url('/images/hypelifyBusiness/HypelifyTargetingTools.svg')",
        contact: "url('/HypelifyContactUs.png')",
        "hypelify-business": "url('/Hypelify.png')",
        "home": "url('/Home.png')",
        "about": "url('/Hypelify About Us.png')",
        "team": "url('/HypelifyContactUs.png')",
        token: "url('/Hypelify Token.png')",
        hypex: "url('/Hypelify Token.png')",
        imageBanner: "url('/images/banner.png')"
      },
      colors: {
        secondary: '#121315',
        tertiary: '#112145',
        white: '#ffffff',
        navbar: "rgba(66, 65, 84, 0.4)",
        desc: "#B7B4BB",
        roadmapCard: "rgba(20, 20, 21, 0.5)",
        darkBtn: "rgba(66, 65, 84, 0.4)",
        primaryDark: "rgba(158, 148, 225, 1)",
        primaryDark2: "rgba(49, 41, 74, 1)",
        games: "rgba(45, 45, 46, 0.2)",
        gray2: "#232323"
      },
      fontSize: {
        title60: "3.8rem"
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },

  },
  plugins: [],
}