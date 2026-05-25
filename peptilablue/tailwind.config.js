/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:        '#0B1D3A',
        'navy-mid':  '#0F2444',
        blue:        '#1E3A8A',
        'blue-light':'#2B4FAA',
        'cyan-soft': '#38BDF8',
        silver:      '#C0C6CC',
        steel:       '#94A3B8',
      },
      fontFamily: {
        playfair:    ['Playfair Display', 'serif'],
        montserrat:  ['Montserrat', 'sans-serif'],
        mono:        ['Space Mono', 'monospace'],
        // aliases used in components
        cormorant:   ['Playfair Display', 'serif'],
        josefin:     ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
