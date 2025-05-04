import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroUIProvider, ToastProvider } from "@heroui/react"
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/theme-context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system">
      <HeroUIProvider>
        <ToastProvider/>
        <App />
      </HeroUIProvider>
    </ThemeProvider>
  </React.StrictMode>,
)