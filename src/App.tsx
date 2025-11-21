import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import Templates from './pages/Templates'
import Editor from './pages/Editor'
import MyWork from './pages/MyWork'
import HowToUse from './pages/HowToUse'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/editor/:templateId" element={<Editor />} />
          <Route path="/my-work" element={<MyWork />} />
          <Route path="/how-to-use" element={<HowToUse />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
