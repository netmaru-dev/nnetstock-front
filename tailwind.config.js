export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
    },
    colors: {
      transparent: 'transparent',
      primary: '#17ffb0',
      secondary: '#00a79d',
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
      xs: '370px', // 작은 모바일
      sm: '480px', // 일반적인 모바일
      md: '768px', // 태블릿
      lg: '1024px', // 작은 PC, 큰 태블릿
      xl: '1280px', // 일반적인 PC 화면
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
  ],
};
