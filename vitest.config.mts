import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'node',
    testTimeout: 30000,
    include: ['src/**/*.{test,spec}.{ts,mts}'],
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },
})