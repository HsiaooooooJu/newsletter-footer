import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	base: '/newsletter-footer/',
	plugins: [tailwindcss(), react()],
	server: {
		port: 1234
	}
})
