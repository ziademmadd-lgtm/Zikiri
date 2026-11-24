import type { Config } from 'tailwindcss';
export default { content: ['./src/**/*.{ts,tsx}'], theme: { extend: { colors: { emerald: '#123B31', gold: '#D5BD87', ivory: '#F7F5EF', charcoal: '#252C29' }, fontFamily: { sans: ['Arial', 'sans-serif'] } } }, plugins: [] } satisfies Config;
