module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('daisyui'),
      require('@tailwindcss/typography')
  ],

  daisyui: {
    themes: [
      {
        'light': {                          /* your theme name */
           'primary' : '#363F73',           /* Primary color */
           'primary-content': '#faf6df',

           'secondary' : '#8C3B68',         /* Secondary color */
           'secondary-content': '',

           'accent' : '#8c3b68',            /* Accent color */
           'accent-content': '',

           'neutral' : '#F2C8A2',           /* Neutral color */
           'neutral-content': '#363F73',

           'background' : '#faf6df',          /* Base color of page, used for blank backgrounds */
           'background-content': '#363F73',

           'info' : '#F28177',              /* Info */
           'success' : '',           /* Success */
           'warning' : '',           /* Warning */
           'error' : '',             /* Error */
        },
        'dark': {                          /* your theme name */
          'primary' : '#625868',           /* Primary color */
          'primary-content': '#F2C8A2',

          'secondary' : '#8C3B68',         /* Secondary color */
          'secondary-content': '#F2C8A2',

          'accent' : '#9a6e86',            /* Accent color */
          'accent-content': '#F2C8A2',

          'neutral' : '#4a3656',           /* Neutral color */
          'neutral-content': '#F2C8A2',

          'background' : '#222A59',          /* Base color of page, used for blank backgrounds */
          'background-content': '#F2C8A2',

          'info' : '#2094f3',              /* Info */
          'success' : '#009485',           /* Success */
          'warning' : '#ff9900',           /* Warning */
          'error' : '#ff5724',             /* Error */
       }
       
      },
    ],
  },
}
