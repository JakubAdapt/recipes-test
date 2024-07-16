import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: 'hsl(var(--color-white) / <alpha-value>)',
        black: 'hsl(var(--color-black) / <alpha-value>)',
        gray: 'hsl(var(--color-gray) / <alpha-value>)',
        orange: 'hsl(var(--color-orange) / <alpha-value>)',
        yellow: 'hsl(var(--color-yellow) / <alpha-value>)',
        green: 'hsl(var(--color-green) / <alpha-value>)',

        'off-black': 'hsl(var(--color-off-black) / <alpha-value>)',
        'off-white': 'hsl(var(--color-off-white) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
