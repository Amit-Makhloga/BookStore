// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/BookStore/', // Set this to match the "homepage" field in package.json
//   build: {
//     outDir: 'build', // Ensures the build output goes to the "build" directory
//   },
// });

export default defineConfig({
  base: '/BookStore/', // Ensure this is correct
  plugins: [react()]
});


