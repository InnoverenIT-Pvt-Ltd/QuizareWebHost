/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
      'w':'28%',
      'w7':'75rem',
      'w47':'52rem',
      'w81':'81%',
      'w51':'51%',
      'w19':'19rem',
      'wid9/10':'90%',
      'wk':'-webkit-fill-available',
      'w75':'75.3%',
      'w77':'77%',
      'w72':'72%',
      'w65':'65rem',
      'w30':'30rem',
      'w97':'97%',
      'w70':'70%',
          },
          height:{
'hp':'382px',
'h8':'22.666667%',
'h36':'36rem',
'h26':'26rem',
'h34':'34rem',
'h31':'31rem',
'h33':'33rem',
'h37':'37rem',
'h29':'27rem',
'h85':'85rem',
'h73':'73rem',
'h32':'32rem',
'h40':'40rem',
'h44':'44rem'
          },
          borderRadius:{
'rounded2.8':'2.8rem',
'rounded3':'3rem'
          },
          flexGrow: {
            '3': '3'
          },
          lineHeight:{
'l':'1.6rem'
          },
          fontSize:{
            'xsm':'0.85rem'
          },
          colors: {
            'ShopBlue': '#7AB0F7',
            "quizb":"#5E5E5E",
            "quizc":"#BBBBBB",
            "quizbg":"#F0F0F0"
          },
          borderWidth:{
'border-l-5':'5px'
          },
          margin:{
      'margin5':'5%',
      'margin25':'25%',
      'margin18':'18.7rem',
      'margin5.6':'5.6rem',
      'margin10':'10%',
      'margin65':'65%',
      'margin50':'50%',
      'margin39.5':'39.5rem',
      'margin2':'2%',
      'margin40':'40%',
      'margin31':'33%',
      'margin75':'75%',
      'margin60':'60%',
      'margin65':'51.7rem',
      'margin38':'22rem',
          },
        },
    screens: {
      'max-sm': '@media not all and(min-width: 640px){ ... }',
      // => @media (min-width: 640px) { ... }

      'max-md': '@media not all and(min-width: 768px){ ... }',
      // => @media (min-width: 768px) { ... }

      'max-lg': '@media not all and(min-width: 1024px){ ... }',
      // => @media (min-width: 1024px) { ... }

      'max-xl': '@media not all and(min-width: 1280px){ ... }',
      // => @media (min-width: 1280px) { ... }

      'max-2xl': '@media not all and(min-width: 1536px){ ... }',
      // => @media (min-width: 1536px) { ... }
    
    },
    screens: {
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
    }
  
    
  },
  plugins: [],
}