import React from 'react'
import { About, Contact, Home, Jobs, Login, Register } from './pages'
import { Navbar } from './components'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/about'element={<About />} />
        <Route path='/contact'element={<Contact />} />
        <Route path='/jobs'element={<Jobs />} />
        <Route path='/login'element={<Login />} />
        <Route path='/register'element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
