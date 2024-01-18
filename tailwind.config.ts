import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          850: '#18202F',
          950: '#0b0f1a',
        },
      },
      // colors: {
      //   dark: "#1b1b1b",
      //   light: "#ffffff",
      //   accent: "#7b00d3",
      //   accentDark: "#ffdb4d",
      //   gray: "#747474",
      // },
      fontFamily: {
        in: ["var(--font-in)"],
        mr: ["var(--font-mr)"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
export default config
