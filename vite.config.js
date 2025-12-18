import { defineConfig } from "vite";
import gsap from "@gsap/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [gsap()],
  base: "/Sae303/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        },
    },
  },
});