/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        10:'10px',
        12:'12px',
        14:'14px',
        15:'15px',
        16:'16px',
        18:'18px',
        22:'22px',
        25:'25px',
        28:'28px',
        30:'30px',
        50:'50px',
        80:'80px',
        90:'90px',
      },
      paddingTop:{
        35:'35px',
      },
      paddingleft:{
        170:'170px',
      },
      height:{
        1:'1%',
      },
      width:{
        11:'11%',
        15:'15%',
        18:'18%',
      },
      transform:{
        rotate:'230deg',
      },
    },
  },
  plugins: [],
}