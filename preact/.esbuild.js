require("esbuild")
  .build({
    entryPoints: ["views/index.tsx"],
    bundle: true,
    outfile: "public/dist.js",
  })
  .catch(() => process.exit(1));
