import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'

import App from './App.tsx'
import { ThemeProvider } from './components/providers/theme-provider.tsx'
import ClerkProviderWithRoutes from './components/providers/clerk-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <ClerkProviderWithRoutes />
      <App />
    </ThemeProvider>
  </Router>
)
