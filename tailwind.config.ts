import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          1: '#0b0f1a',
          2: '#0d1220',
        },
        primary: {
          1: '#94a3b8',
          2: '#64748b'
        },
        secondary: {
          1: '#a086f0',
          2: '#251e51'
        },
        divider: {
          1: '#1e293b',
          2: '#334155'
        }
      },
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
