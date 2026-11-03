import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const pageFiles = [
  'index.html',
  'about.html',
  'services.html',
  'doctors.html',
  'appointment.html',
  'contact.html',
  'patient-information.html',
  'faq.html',
];

export default defineConfig({
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(pageFiles.map((file) => [file.replace('.html', ''), resolve(process.cwd(), file)])),
    },
  },
});
