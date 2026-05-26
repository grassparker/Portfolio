import { Routes, Route } from 'react-router-dom' // Removed Link since it's not used here yet
import Home from './home'
import Projects from './Projects/Projects'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App