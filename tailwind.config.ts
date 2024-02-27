import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {
      colors: {
        'primary': '#2563eb',
        'secondary': '#8f94fb',
        'two': '#3b82f6',
        'three': '#1d4ed8',
      },
    }
  },
  plugins: [],
} satisfies Config

export default config