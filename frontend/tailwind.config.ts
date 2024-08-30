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
        primary: {
          dark: {
            main: 'var(--primary-dark)',
            text: 'var(--text-primary-dark)',
            disabled: 'var(--primary-dark-disabled)'
          },
          light: { main: 'var(--primary-light)', text: 'var(--text-primary-light)' },
          'dark-hover': 'var(--primary-dark-hover)',
          'light-hover': 'var(--primary-light-hover)'
        },
        secondary: {
          dark: { main: 'var(--secondary-dark)', text: 'var(--text-secondary-dark)' },
          light: { main: 'var(--secondary-light)', text: 'var(--text-secondary-light)' }
        },
        button: {
          text: 'var(--text-button)'
        },
        elevation: {
          dark: {
            main: 'var(--elevation-dark)',
            one: 'var(--elevation-1-dark)',
            two: 'var(--elevation-2-dark)',
            three: 'var(--elevation-3-dark)'
          },
          light: {
            main: 'var(--elevation-light)',
            one: 'var(--elevation-1-light)',
            two: 'var(--elevation-2-light)',
            three: 'var(--elevation-3-light)'
          }
        },
        success: {
          main: 'var(--success-main)',
          'main-bg': 'var(--success-main-bg)',
          light: 'var(--success-light)'
        },
        error: 'var(--error)',
        warning: 'var(--warning)'
      },
      borderRadius: {
        buttonRounded: 'var(--button-radius-rounded)',
        cornerRounded: 'var(--corner-radius-rounded)',
        contentRounded: 'var(--content-radius-rounded)',
        curved: 'var(--radius-curved)'
      },
      boxShadow: {
        'gradient-border': '2px 1000px 1px rgba(13, 13, 13, 0.9) inset'
      },
      backgroundImage: {
        'gradient-button':
          'linear-gradient(107.95deg, rgba(39, 209, 127, 0.1) -12.97%, rgba(255, 255, 255, 0.1) 64.12%)'
      }
    }
  },
  plugins: []
};
export default config;
