/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          light: 'var(--color-text-light)',
          muted: 'var(--color-text-muted)',
        },
      },
      backgroundColor: {
        skin: {
          default: 'var(--color-fill-default)',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
