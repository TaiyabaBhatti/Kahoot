/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'medium-purple':'#46178F',
        'dark-purple':'#230B47',
         'medium-red':'#C60929',
        'neil-blue': '#0000EE',
        'medium-yellow': '#F5C52D',
        'dark-gray': '#333333',
        'orange-marinda': '#F3AF56',
        'mate-red': '#CF3943',
        'light-textBlue': '#3166C7',
        'medium-green': '#498D2B',
        'dark-green': '#26890C',
        'text-color1':'#F8F7FA',
        'hover-purple':'#311064',
        'light-thingray':'#59596C',
        'dark-boldgray':'#333333',
        'theme-textblue':'#1368CE',
        'white-light':'#FAFAFA',
       'gray-1':'#F4F4F4',
        'gray-2':'#F2F2F2',
            'gray-3':'#E9E9E9',
            'gray-4':'#E3E3E3',
            'gray-5':'#D8D8D8',
            'gray-6':'#D1D1D1',
            'gray-7':'#C1C1C1',
            'gray-8':'#BBBBBB',
        'gray-9':'#808080',
            'gray-10':'#6E6E6E',
            'gray-11':'#696969',
            'gray-12':'#656565',
            'gray-13':'#555555',
            'gray-14':'#333333',
            'gray-15':'#CCCCCC',
            'gray-16':'#222222',
            'see-green':'#028282',
            'darker-blue':'#0E488F',
            
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        'section-b-1': '0px -4px 10px 1px rgba(0, 0, 0, 0.3)',
        'button-b-1': '0px 2px 5px -1px rgba(0, 0, 0, 0.3)',
        'section-a-1': '0px 4px 1px 0px #C60929',
    'section-a-2':'0px 4px 1px 0px #D8D8D8'
      }
    },
  },
  plugins: [],
}

