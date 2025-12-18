import { defineConfig } from "vite";
import gsap from "@gsap/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [gsap()],
  base: "/SAE303/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(dirname, "index.html"),
        },
    },
  },
});