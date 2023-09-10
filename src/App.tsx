import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar'
import HomePage from './pages/Home'
import MassageCalculatorPage from './pages/MassageCalculator'
import HistoryPage from './pages/History'
import MaterialsPage from './pages/Materials'
import CalendarPage from './pages/Calendar'
import SettingsPage from './pages/Settings'

function App() {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/massage-calculator"
            element={<MassageCalculatorPage />}
          />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/materials" element={<MaterialsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
