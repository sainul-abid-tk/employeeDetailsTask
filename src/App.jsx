import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Employee from './Pages/Employee'
import Header from './Components/Header'
function App() {
  return (
    <>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/employee/:id' element={<Employee/>}/>
    </Routes>
    </>
  )
}

export default App