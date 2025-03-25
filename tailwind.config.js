export default {
  darkMode: ['class', 'class'],
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
    colors: {
      transparent: 'transparent',
      main: '#17ffb0',
      sub: '#00a79d',
      white: '#ffffff',
      bg_day: '#f6f5fa',
      bg_night: '#151515',
      btn_gray: '#666666',
      text_black: '#151515',
      text_light1: '#999999',
      text_light2: '#bdbdbd',
      text_light3: '#cbcbcb',
    },
    fontSize: {
      10: '0.625rem',
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      28: '1.75rem',
    },
    maxWidth: {
      DEFAULT: '1440px',
    },
    screens: {
      xs: '370px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      // TODO 필요없으면 삭제
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.font-title': {
          'font-size': '1.5rem',
          'line-height': '2.25rem',
          'letter-spacing': '0.57%',
          'font-weight': 600,
        },
        '.font-head': {
          'font-size': '1.25rem',
          'line-height': '1.5rem',
          'letter-spacing': '0%',
          'font-weight': 600,
        },
        '.font-subhead': {
          'font-size': '1rem',
          'line-height': '1.5rem',
          'letter-spacing': '-1%',
          'font-weight': 600,
        },
        '.font-body': {
          'font-size': '1rem',
          'line-height': '1.25rem',
          'letter-spacing': '-1%',
          'font-weight': 500,
        },
        '.font-label': {
          'font-size': '0.875rem',
          'line-height': '1.125rem',
          'letter-spacing': '-1.5%',
          'font-weight': 500,
        },
        '.font-caption': {
          'font-size': '0.75rem',
          'line-height': '1rem',
          'letter-spacing': '1%',
          'font-weight': 500,
        },
        '.font-noto': {
          'font-size': '1rem',
          'font-family': 'Noto Sans KR',
          'line-height': '1.5',
        },
      };
      addUtilities(newUtilities);
    },
    require('tailwindcss-animate'),
  ],
};
