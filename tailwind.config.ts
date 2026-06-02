import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#16181C',
        'ink-2': '#2A2D33',
        'ink-3': '#4B4F57',
        mute: '#7E8089',
        bone: '#F4EFE6',
        paper: '#FAF7F1',
        'paper-2': '#EFE9DD',
        stone: '#E5E0D5',
        'stone-2': '#D4CEC0',
        moss: '#5C7A66',
        'moss-deep': '#3F5848',
        'moss-soft': '#A8BFA9',
        'moss-tint': '#DBE5DC',
        clay: '#B8552E',
        'clay-soft': '#E8C3AE',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Inter Tight', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
};

export default config;
