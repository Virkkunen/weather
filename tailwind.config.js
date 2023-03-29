/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Fira Sans"', 'sans-serif'],
      mono: ['Fira Code', 'monospace']
    }
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      defaultFlavour: 'mocha'
    }),
    require('@tailwindcss/forms'),
  ],
}

