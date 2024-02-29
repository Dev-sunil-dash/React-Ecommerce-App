
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NoPage from './pages/noPage/NoPage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
