import { defineConfig } from "vite";
1

export default defineConfig({
  base: '/modernartgallery/',
  base: "./",
  build: {
            rollupOptions: {
              input: {
                index: 'index.html',
                html: './html/location.html',
                // Agrega aquí todos tus archivos HTML
              },
            },
          },
});

 