import { defineConfig, loadEnv } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import stylelint from "vite-plugin-stylelint";
import svgr from "vite-plugin-svgr";

process.env = { ...process.env, ...loadEnv("production", process.cwd()) };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stylelint(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, 'src'),
      "@components": path.resolve(__dirname, "src/components"),
      "@services": path.resolve(__dirname, "src/services"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@hoc": path.resolve(__dirname, "src/hoc"),
      "@context": path.resolve(__dirname, "src/context"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@theme": path.resolve(__dirname, "src/theme"),
    },
  },
  server: {
    port: 3000,
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
    postcss: {},
  },
});
