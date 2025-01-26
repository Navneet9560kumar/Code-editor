import React from 'react'
import{Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Code from './pages/Code'
import Contest from './pages/CategoryPage/Contest'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Result from './pages/Result'
import Sheet from './pages/Sheet'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/code' element={<Code/>} />
        <Route path='/contest/:id' element={<Contest/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/result' element={<Result/>} />
        <Route path='/sheet' element={<Sheet/>} />
      </Routes>
    </div>
  )
}
export default App
