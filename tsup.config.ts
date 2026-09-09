import { defineConfig } from "tsup";

export default defineConfig({
    entry: {
        index: "index.ts",
        Bell: "icons/Bell.tsx",
    },

    format: ["esm"],
    dts: true,
    sourcemap: true,
    clean: true,
    splitting: false,
    external: [
        "react",
        "react-dom",
        "motion",
    ],
});