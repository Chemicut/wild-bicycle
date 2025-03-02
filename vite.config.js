import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  server: {
    host: "0.0.0.0", // Forza l'esposizione sulla rete
    port: 5173, // Puoi cambiare se necessario
    strictPort: true,
  },
})
