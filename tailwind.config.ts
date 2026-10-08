import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: '#202326', sage: '#607b68', blush: '#f2dfd5', sand: '#fbf8f3' }, fontFamily: { sans: ['var(--font-inter)'], display: ['var(--font-playfair)'] } } }, plugins: [] };
export default config;
