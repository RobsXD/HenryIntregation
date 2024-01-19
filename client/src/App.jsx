import './App.css'
import { About, Detail, Home, Landing } from './Views/index'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
