const opacity = Object.fromEntries(
  Array.from({ length: 101 }, (_, i) => [String(i), String(i / 100)]),
)

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        graphite: '#141414',
        paper: '#f4f3ef',
        paper2: '#e7e5de',
        ash: '#8c8c86',
        accent: '#00b473',
        signal: '#ffd400',
        coral: '#ff5a52',
      },
      opacity,
      fontFamily: {
        display: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
    },
  },
}
