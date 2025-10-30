/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				gray: {
					50: '#f8f9f7',
					100: '#f0f1ec',
					200: '#e0e3dc',
					300: '#c8cbc4',
					400: '#a5aaa1',
					500: '#7f837c',
					600: '#5d615b',
					700: '#41443f',
					800: '#2a2c27',
					900: '#151613',
				},
				accent: {
					sage: '#7da87b',
					petrol: '#1f3e46',
					gold: '#d2a857',
				},
				brand: {
					primary: 'var(--accent-petrol)',
					secondary: 'var(--accent-sage)',
					highlight: 'var(--accent-gold)',
				},
			},
			fontFamily: {
				sans: ['Inter Tight', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
				serif: ['Fraunces', 'Times New Roman', 'serif'],
				mono: ['IBM Plex Mono', 'Söhne Mono', 'SFMono-Regular', 'ui-monospace', 'monospace'],
			},
			fontSize: {
				'hero-xl': 'clamp(1.65rem, 4.5vw, 3rem)',
				'hero-display': 'clamp(1.5rem, 3.75vw, 2.63rem)',
				'hero-identity': 'clamp(0.75rem, 1.5vw, 1.05rem)',
				'hero-context': 'clamp(0.68rem, 1.35vw, 0.9rem)',
				'title-lg': 'clamp(1.31rem, 3vw, 1.95rem)',
				'title-md': 'clamp(1.01rem, 2.25vw, 1.5rem)',
				'lead': 'clamp(0.79rem, 1.35vw, 1.05rem)',
				'body': 'clamp(0.71rem, 0.98vw, 0.86rem)',
				'sm': 'clamp(0.68rem, 0.83vw, 0.79rem)',
				'xs': 'clamp(0.56rem, 0.75vw, 0.71rem)',
			},
			spacing: {
				'2xs': '4px',
				'xs': '8px',
				'sm': '16px',
				'md': '24px',
				'lg': '40px',
				'xl': '64px',
				'2xl': '96px',
				'3xl': '128px',
			},
			transitionDuration: {
				fast: '160ms',
				normal: '360ms',
				slow: '640ms',
			},
			boxShadow: {
				sm: '0 6px 18px rgba(18, 19, 16, 0.06)',
				md: '0 16px 32px rgba(18, 19, 16, 0.08)',
				lg: '0 28px 48px rgba(18, 19, 16, 0.12)',
			},
			borderRadius: {
				sm: '6px',
				md: '12px',
				lg: '18px',
				xl: '24px',
				full: '9999px',
			},
		},
	},
	plugins: [],
}
