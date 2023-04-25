/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      lineHeight: {
        'extra-tight': '1.2',
      },
    },
  },
  plugins: [],
}

