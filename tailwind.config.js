module.exports = {
    theme: {
      fontFamily: {
        // Here we add the font we want.
        sans: ['Inter'],
      },
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          // Then all the default colors are overwritten
          // So you can set up your own palette!
          yellow: {
            DEFAULT: '#FDD00E',
            50: '#FFFCF2',
            100: '#FFF7D8',
            200: '#FEEEA6',
            300: '#FEE473',
            400: '#FDDA41',
            500: '#FDD00E',
            600: '#D6AE02',
            700: '#A48501',
            800: '#715C01',
            900: '#3E3301',
          },
          indigo: {
            DEFAULT: '#FDD00E',
            50: '#FFFCF2',
            100: '#FFF7D8',
            200: '#FEEEA6',
            300: '#FEE473',
            400: '#FDDA41',
            500: '#FDD00E',
            600: '#D6AE02',
            700: '#A48501',
            800: '#715C01',
            900: '#3E3301',
          },
        },
      },
    },
  }
