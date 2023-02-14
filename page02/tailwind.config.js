/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        10:'10px',
        12:'12px',
        14:'14px',
        64:'64px',
        16:'16px',
      },
     width:{
      98:'98%',
     },
    },
  },
  plugins: [],
}