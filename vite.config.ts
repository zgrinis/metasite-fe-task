import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: [/node_modules/], // Exclude all node_modules from processing
    },
  },
});
