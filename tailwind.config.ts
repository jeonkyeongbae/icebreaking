import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { sans: ['var(--font-sans)', 'Arial', 'sans-serif'] }, colors: { ink: '#182230', cream: '#fffaf2', coral: '#ff6f61', mint: '#32c9a2', purple: '#7b61ff' }, boxShadow: { soft: '0 18px 45px rgba(33, 42, 57, .1)' } } }, plugins: [] };
export default config;
