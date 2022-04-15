module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
