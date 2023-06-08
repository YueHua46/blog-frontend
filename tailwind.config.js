/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      margin: {
        top: '0',
        right: 'auto',
        bottom: '0',
        left: 'auto',
      },
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
