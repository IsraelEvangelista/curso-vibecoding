import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true
  },
  preview: {
    port: 8080,
    strictPort: true,
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': [
            './src/components/ui/Avatar.tsx',
            './src/components/ui/Badge.tsx',
            './src/components/ui/Button.tsx',
            './src/components/ui/Card.tsx',
            './src/components/ui/Modal.tsx',
            './src/components/ui/Input.tsx'
          ],
          'features': [
            './src/components/features/Dashboard.tsx',
            './src/components/features/Aulas.tsx',
            './src/components/features/Ranking.tsx',
            './src/components/features/Comunidade.tsx'
          ],
          'quiz-system': [
            './src/components/features/QuizHeader.tsx',
            './src/components/features/QuizQuestionViewer.tsx',
            './src/components/features/QuizResultModal.tsx',
            './src/pages/QuizPage.tsx',
            './src/pages/QuizQuestionPage.tsx'
          ],
          'slide-system': [
            './src/components/features/SlideHeader.tsx',
            './src/components/features/SlideViewer.tsx',
            './src/pages/AulaSlidePage.tsx'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 600,
    minify: 'esbuild',
    target: 'esnext',
    sourcemap: false
  }
})
