/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      maxWidth : {
        'container' : '1200px'
      },
      margin : {
        'container' : '0 auto',
        '' : '',
      },
      height : {
        '84' : '84px',
        '36' : '36px',
        '38' : '38px',
        '320' : '320px',
        '160' : '160px',
        
      },
      backgroundColor : {
        'navbar' : '#334155',
        'main' : '#475569',
        'buttRed' : '#EF4444',
        'buttAdd' : '#3B82F6',
        'boxData' : '#334155'
        
      },
      textColor : {
        'title' : '#10B981',
        'buttRemove' : '#DC2626',
        'buttEdit' : '#059669',
      },
      width : {
        '168' : '168px',
        '75' : '75px',
        '270' : '270px',
        '117' : '117px',
        '246' : '246px',
      },
      borderRadius : {
        '8' : '8px',
      },
      borderColor : {
        'buttRemove' : '#DC2626',
        'buttEdit' : '#059669',

      }
    },
  },
  plugins: [],
}
