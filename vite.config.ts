import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configureStore } from '@reduxjs/toolkit';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3020,
    base: '/',
  },
  preview: {
    port: 3020,
  },
});
