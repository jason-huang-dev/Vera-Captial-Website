import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			/* Colors */
			blue1: "#085299ff",  // Polynesian Blue
			blue2: "#04294dff",  // Oxford Blue
			black: "#000000ff",   // Black
			blue3: "#05579dff",  // Lapis Lazuli
			blue4: "#074e8dff",  // Polynesian Blue 2
			blue5: "#08457cff",  // Indigo Dye
			blue6: "#115b7dff",  // Lapis Lazuli 2
			blue7: "#19717eff",  // Caribbean Current
			blue8: "#2e7e8aff",  // Teal
			blue9: "#418a95ff",  // Blue Munsell
			
			/* Gradients */
			gradientTop: "linear-gradient(0deg, blue1, blue2, black, blue3, blue4, blue5, blue6, blue7, blue8, blue9)",
			gradientRight: "linear-gradient(90deg, blue1, blue2, black, blue3, blue4, blue5, blue6, blue7, blue8, blue9)",
			gradientBottom: "linear-gradient(180deg, blue1, blue2, black, blue3, blue4, blue5, blue6, blue7, blue8, blue9)",
			gradientLeft: "linear-gradient(270deg, blue1, blue2, black, blue3, blue4, blue5, blue6, blue7, blue8, blue9)",
			gradientTopRight: "linear-gradient(45deg, blue1, blue2, black, blue3, blue4, blue5, blue6, blue7, blue8, blue9)",
			gradientBottomRight: "linear-gradient(135deg, blue1, blue2, black, blue3, blue4, blue5, blue6, blue7, blue8, blue9)",
			gradientTopLeft: "linear-gradient(225deg, blue1, blue2, black, blue3, blue4, blue5, blue6, blue7, blue8, blue9)",
			gradientBottomLeft: "linear-gradient(315deg, blue1, blue2, black, blue3, blue4, blue5, blue6, blue7, blue8, blue9)",
			gradientRadial: "radial-gradient(blue1, blue2, black, blue3, blue4, blue5, blue6, blue7, blue8, blue9)",

  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
