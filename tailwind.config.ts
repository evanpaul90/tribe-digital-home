
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
                // Custom colors
                amber: {
                    DEFAULT: '#f5b919',
                    50: '#fef9eb',
                    100: '#fcf2d7',
                    200: '#f9e5af',
                    300: '#f7d787',
                    400: '#f5c950',
                    500: '#f5b919',
                    600: '#c49415',
                    700: '#936f10',
                    800: '#624a0b',
                    900: '#312505'
                },
                cobalt: {
                    DEFAULT: '#468dcb',
                    50: '#f0f5fb',
                    100: '#e1ebf6',
                    200: '#c3d8ee',
                    300: '#a5c4e5',
                    400: '#78a7d8',
                    500: '#468dcb',
                    600: '#3871a3',
                    700: '#2a557a',
                    800: '#1c3852',
                    900: '#0e1c29'
                },
                charcoal: {
                    DEFAULT: '#303030',
                    50: '#f2f2f2',
                    100: '#e5e5e5',
                    200: '#cccccc',
                    300: '#b2b2b2',
                    400: '#999999',
                    500: '#7f7f7f',
                    600: '#666666',
                    700: '#4d4d4d',
                    800: '#333333',
                    900: '#1a1a1a'
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
                "fade-in": {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" }
                },
                "fade-out": {
                    "0%": { opacity: "1", transform: "translateY(0)" },
                    "100%": { opacity: "0", transform: "translateY(10px)" }
                },
                "slide-in": {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" }
                }
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.5s ease-out forwards",
                "fade-out": "fade-out 0.3s ease-out forwards",
                "slide-in": "slide-in 0.6s ease-out forwards"
			},
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'tribal-pattern': "url('/images/tribal-pattern.png')"
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
