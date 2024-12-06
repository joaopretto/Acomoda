import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'


const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'loginBackground': "url('/images/background.png')"
    },
    fontFamily:{
      'fontName': ['RoadRace']
    },
    extend: {
      borderColor: {
        'customBorder': '#314528'
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        'calibri': ['Calibri','Candara','Segoe','Segoe UI','Optima','Arial','sans-serif']
      },
      colors: {
        'customBackground': '#e4e1e0',
        'customButton': '#e4e1e0',
        'textColor': '#314528'
      },
    },
  },
  plugins: [
    plugin(function({addBase, addComponents, addUtilities, theme }){
      addBase({
        '.btn': {
          padding: `${theme('spacing.2')} ${theme('spacing.9')}`,
          borderRadius: theme('borderRadius.md'),
          border: `2px solid ${theme('borderColor.customBorder')}`,
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.calibri'),
          color: theme('colors.textColor'),
        },
        '.btn-secondary':{
          fontSize: theme('fontSize.2xl'),
          color: theme('colors.white'),
          fontFamily: theme('fontFamily.calibri'),
          backgroundColor: theme('colors.textColor'),
          borderRadius: theme('borderRadius.2xl'),
          width: theme('width.80'),
          height: theme('height.14'),
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s',
          '&:hover': {
            backgroundColor: theme('colors.lime.900'),
          },
        }
      })
      addComponents({
        '.form-primary':{
          borderLeftWidth: theme('borderWidth.DEFAULT'),
          borderRightWidth: theme('borderWidth.DEFAULT'),
          borderBottomWidth: theme('borderWidth.DEFAULT'),
          borderTopWidth: '0',
          width: theme('width.80'),
          height: theme('height.14'),
          borderRadius: theme('borderRadius.md'),
          backgroundColor: 'inherit',
          paddingLeft: theme('spacing.5'),
          fontWeight: theme('fontWeight.medium'),
          '&:focus': {
            outline: 'none',
          },
        }
      })
    })
  ],
}
export default config