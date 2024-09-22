/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', 'sans-serif']
      },
      colors: {
        profile: {
          100: 'hsl(185, 75%, 39%)',
          200: 'hsl(229, 23%, 23%)',
          300: 'hsl(227, 10%, 46%)',
          neutral: 'hsl(0, 0%, 59%)'
        }
      },
      borderWidth: {
        profile: '5px'
      },
      screens: {
        profileMax: '500px'
      },
      backgroundImage: {
        'profile-top': "url('/images/bg-pattern-top.svg')",
        'profile-bot': "url('/images/bg-pattern-bottom.svg')"
      },
      width: {
        'bg-profile': '1500px'
      },
      height: {
        'bg-profile': '1200px'
      },
      translate: {
        'profile-top-desktop': '-500px',
        'profile-top-mobile': '-450px',
        'profile-bot-desktop': '600px',
        'profile-bot-mobile': '450px'
      }
    }
  },
  plugins: []
}
