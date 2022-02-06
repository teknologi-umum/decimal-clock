require("esbuild")
  .build({
    entryPoints: ["views/index.tsx"],
    bundle: true,
    minify: true,
    outfile: "dist/dist.min.js",
  })
  .catch(() => process.exit(1));
