import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Overview } from './pages/Overview'
import { Deshboard } from './pages/Deshboard'

function App() {
  
  return (
    <>  
  <Routes>
    <Route path='/' element={<Deshboard/>}/>
    <Route path='/overview' element={<Overview/>}/>

  </Routes>

    </>
  )
}

export default App


