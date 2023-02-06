import { defineConfig } from '@unocss/vite';
import presetUno from '@unocss/preset-uno';

export default defineConfig({
  exclude: ['node_modules', '.git', 'dist', 'public', 'build'],
  presets: [presetUno({ dark: 'class' })]
});
