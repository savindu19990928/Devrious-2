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
        canvas: '#f3f0ed',
        ink: {
          DEFAULT: '#160a0c',
          50: '#f7f6f5',
          100: '#eeebe8',
          200: '#ded9d4',
          300: '#c5bcb4',
          400: '#a3988e',
          500: '#85796e',
          600: '#6b6056',
          700: '#524840',
          800: '#38312b',
          900: '#211c19',
          950: '#160a0c',
        },
        brand: {
          DEFAULT: '#b3122a',
          light: '#fae8eb',
          50: '#fdf2f4',
          100: '#fbe2e6',
          200: '#f7cad1',
          300: '#f1a4b0',
          400: '#e77387',
          500: '#b3122a',
          600: '#9b0f24',
          700: '#810c1e',
          800: '#680a18',
          900: '#4f0812',
        },
        wine: {
          DEFAULT: '#300d12',
          deep: '#1c070a',
        },
        jade: {
          DEFAULT: '#12B57A',
          light: '#e8f8f2',
          deep: '#0c7a52',
        },
        muted: '#736b66',
        line: '#e5e1dc',
        violet: {
          DEFAULT: '#6d28d9',
          light: '#ede9fe',
          deep: '#4c1d95',
        },
        sun: {
          400: '#ffe14d',
          500: '#ffd400',
          600: '#e6be00',
        },
        coral: {
          400: '#ff7b77',
          500: '#ff5e5b',
          600: '#e64744',
          700: '#c5302d',
        },
        graphite: '#141414',
        paper: '#f4f3ef',
        paper2: '#e7e5de',
        ash: '#8c8c86',
        accent: '#12B57A',
        signal: '#ffd400',
      },
      screens: {
        xs: '480px',
      },
      borderRadius: {
        frame: '28px',
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.08)',
        lift: '0 20px 40px -15px rgba(22,10,12,0.14)',
        glow: '0 8px 24px -6px rgba(18,181,122,0.35)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
      },
      opacity,
      fontFamily: {
        display: ['Comfortaa', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
    },
  },
}
