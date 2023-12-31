/* eslint-disable prettier/prettier */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        cblue: {
          linkedin: '#0A66C2'
        },
        cblack: {
          primary: '#181D21',
          github: '#333333'
        }
      },
      backgroundImage: {
        mountain: "url('../../public/img/wallpaper.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  keyframes: {
    overlayShow: {
      from: { opacity: 0 },
      to: { opacity: 1 }
    },
    contentShow: {
      from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
      to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
    }
  },
  animation: {
    'overlay-show': 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
    'content-show': 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)'
  }
};
export default config;
