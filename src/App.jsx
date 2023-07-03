
import Home from './components/Home'
import NotFound from './components/NotFound'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
