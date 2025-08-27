import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // simula o DOM do navegador
    globals: true,         // permite usar describe, it, expect sem precisar importar
    setupFiles: './src/setupTests.js', // opcional, para mocks ou configurações adicionais
  },
});
