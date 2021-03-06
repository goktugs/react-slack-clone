/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        container: '38px minmax(0, 1fr)',
        chat: '64px auto min-content ',
      },
      gridTemplateColumns: {
        main: '260px auto',
        sidebarChannel: '15% auto',
      },
    },
  },
  plugins: [],
};
