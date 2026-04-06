import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Tells Vite that index.html is inside the /src folder
  server: {
    host: '127.0.0.1', // Forces IPv4 to fix the Ubuntu localhost issue
    port: 5173,
  }
});