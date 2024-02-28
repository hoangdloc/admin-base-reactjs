/* eslint-disable import/no-nodejs-modules */
/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import crypto from 'crypto';
import path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import { qrcode } from 'vite-plugin-qrcode';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

const FALLBACK_DEV_PORT = 5173;
const PREVIEW_PORT = 8080;
const MAX_CSS_MODULE_NAME_LENGTH = 5;

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());

  let shouldUseSourceMap = false;
  if (command === 'serve') {
    shouldUseSourceMap = true;
  } else {
    shouldUseSourceMap = false;
  }

  return {
    appType: 'spa',
    build: {
      reportCompressedSize: true,
      sourcemap: shouldUseSourceMap,
    },
    cacheDir: 'node_modules/.vite',
    clearScreen: true,
    css: {
      devSourcemap: true,
      modules: {
        generateScopedName: (name, filename, css): string => {
          if (command === 'serve') {
            const fileBasename = path.basename(filename);
            const cleanFilename = fileBasename.replace(/\..*$/, '');
            return `${cleanFilename}__${name}`;
          }
          const hash = crypto
            .createHash('md5')
            .update(css)
            .digest('base64')
            .slice(0, MAX_CSS_MODULE_NAME_LENGTH);
          return hash;
        },
        localsConvention: 'camelCase',
        scopeBehaviour: 'local',
      },
      transformer: 'postcss',
    },
    json: {
      namedExports: true,
      stringify: false,
    },
    logLevel: 'info',
    plugins: [react(), svgr(), tsconfigPaths(), qrcode()],
    preview: {
      host: true,
      port: PREVIEW_PORT,
      strictPort: true,
    },
    publicDir: 'public',
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
      ],
    },
    server: {
      hmr: {
        overlay: true,
      },
      host: true,
      port: +env.VITE_PORT || FALLBACK_DEV_PORT,
      strictPort: true,
    },
    test: {
      coverage: {
        all: true,
        branches: 0,
        exclude: [
          '**/src/main.{js,jsx,ts,tsx}',
          '**/*.types.{ts,tsx}',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/src/vite-env*',
          '**/index.{js,jsx,ts,tsx}',
        ],
        functions: 0,
        include: ['**/src/**/*.{js,jsx,ts,tsx}'],
        lines: 0,
        provider: 'v8',
        reporter: ['text', 'json', 'html', 'lcov'],
        statements: 0,
      },
      environment: 'jsdom',
      globals: true,
      reporters: ['verbose'],
      setupFiles: ['./src/setupTests.ts'],
    },
  };
});
