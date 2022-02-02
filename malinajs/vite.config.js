import { defineConfig } from 'vite';
import { vitePlugin as malinaPlugin } from 'malinajs-unplugin';

export default defineConfig(({ mode }) => ({
  plugins: [
    malinaPlugin({
      debugLabel: mode === 'development',
    }),
  ],
}));
