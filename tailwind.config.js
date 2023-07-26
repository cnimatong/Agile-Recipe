/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
                homeDivider: '#e1e1e1',
                recipeBG: '#e4f4ff',
                blueDiv: '#a5dbff',
                borders: '#45b7ff',
                buttons: '#FFAE42'
              },
      screens: {
                '-2xl': { max: '1600px' },
                // => @media (max-width: 1600px) {...}
                '-xl': { max: '1440px' },
                // => @media (max-width: 1440px) {...}
                '-lg': { max: '1280px' },
                // => @media (max-width: 1280px) {...}
                '-md': { max: '1024x' },
                // => @media (max-width: 1024px) {...}
                '-sm': { max: '750px' },
                // => @media (max-width: 750px) {...}
                '-xs': { max: '400px' },
                // => @media (max-width: 400px) {...}
              },
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       // backgroundImage: {
//       //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//       //   'gradient-conic':
//       //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       // },
//       colors: {
//         homeDivider: '#e1e1e1',
//         recipeBG: '#e4f4ff',
//         blueDiv: '#a5dbff',
//         borders: '#45b7ff'
//       },
//       screens: {
//         '-2xl': { max: '1600px' },
//         // => @media (max-width: 1600px) {...}
//         '-xl': { max: '1440px' },
//         // => @media (max-width: 1440px) {...}
//         '-lg': { max: '1280px' },
//         // => @media (max-width: 1280px) {...}
//         '-md': { max: '1024x' },
//         // => @media (max-width: 1024px) {...}
//         '-sm': { max: '750px' },
//         // => @media (max-width: 750px) {...}
//         '-xs': { max: '400px' },
//         // => @media (max-width: 400px) {...}
//       }
//       // fontSize: {

//       // }
//     },
//   },
//   plugins: [],
// }
