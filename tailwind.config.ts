import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
				orbitron: ["Orbitron", "monospace"],
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Neon theme colors
				neon: {
					orange: 'hsl(var(--neon-orange))',
					purple: 'hsl(var(--neon-purple))',
					pink: 'hsl(var(--neon-pink))',
					blue: 'hsl(var(--neon-blue))',
					yellow: 'hsl(var(--electric-yellow))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-10px) rotate(2deg)' },
					'50%': { transform: 'translateY(-20px) rotate(0deg)' },
					'75%': { transform: 'translateY(-10px) rotate(-2deg)' }
				},
				'glow': {
					'0%': { boxShadow: '0 0 20px hsl(var(--festive-orange) / 0.3)' },
					'100%': { boxShadow: '0 0 30px hsl(var(--festive-orange) / 0.6), 0 0 40px hsl(var(--festive-yellow) / 0.3)' }
				},
				'fadeInUp': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'sparkle': {
					'0%, 100%': { opacity: '0', transform: 'scale(0)' },
					'50%': { opacity: '1', transform: 'scale(1)' }
				},
				'neonGlow': {
					'0%': { boxShadow: '0 0 20px hsl(var(--neon-orange) / 0.4), 0 0 40px hsl(var(--neon-purple) / 0.2)' },
					'100%': { boxShadow: '0 0 40px hsl(var(--neon-orange) / 0.8), 0 0 80px hsl(var(--neon-purple) / 0.4)' }
				},
				'modakFall': {
					'from': { transform: 'translateY(-100px) rotate(0deg)', opacity: '1' },
					'to': { transform: 'translateY(calc(100vh + 100px)) rotate(360deg)', opacity: '0.8' }
				},
				'celebration': {
					'0%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
					'50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '0.8' },
					'100%': { transform: 'scale(1) rotate(360deg)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'neonGlow 2s ease-in-out infinite alternate',
				'fadeInUp': 'fadeInUp 0.8s ease-out',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'modakFall': 'modakFall 3s linear infinite',
				'celebration': 'celebration 1s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-neon': 'var(--gradient-neon)',
				'gradient-glow': 'var(--gradient-glow)',
				'gradient-electric': 'var(--gradient-electric)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
