import AppContent from "./assets/pages/AppContent/AppContent"
import { ThemeProvider } from "./assets/context/ThemeProvider/ThemeProvider"

function App() {

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
    
  )
}

export default App
